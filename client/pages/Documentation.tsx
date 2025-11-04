import { useNavigate } from "react-router-dom";

export default function Documentation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <span className="material-icons" style={{ fontSize: "20px" }}>
              arrow_back
            </span>
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              SIPATROLI - Spesifikasi Fitur
            </h1>
            <p className="text-gray-600 mt-2">
              Indonesian Police Patrol Information System
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Versi 1.0 | Oktober 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Executive Summary */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="material-icons text-blue-600">info</span>
            Ringkasan Eksekutif
          </h2>
          <p className="text-gray-700 mb-4">
            SIPATROLI adalah sistem penegakan lalu lintas yang komprehensif untuk
            Kepolisian Republik Indonesia (Kepolisian RI).
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <p className="font-semibold text-gray-900 mb-2">
                🚔 Aplikasi Mobile SIPATROLI (Tablet Android)
              </p>
              <p className="text-sm text-gray-700">
                Aplikasi lapangan untuk petugas patroli memantau dan merespons
                data pengenalan plat lisensi (LPR) secara real-time selama
                patroli aktif.
              </p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
              <p className="font-semibold text-gray-900 mb-2">
                🎛️ Aplikasi Web PUSKOMANDO (Pusat Komando)
              </p>
              <p className="text-sm text-gray-700">
                Dashboard pusat komando untuk memantau semua unit patroli aktif,
                mengelola laporan kendaraan, dan mengkoordinasikan kegiatan
                penegakan di seluruh yurisdiksi.
              </p>
            </div>
          </div>
        </section>

        {/* System Overview */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="material-icons text-blue-600">architecture</span>
            Ringkasan Sistem
          </h2>
          <p className="text-gray-700 mb-6">
            SIPATROLI mengintegrasikan data LPR real-time dari kamera yang
            dipasang di kendaraan dengan database kendaraan pemerintah untuk
            menghasilkan peringatan instan.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Tiga Lapisan Arsitektur Utama:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">
                1️⃣ Lapisan Hardware
              </h4>
              <p className="text-sm text-red-800">
                Kamera LPR + DPU (Data Processing Unit) — pemindaian kendaraan,
                penangkapan gambar, pemrosesan OCR, pelacakan GPS.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">
                2️⃣ Lapisan Data
              </h4>
              <p className="text-sm text-blue-800">
                Database Pemerintah — kepemilikan kendaraan, lisensi pengemudi,
                riwayat pelanggaran.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">
                3️⃣ Lapisan Aplikasi
              </h4>
              <p className="text-sm text-green-800">
                SIPATROLI Mobile + PUSKOMANDO Web — antarmuka pengguna,
                manajemen laporan, tampilan peringatan.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="material-icons text-blue-600">flow_start</span>
            Cara Kerjanya
          </h2>
          <div className="space-y-3">
            {[
              {
                step: "Scanning",
                desc: "Kamera LPR yang dipasang di kendaraan memindai plat nomor saat patroli bergerak.",
              },
              {
                step: "Processing",
                desc: "DPU melakukan OCR untuk mengekstrak nomor plat dan koordinat GPS.",
              },
              {
                step: "Streaming",
                desc: "Data yang dipindai ditransmisikan secara real-time ke backend melalui 4G.",
              },
              {
                step: "Data Integration",
                desc: "Data LPR bergabung dengan data kendaraan dan pengemudi pemerintah secara otomatis.",
              },
              {
                step: "Alert Generation",
                desc: "Kecocokan memicu peringatan untuk kendaraan curian/bersuspensi/kadaluarsa/dicari.",
              },
              {
                step: "Officer Response",
                desc: "Petugas meninjau peringatan dan mengambil tindakan penegakan.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white text-sm font-semibold">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.step}</h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="material-icons text-blue-600">featured_play_list</span>
            Fitur Utama
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-blue-600">
              🚔 SIPATROLI Mobile App
            </h3>
            <div className="space-y-2">
              {[
                "Login aman dengan nomor lencana",
                "Tampilan real-time plat yang dipindai selama patroli",
                "Sistem peringatan berwarna berdasarkan prioritas",
                "Tampilan detail kendaraan dengan empat tab: Kendaraan, Pemilik, Pelanggaran, Laporan",
                "Pencarian plat nomor",
                "Dashboard statistik shift",
                "Tampilan data offline",
                "Indikator status koneksi (LPR, Database, GPS, 4G)",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="material-icons text-blue-600 flex-shrink-0" style={{ fontSize: "18px" }}>
                    check_circle
                  </span>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-amber-600">
              🎛️ PUSKOMANDO Command Center
            </h3>
            <div className="space-y-2">
              {[
                "Login aman untuk operator",
                "Peta real-time dengan pelacakan GPS semua unit patroli aktif",
                "Kartu status unit patroli interaktif",
                "Pencarian plat nomor di semua unit",
                "Antarmuka pembuatan laporan kendaraan",
                "Tampilan laporan terkait dengan penyaringan",
                "Statistik sistem-lebar",
                "Pelaporan insiden kendaraan",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="material-icons text-amber-600 flex-shrink-0" style={{ fontSize: "18px" }}>
                    check_circle
                  </span>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Color System */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="material-icons text-blue-600">palette</span>
            Sistem Warna & Prioritas Peringatan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border-l-4 border-red-600 p-4">
              <p className="font-semibold text-red-700 mb-1">🔴 KRITIS (Merah)</p>
              <p className="text-sm text-red-600">
                Kendaraan curian, orang dicari, ancaman keamanan tinggi
              </p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
              <p className="font-semibold text-orange-700 mb-1">🟠 TINGGI (Oranye)</p>
              <p className="text-sm text-orange-600">
                Lisensi bersuspensi, pelanggaran serius
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
              <p className="font-semibold text-yellow-700 mb-1">
                🟡 SEDANG (Kuning)
              </p>
              <p className="text-sm text-yellow-600">
                Pendaftaran kadaluarsa, pelanggaran sedang
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <p className="font-semibold text-blue-700 mb-1">🔵 RENDAH (Biru)</p>
              <p className="text-sm text-blue-600">
                Pelanggaran minor, informasi
              </p>
            </div>
          </div>
        </section>

        {/* Scope */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="material-icons text-blue-600">done_all</span>
            Cakupan Proyek
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-green-600 mb-3">
              ✅ DALAM CAKUPAN
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Kami akan membangun aplikasi mobile SIPATROLI dan aplikasi web
              PUSKOMANDO dengan fitur-fitur berikut:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="text-sm text-gray-700">
                • Sistem otentikasi dan keamanan yang kuat
              </li>
              <li className="text-sm text-gray-700">
                • Tampilan data LPR real-time dengan alert otomatis
              </li>
              <li className="text-sm text-gray-700">
                • Pencarian kendaraan dan database pemilik
              </li>
              <li className="text-sm text-gray-700">
                • Peta pelacakan dan manajemen unit patroli
              </li>
              <li className="text-sm text-gray-700">
                • Sistem pembuatan dan manajemen laporan
              </li>
              <li className="text-sm text-gray-700">
                • Integrasi dengan API pemerintah (read-only)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-3">
              ❌ DI LUAR CAKUPAN
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Hal-hal berikut TIDAK akan kami bangun:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="text-sm text-gray-700">
                • Hardware LPR dan infrastruktur
              </li>
              <li className="text-sm text-gray-700">
                • Pengembangan algoritma OCR
              </li>
              <li className="text-sm text-gray-700">
                • Database pemerintah dan sistem pembayaran
              </li>
              <li className="text-sm text-gray-700">
                • Fitur lanjutan (fase 2+)
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Dokumen Resmi</h3>
          <p className="text-blue-100 mb-4">
            SIPATROLI - Spesifikasi Fitur Dokumen
          </p>
          <p className="text-sm text-blue-200">
            Versi 1.0 | Oktober 2025 | Status: Draft untuk Tinjauan
          </p>
        </div>
      </div>
    </div>
  );
}
