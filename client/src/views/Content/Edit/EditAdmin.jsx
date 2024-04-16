import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditAdmin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/admin/getadmin/${id}`
        );
        const data = await response.json();
        console.log(data);
        setName(data.nama);
        setEmail(data.email);
        setNim(data.nim);
        setRole(data.role);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords don't match!");
      return;
    }

    const updatedData = {
      name,
      email,
      nim,
      role,
    };

    if (password) {
      updatedData.password = password;
    }

    try {
      const response = await fetch(
        `http://localhost:8081/admin/updateadmin/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("Update successful", data);
        alert(data.message);
        window.location.href = "/himatikadmin/admin";
      } else {
        console.error("Update failed", data);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error updating admin:", error);
      alert("Network or server error"); 
    }

  };

  return (
    <div>
      <div className="h-20 p-4 flex">
        <h1 className="text-xl">Edit Admin</h1>
      </div>
      <div className="px-3 py-4 flex justify-between">
        <div>
          <button className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
            <a href="/himatikadmin/admin">Kembali</a>
          </button>
        </div>
      </div>
      <div className="sm:mx-auto sm:w-full ">
        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
          <div className=" grid grid-cols-8 ">
            <div className="space-y-6 col-span-4 p-5">
              <div className=" ">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6"
                >
                  name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className=" ">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6  "
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="nik"
                  className="block text-sm font-medium leading-6  "
                >
                  NIM
                </label>
                <div className="mt-2">
                  <input
                    id="nim"
                    name="nim"
                    type="text"
                    autoComplete="off"
                    required
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 col-span-4 p-5">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6  "
                >
                  Kata Sandi
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmpassword"
                  className="block text-sm font-medium leading-6  "
                >
                  Ulangi Kata Sandi
                </label>
                <div className="mt-2">
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    autoComplete="off"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full rounded-md p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium leading-6 "
                >
                  Tipe User
                </label>
                <div className="mt-2">
                  <select
                    id="role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="SuperAdmin">SuperAdmin</option>
                    <option value="Admin">Admin</option>
                    <option value="Jurnalis">Jurnalis</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-16 mx-auto">
            <button
              type="submit"
              action=""
              name="submit"
              className="flex text-white justify-center rounded-md w-[50%] bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditAdmin;
