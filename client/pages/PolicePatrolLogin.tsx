import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PolicePatrolLogin() {
  const navigate = useNavigate();
  const [badgeNumber, setBadgeNumber] = useState("87654321");
  const [password, setPassword] = useState("••••••••");

  const handleLogin = () => {
    navigate("/police-patrol/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span
                className="material-icons text-white"
                style={{ fontSize: "40px" }}
              >
                security
              </span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">SIPATROLI</h1>
          <p className="text-sm text-gray-600">
            Sistem Informasi Patroli Kepolisian RI
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="space-y-5"
        >
          {/* Badge Number Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nomor Lencana
            </label>
            <input
              type="text"
              value={badgeNumber}
              onChange={(e) => setBadgeNumber(e.target.value)}
              placeholder="Masukkan nomor lencana"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kata Sandi
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md"
          >
            MASUK
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Sistem Informasi Kepolisian Nasional
        </p>
      </div>
    </div>
  );
}
