import React, { useState, useEffect } from "react";

function Dashboard() {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserRole(payload.role);
    }
  }, []);

  const canAccess = (roles) => roles.includes(userRole);

  return (
    <div className="vh-100 vw-100 text-gray-900 bg-gray-200 min-h-screen">
      <div className="gap-1 w-[90%] mx-auto py-8 text-white justify-left">
        <div className="flex flex-wrap p-2">
          {" "}
          {canAccess(["superAdmin", "Admin"]) && (
            <a href="/himatikadmin/admin" className="w-3/12 px-2 py-4">
              <div className="h-32 bg-blue-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">
                  Admin
                </h2>
                <p className="text-center text-[2.8rem]">2</p>
              </div>
            </a>
          )}
          {canAccess(["superAdmin"]) && (
            <a href="/himatikadmin/pengurus" className=" w-3/12 px-2 py-4">
              <div className=" h-32 bg-orange-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">
                  Pengurus
                </h2>
                <p className="text-center text-[2.8rem]">3</p>
              </div>
            </a>
          )}
          {canAccess(["superAdmin", "Admin", "Jurnalis"]) && (
            <a href="" className="w-3/12 px-2 py-4">
              <div className="h-32 bg-yellow-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">
                  Galeri
                </h2>
                <p className="text-center text-[2.8rem]">3</p>
              </div>
            </a>
          )}
          {canAccess(["superAdmin", "Admin", "Jurnalis"]) && (
            <a href="" className="w-3/12 px-2 py-4">
              <div className="h-32 bg-green-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">
                  Artikel
                </h2>
                <p className="text-center text-[2.8rem]">7</p>
              </div>
            </a>
          )}
          {canAccess(["superAdmin", "Admin"]) && (
            <a href="" className="w-3/12 px-2 py-4">
              <div className="h-32 bg-gray-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">
                  Divisi
                </h2>
                <p className="text-center text-[2.8rem]">6</p>
              </div>
            </a>
          )}
          {canAccess(["superAdmin", "Admin"]) && (
            <a href="" className="w-3/12 px-2 py-4">
              <div className="h-32 bg-gray-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">
                  Proker
                </h2>
                <p className="text-center text-[2.8rem]">6</p>
              </div>
            </a>
          )}
          {canAccess(["superAdmin", "Admin", "Jurnalis"]) && (
            <a href="" className="w-3/12 px-2 py-4">
              <div className="h-32 bg-yellow-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">
                  Info
                </h2>
                <p className="text-center text-[2.8rem]">6</p>
              </div>
            </a>
          )}
          {canAccess(["superAdmin", "Admin"]) && (
            <a href="" className="w-3/12 px-2 py-4">
              <div className="h-32 bg-purple-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">
                  Pesan
                </h2>
                <p className="text-center text-[2.8rem]">0</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
