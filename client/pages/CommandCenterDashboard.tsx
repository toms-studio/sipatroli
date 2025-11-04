import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockPatrolUnits, mockVehicles, mockReports } from "@shared/mockData";

export default function CommandCenterDashboard() {
  const navigate = useNavigate();
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [unitSearchInput, setUnitSearchInput] = useState("");
  const [plateSearchInput, setPlateSearchInput] = useState("");
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportData, setReportData] = useState({
    plate: "",
    alertLevel: "TINGGI",
    type: "",
    description: "",
  });

  const selectedUnit = mockPatrolUnits.find((u) => u.id === selectedUnitId);

  const filteredUnits = mockPatrolUnits.filter((unit) =>
    unit.unitId.toLowerCase().includes(unitSearchInput.toLowerCase())
  );

  const handleUnitClick = (unitId: string) => {
    setSelectedUnitId(unitId);
  };

  const handleReportSubmit = () => {
    console.log("Report submitted:", reportData);
    setShowReportModal(false);
    setReportData({ plate: "", alertLevel: "TINGGI", type: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="material-icons text-white" style={{ fontSize: "20px" }}>
                security
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold">PUSAT KOMANDO</h1>
                <div className="flex items-center gap-1 bg-green-900/50 px-2 py-1 rounded-full border border-green-700">
                  <span className="status-dot online"></span>
                  <span className="text-xs font-bold text-green-400">LIVE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-xs text-gray-400 mb-1">Aktif Unit</p>
                <p className="text-2xl font-bold text-amber-400">24</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Peringatan Hari Ini</p>
                <p className="text-2xl font-bold text-red-400">156</p>
              </div>
            </div>

            {/* Search and Report */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari plat nomor..."
                  value={plateSearchInput}
                  onChange={(e) => setPlateSearchInput(e.target.value)}
                  className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <span className="material-icons absolute right-3 top-2.5 text-gray-400" style={{ fontSize: "18px" }}>
                  search
                </span>
              </div>
              <button
                onClick={() => setShowReportModal(true)}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <span className="material-icons" style={{ fontSize: "18px" }}>
                  warning
                </span>
                Laporkan Kendaraan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar - Vehicle List */}
        <div className="w-80 bg-slate-800 border-r border-slate-700 flex flex-col overflow-hidden">
          {/* Sidebar Header */}
          <div className="px-4 py-4 border-b border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-icons text-amber-500" style={{ fontSize: "20px" }}>
                directions_car
              </span>
              <h2 className="font-semibold">Unit Patroli Aktif</h2>
            </div>
            <input
              type="text"
              placeholder="Cari unit..."
              value={unitSearchInput}
              onChange={(e) => setUnitSearchInput(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Unit List */}
          <div className="flex-1 overflow-y-auto">
            {filteredUnits.map((unit) => (
              <button
                key={unit.id}
                onClick={() => handleUnitClick(unit.id)}
                className={`w-full px-4 py-3 border-b border-slate-700 text-left transition-colors ${
                  selectedUnitId === unit.id
                    ? "bg-slate-700 border-l-4 border-l-amber-500"
                    : "hover:bg-slate-700/50"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-sm">{unit.unitId}</p>
                    <p className="text-xs text-gray-400">{unit.plate}</p>
                  </div>
                  <span className="status-dot online"></span>
                </div>
                <p className="text-xs text-gray-400">{unit.location.address}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Center - Map Area */}
        <div className="flex-1 bg-slate-900 relative overflow-hidden flex items-center justify-center">
          {/* Map Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-amber-500 opacity-10"></div>
              <div className="absolute w-24 h-24 rounded-full border-2 border-amber-500 opacity-20"></div>
            </div>
            <div className="text-center z-10">
              <p className="text-3xl font-bold text-amber-500 mb-4">🗺️</p>
              <p className="text-gray-400">Jakarta Area - Patrol Units Active</p>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-6 right-6 flex gap-3">
            <button className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors border border-slate-600">
              <span className="material-icons text-gray-300" style={{ fontSize: "20px" }}>
                my_location
              </span>
            </button>
            <button className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors border border-slate-600">
              <span className="material-icons text-gray-300" style={{ fontSize: "20px" }}>
                layers
              </span>
            </button>
            <button className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors border border-slate-600">
              <span className="material-icons text-gray-300" style={{ fontSize: "20px" }}>
                refresh
              </span>
            </button>
          </div>
        </div>

        {/* Right Sidebar - Detail Panel */}
        {selectedUnit && (
          <div className="w-80 bg-slate-800 border-l border-slate-700 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-4 py-4 border-b border-slate-700 flex items-center justify-between">
              <h3 className="font-semibold">Detail Patroli</h3>
              <button
                onClick={() => setSelectedUnitId(null)}
                className="p-1 hover:bg-slate-700 rounded transition-colors"
              >
                <span className="material-icons text-gray-400" style={{ fontSize: "20px" }}>
                  close
                </span>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
              {/* Informasi Unit */}
              <div>
                <h4 className="text-xs font-semibold text-amber-400 mb-3">Informasi Unit</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-400">ID Unit</p>
                    <p className="text-sm font-semibold">{selectedUnit.unitId}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Status</p>
                    <div className="inline-block px-2 py-1 bg-green-900/50 text-green-400 rounded text-xs font-semibold border border-green-700">
                      {selectedUnit.status}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Plat Kendaraan</p>
                    <p className="text-sm font-semibold">{selectedUnit.plate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Lokasi</p>
                    <p className="text-sm font-semibold">{selectedUnit.location.address}</p>
                  </div>
                </div>
              </div>

              {/* Informasi Petugas */}
              <div>
                <h4 className="text-xs font-semibold text-amber-400 mb-3">Informasi Petugas</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-400">Nama</p>
                    <p className="text-sm font-semibold">{selectedUnit.officer.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">No. Lencana</p>
                    <p className="text-sm font-semibold">{selectedUnit.officer.badge}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Mulai Shift</p>
                    <p className="text-sm font-semibold">{selectedUnit.officer.shiftStart}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Durasi</p>
                    <p className="text-sm font-semibold">{selectedUnit.officer.shiftDuration} jam</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <button className="w-full py-2 bg-amber-600 hover:bg-amber-700 rounded text-sm font-semibold transition-colors">
                Kirim Unit Terdekat
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-lg shadow-xl max-w-md w-full border border-slate-700">
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
              <h3 className="font-semibold">Laporkan Kendaraan</h3>
              <button
                onClick={() => setShowReportModal(false)}
                className="p-1 hover:bg-slate-700 rounded transition-colors"
              >
                <span className="material-icons text-gray-400" style={{ fontSize: "20px" }}>
                  close
                </span>
              </button>
            </div>

            {/* Form */}
            <div className="px-6 py-4 space-y-4">
              {/* Plate Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2">
                  Nomor Plat
                </label>
                <input
                  type="text"
                  value={reportData.plate}
                  onChange={(e) =>
                    setReportData({ ...reportData, plate: e.target.value })
                  }
                  placeholder="Masukkan nomor plat"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Alert Level */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2">
                  Tingkat Peringatan
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["KRITIS", "TINGGI", "SEDANG", "RENDAH"].map((level) => (
                    <button
                      key={level}
                      onClick={() =>
                        setReportData({ ...reportData, alertLevel: level })
                      }
                      className={`px-3 py-2 rounded text-xs font-semibold transition-colors ${
                        reportData.alertLevel === level
                          ? "bg-amber-600 text-white"
                          : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Report Type */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2">
                  Jenis Laporan
                </label>
                <input
                  type="text"
                  value={reportData.type}
                  onChange={(e) =>
                    setReportData({ ...reportData, type: e.target.value })
                  }
                  placeholder="Contoh: Pencurian, Kecelakaan"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2">
                  Deskripsi
                </label>
                <textarea
                  value={reportData.description}
                  onChange={(e) =>
                    setReportData({ ...reportData, description: e.target.value })
                  }
                  placeholder="Masukkan deskripsi laporan"
                  rows={4}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 border-t border-slate-700 flex gap-3">
              <button
                onClick={() => setShowReportModal(false)}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-sm font-semibold transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleReportSubmit}
                className="flex-1 px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded text-sm font-semibold transition-colors"
              >
                Kirim Laporan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
