
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "/himatikadmin/home";
        alert("Login successful!");
      } else {
        alert(data.message); 
      }
    } catch (error) {
      alert("Login failed:", error.message);
    }
  };
  return (
    <section className="h-screen flex items-center">
      <div className="w-full space-y-10">
        <h1 className="text-center text-[2.1rem] font-semibold">
          Selamat Datang di Halaman Admin Website Himatik UAA
        </h1>
        <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="md:w-1/3 max-w-sm">
            <img
              src="/himatik.png"
            />
          </div>
          <div className="md:w-1/3 max-w-sm">
            <div className="text-center my-5">
              <h2 className="text-[1.5rem]">Silakan masuk dengan akun anda</h2>
            </div>
            <form action="" onSubmit={handleLogin}>
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nama Pengguna"
              />
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div className="mt-4 flex justify-between font-semibold text-sm">
                <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                  <input className="mr-1" type="checkbox" />
                  <span>Ingat Saya</span>
                </label>
                <a
                  className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                  href="#"
                >
                  Lupa Kata Sandi?
                </a>
              </div>
              <div className="text-center md:text-left my-5">
                <button
                  type="submit"
                  name="submit"
                  className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                >
                  Masuk
                </button>
              </div>
            </form>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Belum punya akun?{" "}
              <a
                className="text-red-600 hover:underline hover:underline-offset-4"
                href=""
              >
                Hubungi Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
