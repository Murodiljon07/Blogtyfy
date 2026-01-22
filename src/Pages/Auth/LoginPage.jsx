import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../Components/Btn";
import logo from "../../assets/icons/Logo.svg";
import login_img from "../../assets/pictures/Login illustration.png";

function LoginPage() {
  return (
    <section className="flex flex-col md:flex-row h-screen w-screen">
      {/* LEFT SIDE: Form */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center bg-white relative">
        {/* Logo + Back link */}
        <div className="absolute top-5 left-5 flex flex-col items-start md:top-10 md:left-10">
          <img src={logo} alt="logo" className="w-[120px] mb-2" />
          <Link
            to="/"
            className="text-[12px] font-medium text-gray-500 hover:text-indigo-600 transition-colors duration-300"
          >
            &larr; Back to Home
          </Link>
        </div>

        {/* Form Box */}
        <div className="w-[80%] max-w-[400px] bg-white p-8 rounded-xl shadow-md flex flex-col items-center mt-20 md:mt-0">
          <h4 className="text-[30px] font-bold leading-[36px] text-gray-900 text-center mb-2">
            Welcome Back
          </h4>
          <p className="text-[18px] font-normal leading-[28px] text-gray-600 text-center mb-6">
            Enter your credentials to access your account
          </p>

          <form className="w-full flex flex-col gap-4">
            <label className="flex flex-col gap-1 text-[14px] font-medium text-gray-700">
              Email
              <input
                type="email"
                placeholder="name@example.com"
                className="border border-gray-300 rounded-lg p-3 text-[16px] font-normal text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              />
            </label>

            <label className="flex flex-col gap-1 text-[14px] font-medium text-gray-700">
              Password
              <input
                type="password"
                placeholder="********"
                className="border border-gray-300 rounded-lg p-3 text-[16px] font-normal text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              />
            </label>

            <Btn children="Login" style="main_btn" className="mt-4 w-full" />

            <p className="text-[14px] font-medium text-gray-500 text-center mt-4">
              Don't have an account?{" "}
              <Link to="/" className="text-indigo-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE: Illustration */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center bg-[var(--color-bg)] p-6">
        <img
          src={login_img}
          alt="login illustration"
          className=" max-h-[576px] object-contain"
        />
        <h4 className="text-[30px] font-bold leading-[36px] text-gray-900 text-center mb-4">
          Start Your Journey
        </h4>
        <p className="text-[18px] font-normal leading-[28px] text-gray-600 text-center ">
          Join thousands of creators sharing their stories on Blogify
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
