import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    if (!email || !password) {
      return toast.error("Vui lòng nhập đầy đủ email và mật khẩu");
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return toast.error("Email không hợp lệ");
    }

    try {
      const { data } = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.accessToken);

      toast.success("Đăng nhập thành công");

      window.location.href = "/dashboard";
    } catch (error) {
      toast.error("Sai email hoặc mật khẩu");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Login</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            type="password"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
