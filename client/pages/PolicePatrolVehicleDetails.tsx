import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockVehicles } from "@shared/mockData";

const statusColors: Record<string, { bg: string; text: string }> = {
  CURIAN: { bg: "bg-red-100", text: "text-red-700" },
  BERSIH: { bg: "bg-green-100", text: "text-green-700" },
  SIM_DICABUT: { bg: "bg-orange-100", text: "text-orange-700" },
  AKTIF: { bg: "bg-green-100", text: "text-green-700" },
  SUSPENDED: { bg: "bg-orange-100", text: "text-orange-700" },
  EXPIRED: { bg: "bg-red-100", text: "text-red-700" },
};

export default function PolicePatrolVehicleDetails() {
  const { plate } = useParams<{ plate: string }>();
  const navigate = useNavigate();
  const vehicle = mockVehicles[plate || ""];
  const [activeTab, setActiveTab] = useState("vehicle");

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Kendaraan tidak ditemukan</p>
          <button
            onClick={() => navigate("/police-patrol/dashboard")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    );
  }

  const totalFines = vehicle.violations.reduce((acc, v) => acc + v.fine, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/police-patrol/dashboard")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <span className="material-icons" style={{ fontSize: "20px" }}>
              arrow_back
            </span>
            <span className="text-sm font-medium">Kembali</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Detail Kendaraan</h1>
          <p className="text-lg font-semibold text-blue-600 mt-2">{vehicle.plate}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-8">
            {[
              { id: "vehicle", label: "Kendaraan" },
              { id: "owner", label: "Pemilik" },
              { id: "violations", label: "Pelanggaran" },
              { id: "reports", label: "Laporan" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Vehicle Tab */}
        {activeTab === "vehicle" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Kendaraan</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">Nomor Plat</p>
                <p className="text-sm font-semibold text-gray-900">{vehicle.plate}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">Status</p>
                <div
                  className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                    statusColors[vehicle.status]?.bg || "bg-gray-100"
                  } ${statusColors[vehicle.status]?.text || "text-gray-700"}`}
                >
                  {vehicle.status === "CURIAN" ? "CURIAN" : vehicle.status}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">Merk/Tipe</p>
                <p className="text-sm font-semibold text-gray-900">
                  {vehicle.brand} {vehicle.type}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">Tahun</p>
                <p className="text-sm font-semibold text-gray-900">{vehicle.year}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">Warna</p>
                <p className="text-sm font-semibold text-gray-900">{vehicle.color}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">No. Rangka</p>
                <p className="text-sm font-semibold text-gray-900">{vehicle.frameNumber}</p>
              </div>
            </div>
          </div>
        )}

        {/* Owner Tab */}
        {activeTab === "owner" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Pemilik</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">Nama Lengkap</p>
                <p className="text-sm font-semibold text-gray-900">{vehicle.owner.name}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">NIK</p>
                <p className="text-sm font-semibold text-gray-900">{vehicle.owner.nik}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">Tanggal Lahir</p>
                <p className="text-sm font-semibold text-gray-900">{vehicle.owner.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">No. SIM</p>
                <p className="text-sm font-semibold text-gray-900">{vehicle.owner.simNumber}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">Status SIM</p>
                <div
                  className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                    statusColors[vehicle.owner.simStatus]?.bg || "bg-gray-100"
                  } ${statusColors[vehicle.owner.simStatus]?.text || "text-gray-700"}`}
                >
                  {vehicle.owner.simStatus}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">No. Telepon</p>
                <p className="text-sm font-semibold text-gray-900">{vehicle.owner.phone}</p>
              </div>
            </div>
          </div>
        )}

        {/* Violations Tab */}
        {activeTab === "violations" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Riwayat Pelanggaran</h3>
            {vehicle.violations.length > 0 ? (
              <>
                <div className="space-y-3 mb-6">
                  {vehicle.violations.map((violation, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {violation.description}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">{violation.date}</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">
                          Rp {violation.fine.toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-red-700 mb-1">Total Tunggakan</p>
                  <p className="text-xl font-bold text-red-700">
                    Rp {totalFines.toLocaleString("id-ID")}
                  </p>
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-600">Tidak ada pelanggaran</p>
            )}
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="space-y-4">
            {vehicle.reports.length > 0 ? (
              vehicle.reports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-2 rounded-lg ${
                        report.type === "LAPORAN_PENCURIAN"
                          ? "bg-red-100"
                          : "bg-blue-100"
                      }`}
                    >
                      <span
                        className={`material-icons ${
                          report.type === "LAPORAN_PENCURIAN"
                            ? "text-red-700"
                            : "text-blue-700"
                        }`}
                        style={{ fontSize: "24px" }}
                      >
                        {report.type === "LAPORAN_PENCURIAN" ? "warning" : "shield"}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {report.type === "LAPORAN_PENCURIAN"
                          ? "LAPORAN PENCURIAN"
                          : "DAFTAR PENCARIAN ORANG"}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">{report.timestamp}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {report.type === "LAPORAN_PENCURIAN" && (
                      <>
                        <div>
                          <p className="text-xs font-semibold text-gray-600">No. Laporan</p>
                          <p className="text-sm text-gray-900">
                            {report.details.reportNumber}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600">Lokasi</p>
                          <p className="text-sm text-gray-900">{report.details.location}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600">Status</p>
                          <p className="text-sm text-gray-900">{report.details.status}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600">Pelapor</p>
                          <p className="text-sm text-gray-900">{report.details.reporter}</p>
                        </div>
                      </>
                    )}
                    {report.type === "DAFTAR_PENCARIAN_ORANG" && (
                      <>
                        <div>
                          <p className="text-xs font-semibold text-gray-600">Kasus</p>
                          <p className="text-sm text-gray-900">{report.details.case}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600">Penerbit</p>
                          <p className="text-sm text-gray-900">
                            {report.details.publisher}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600">Prioritas</p>
                          <p className="text-sm text-gray-900">
                            {report.details.priority}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600">Tindakan</p>
                          <p className="text-sm text-gray-900">{report.details.action}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className="text-sm text-gray-600">Tidak ada laporan</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
