import React, { useState } from "react";
import Btn from "../../Components/Btn";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BASE_API = import.meta.env.VITE_BASE_API;

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const token_time = () => {
    setTimeout(() => {
      localStorage.clear();
      toast.warning("Token vaqti tugadi");
      navigate("/login");
    }, 10000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://alijonov0901.pythonanywhere.com/auth/login/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );

      const data = await res.json();

      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("token", JSON.stringify(data));
        navigate("/admin/dashboard");
        toast.success("Muvoffaqiyatli kirildi!");
        // token_time();
      } else {
        toast.error(data.message || "kirishga ruxsat berilmadi!");
      }
    } catch (err) {
      toast.error("Server bilan bog‘lanishda xatolik!");
      console.error(err);
    } finally {
      setLoading(true);
    }
  };

  return (
    <div className="w-full max-w-[400px] bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col items-center mt-20 md:mt-0 p-[32px]">
      <h4 className="text-[30px] font-bold leading-[36px] text-gray-900 text-center mb-2">
        Welcome Back
      </h4>
      <p className="text-[18px] font-normal leading-[28px] text-gray-600 text-center mb-6">
        Enter your credentials to access your account
      </p>

      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-3 text-[14px] font-medium text-gray-700">
          Email
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 flex items-center justify-center rounded-lg p-3 text-[16px] font-normal text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
          />
        </label>

        <label className="flex flex-col gap-3 text-[14px] font-medium text-gray-700">
          Password
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 flex items-center justify-center  rounded-lg p-3 text-[16px] font-normal text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
          />
        </label>

        <Btn
          type="submit"
          children={loading ? "Loading..." : "Login"}
          style="main_btn"
          className="mt-4 w-full"
        />

        <p className="text-[14px] font-medium text-gray-500 text-center mt-4">
          Don't have an account?{" "}
          <Link to="/" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
