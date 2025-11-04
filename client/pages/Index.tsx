import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Sistem Kepolisian Terpadu
          </h1>
          <p className="text-gray-600 mt-2">
            Platform Manajemen Patroli dan Komando Kepolisian
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Police Patrol App */}
          <div
            onClick={() => navigate("/police-patrol/login")}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <span
                      className="material-icons text-white"
                      style={{ fontSize: "32px" }}
                    >
                      local_police
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">SIPATROLI</h2>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-8 py-6">
                <p className="text-gray-700 font-semibold mb-2">
                  Sistem Informasi Patroli Kepolisian RI
                </p>
                <p className="text-gray-600 text-sm mb-6">
                  Platform tablet untuk petugas patroli dengan kemampuan
                  scanning plat nomor real-time, pencarian kendaraan, dan
                  manajemen pelanggaran.
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-blue-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Scanning LPR Real-time
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-blue-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Pencarian Plat Nomor
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-blue-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Database Kendaraan & Pemilik
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-blue-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Manajemen Pelanggaran & Laporan
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md">
                  Masuk SIPATROLI
                </button>
              </div>
            </div>
          </div>

          {/* Command Center App */}
          <div
            onClick={() => navigate("/command-center/login")}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <span
                      className="material-icons text-white"
                      style={{ fontSize: "32px" }}
                    >
                      security
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">PUSKOMANDO</h2>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-8 py-6">
                <p className="text-gray-700 font-semibold mb-2">
                  Pusat Komando Kepolisian RI
                </p>
                <p className="text-gray-600 text-sm mb-6">
                  Dashboard komando dan kontrol untuk monitoring unit patroli,
                  tracking real-time, dan manajemen laporan operasional dengan
                  visualisasi peta.
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-amber-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Dashboard Monitoring Peta
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-amber-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Tracking Unit Patroli Real-time
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-amber-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Manajemen Laporan & Insiden
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-amber-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Sistem Komando & Kontrol
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-all shadow-md">
                  Masuk PUSKOMANDO
                </button>
              </div>
            </div>
          </div>

          {/* Documentation */}
          <div
            onClick={() => navigate("/documentation")}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <span
                      className="material-icons text-white"
                      style={{ fontSize: "32px" }}
                    >
                      description
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Dokumentasi</h2>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-8 py-6">
                <p className="text-gray-700 font-semibold mb-2">
                  Spesifikasi Fitur SIPATROLI
                </p>
                <p className="text-gray-600 text-sm mb-6">
                  Dokumentasi lengkap tentang arsitektur sistem, fitur-fitur,
                  alur kerja, dan panduan teknis untuk platform SIPATROLI dan
                  PUSKOMANDO.
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-purple-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Spesifikasi Fitur Lengkap
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-purple-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Arsitektur Sistem Terpadu
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-purple-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Alur Kerja & Integrasi Data
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="material-icons text-purple-600"
                      style={{ fontSize: "18px" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm text-gray-700">
                      Panduan Teknis & Keamanan
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-md">
                  Baca Dokumentasi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Selamat Datang di Platform Kepolisian Terpadu
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Solusi terintegrasi untuk meningkatkan efektivitas operasional
            kepolisian dengan teknologi informasi terkini. Pilih aplikasi di
            atas untuk memulai.
          </p>
        </div>
      </div>
    </div>
  );
}
