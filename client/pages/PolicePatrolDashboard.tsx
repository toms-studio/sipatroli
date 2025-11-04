import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockVehicles } from "@shared/mockData";

const statusColors: Record<string, { bg: string; text: string }> = {
  CURIAN: { bg: "bg-red-100", text: "text-red-700" },
  BERSIH: { bg: "bg-green-100", text: "text-green-700" },
  SIM_DICABUT: { bg: "bg-orange-100", text: "text-orange-700" },
  CRITICAL: { bg: "bg-red-100", text: "text-red-700" },
  HIGH: { bg: "bg-orange-100", text: "text-orange-700" },
  MEDIUM: { bg: "bg-yellow-100", text: "text-yellow-700" },
};

export default function PolicePatrolDashboard() {
  const navigate = useNavigate();
  const [selectedPlate, setSelectedPlate] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const vehicles = Object.values(mockVehicles);

  const handlePlateClick = (plate: string) => {
    navigate(`/police-patrol/vehicle/${plate}`);
  };

  const filteredVehicles = vehicles.filter((v) =>
    v.plate.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const handleSelectSuggestion = (plate: string) => {
    setSearchInput(plate);
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span
                  className="material-icons text-white"
                  style={{ fontSize: "20px" }}
                >
                  person
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">IPTU Budi Santoso</p>
                <p className="text-xs text-gray-600">Lencana: 87654321</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="status-dot online"></span>
                <span className="text-xs font-medium">LPR Aktif</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="status-dot online"></span>
                <span className="text-xs font-medium">Database</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="status-dot online"></span>
                <span className="text-xs font-medium">GPS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="status-dot warning"></span>
                <span className="text-xs font-medium">4G/Sedang</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Left: LPR Panel */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Panel Header */}
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="material-icons text-blue-600"
                    style={{ fontSize: "24px" }}
                  >
                    photo_camera
                  </span>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Pemindaian LPR
                  </h2>
                </div>
                <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                  <span className="status-dot online"></span>
                  <span className="text-xs font-bold text-green-700">LIVE</span>
                </div>
              </div>

              {/* Plate List */}
              <div className="max-h-96 overflow-y-auto">
                {vehicles.map((vehicle) => (
                  <button
                    key={vehicle.id}
                    onClick={() => handlePlateClick(vehicle.plate)}
                    className="w-full px-6 py-3 border-b border-gray-100 hover:bg-blue-50 transition-colors text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">
                          {vehicle.plate}
                        </p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-600">
                          <span>{vehicle.lastScanned}</span>
                          <span>{vehicle.accuracy}% Akurasi</span>
                          <span>{vehicle.speed} km/h</span>
                        </div>
                      </div>
                      {vehicle.status !== "BERSIH" && (
                        <div
                          className={`px-3 py-1 rounded text-xs font-semibold ${
                            statusColors[vehicle.status]?.bg || "bg-gray-100"
                          } ${statusColors[vehicle.status]?.text || "text-gray-700"}`}
                        >
                          {vehicle.status === "CURIAN"
                            ? "CURIAN"
                            : vehicle.status === "HIGH"
                              ? "TINGGI"
                              : vehicle.status === "CRITICAL"
                                ? "KRITIS"
                                : "MEDIUM"}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Side Panel */}
          <div className="space-y-6">
            {/* Search Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Pencarian Plat Nomor
              </h3>
              <div className="relative">
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                  <span
                    className="material-icons text-gray-400"
                    style={{ fontSize: "20px" }}
                  >
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Masukkan plat nomor..."
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    className="flex-1 ml-2 bg-transparent outline-none text-sm text-gray-900"
                  />
                </div>

                {/* Suggestions Dropdown */}
                {showSuggestions && filteredVehicles.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {filteredVehicles.map((vehicle) => (
                      <button
                        key={vehicle.id}
                        onClick={() => handleSelectSuggestion(vehicle.plate)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">{vehicle.plate}</span>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              statusColors[vehicle.status]?.bg || "bg-gray-100"
                            } ${statusColors[vehicle.status]?.text || "text-gray-700"}`}
                          >
                            {vehicle.status === "BERSIH"
                              ? "BERSIH"
                              : vehicle.status === "CURIAN"
                                ? "CURIAN"
                                : "ALERT"}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Statistics Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Statistik Peringatan
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <p className="text-2xl font-bold text-red-700">3</p>
                  <p className="text-xs text-red-600 mt-1">Kritis</p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-700">8</p>
                  <p className="text-xs text-orange-600 mt-1">Tinggi</p>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-700">15</p>
                  <p className="text-xs text-yellow-600 mt-1">Sedang</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-700">2</p>
                  <p className="text-xs text-blue-600 mt-1">Dicegat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
