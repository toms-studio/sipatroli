import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CommandCenterLogin() {
  const navigate = useNavigate();
  const [operatorId, setOperatorId] = useState("CMD2024001");
  const [password, setPassword] = useState("••••••••");

  const handleLogin = () => {
    navigate("/command-center/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
              <span
                className="material-icons text-white"
                style={{ fontSize: "40px" }}
              >
                security
              </span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">PUSKOMANDO</h1>
          <p className="text-sm text-gray-600">Pusat Komando Kepolisian RI</p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="space-y-5"
        >
          {/* Operator ID Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ID Operator
            </label>
            <input
              type="text"
              value={operatorId}
              onChange={(e) => setOperatorId(e.target.value)}
              placeholder="Masukkan ID operator"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-all shadow-md"
          >
            MASUK
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Sistem Komando dan Kontrol Kepolisian
        </p>
      </div>
    </div>
  );
}
