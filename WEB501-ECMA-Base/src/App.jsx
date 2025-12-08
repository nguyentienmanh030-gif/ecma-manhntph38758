import { Toaster } from "react-hot-toast";
import { Route, Routes, Link, Navigate } from "react-router-dom";

import ListPage from "./pages/List";
import AddPage from "./pages/Add";
import EditPage from "./pages/Edit";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ProtectedRoute from "./layout/ProtectedRoute";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <>
    {/* NAVBAR */}
      <nav className="bg-blue-600 text-white shadow mt-4">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/dashboard" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </Link>

          {/* Menu giữa */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="hover:text-gray-200">
              Trang chủ
            </Link>

            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>

            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          {/* Auth */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
            <button onClick={
              () => { localStorage.removeItem("token");
              window.location.href="/login"}
            } className="hover:text-gray-200">
              Đăng xuất
            </button>
          </div>
        </div>
      </nav>
      {/* TOÀN BỘ ROUTES */}
      <Routes>
        {/* Mặc định chuyển về /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* AUTH */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* DASHBOARD (CÓ BẢO VỆ) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* CRUD */}
        <Route path="/list" element={<ListPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit/:id" element={<EditPage />} />

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

      

      <Toaster />
    </>
  );
}

export default App;
