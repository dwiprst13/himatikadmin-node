import React, { useState, useEffect } from "react";

function LoginName() {
  const [userData, setUserData] = useState({ nama: "", nim: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const parts = token.split(".");
      const encodedPayload = parts[1];
      const decodedPayload = atob(encodedPayload);
      const payload = JSON.parse(decodedPayload);

      setUserData({ name: payload.nama, nim: payload.nim, role: payload.role });
      console.log(payload);
    } else {
      console.log("Token tidak ditemukan di localStorage");
    }
  }, []);

  return (
    <div className="flex text-white text-[1rem] gap-2">
      <h2>
        Anda login sebagai: {userData.name} ( {userData.nim} ) || {userData.role}
      </h2>
    </div>
  );
}

export default LoginName;
