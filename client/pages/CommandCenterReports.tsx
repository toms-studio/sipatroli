import { useState } from "react";
import { mockReports } from "@shared/mockData";

const priorityColors: Record<string, { bg: string; text: string }> = {
  KRITIS: { bg: "bg-red-900/50", text: "text-red-400" },
  TINGGI: { bg: "bg-orange-900/50", text: "text-orange-400" },
  SEDANG: { bg: "bg-yellow-900/50", text: "text-yellow-400" },
  RENDAH: { bg: "bg-blue-900/50", text: "text-blue-400" },
};

const statusColors: Record<string, { bg: string; text: string }> = {
  AKTIF: { bg: "bg-red-900/50", text: "text-red-400" },
  PENDING: { bg: "bg-yellow-900/50", text: "text-yellow-400" },
  RESOLVED: { bg: "bg-green-900/50", text: "text-green-400" },
};

export default function CommandCenterReports() {
  const [searchInput, setSearchInput] = useState("");
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filters = ["Semua", "Pencurian", "DPO", "Aktif"];

  const filteredReports = mockReports.filter((report) => {
    const matchesSearch =
      report.plate.toLowerCase().includes(searchInput.toLowerCase()) ||
      report.reportNumber.toLowerCase().includes(searchInput.toLowerCase()) ||
      report.location.toLowerCase().includes(searchInput.toLowerCase());

    if (activeFilter === "Semua") return matchesSearch;
    if (activeFilter === "Pencurian") return matchesSearch && report.type === "PENCURIAN";
    if (activeFilter === "DPO") return matchesSearch && report.type === "DPO";
    if (activeFilter === "Aktif") return matchesSearch && report.status === "AKTIF";
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 px-6 py-4">
        <h1 className="text-2xl font-bold">Related Reports</h1>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          {/* Controls */}
          <div className="px-6 py-4 border-b border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1 mr-4">
                <input
                  type="text"
                  placeholder="Cari laporan..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-amber-600 text-white"
                      : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-700/50">
                  <th className="px-6 py-3 text-left font-semibold">No Kendaraan</th>
                  <th className="px-6 py-3 text-left font-semibold">Tipe</th>
                  <th className="px-6 py-3 text-left font-semibold">No Laporan / Kasus</th>
                  <th className="px-6 py-3 text-left font-semibold">Status / Prioritas</th>
                  <th className="px-6 py-3 text-left font-semibold">Lokasi / Penerbit</th>
                  <th className="px-6 py-3 text-left font-semibold">Pelapor / Aksi</th>
                  <th className="px-6 py-3 text-left font-semibold">Waktu</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.length > 0 ? (
                  filteredReports.map((report) => (
                    <tr
                      key={report.id}
                      className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-semibold text-amber-400">{report.plate}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-300">
                          {report.type === "PENCURIAN"
                            ? "Pencurian"
                            : report.type === "DPO"
                            ? "DPO"
                            : "Pelanggaran"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-300">{report.reportNumber}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              statusColors[report.status]?.bg ||
                              priorityColors[report.priority]?.bg
                            } ${
                              statusColors[report.status]?.text ||
                              priorityColors[report.priority]?.text
                            }`}
                          >
                            {report.status || report.priority}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-300">{report.location}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-300">{report.reporter}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-400 text-xs">{report.timestamp}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-400">
                      Tidak ada laporan yang sesuai dengan pencarian
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
