import React from "react";
import { RiLogoutBoxFill } from "react-icons/ri";

function LogoutBtn() {
  const handleLogout = () => {
    if (window.confirm("Apakah Anda yakin ingin logout?")) {
      localStorage.removeItem("token");
      window.location.href = "/himatikadmin/login";
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-3 py-1 bg-red-600 rounded-md flex gap-2 place-items-center"
      >
        <div>
          <RiLogoutBoxFill />
        </div>
        <div>Logout</div>
      </button>
    </div>
  );
}

export default LogoutBtn;
