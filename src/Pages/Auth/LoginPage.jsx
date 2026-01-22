import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";
import login_img from "../../assets/pictures/Login illustration.png";

/* components */
import LoginForm from "../../Components/log/LoginForm";

function LoginPage() {
  return (
    <section className="flex flex-col md:flex-row h-screen w-screen">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center bg-white relative">
        <div className=" flex flex-col items-start md:top-10 md:left-10">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-[120px] mb-2" />
          </Link>
          <Link
            to="/"
            className="text-[12px] font-medium text-gray-500 hover:text-indigo-600 transition-colors duration-300"
          >
            &larr; Back to Home
          </Link>
        </div>

        <LoginForm />
      </div>

      <div className="w-full md:w-1/2 h-full hidden md:flex flex-col justify-center items-center bg-[var(--color-bg)] p-6">
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
