import React from "react";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div className="vh-100 vw-100 text-gray-900 bg-gray-200 min-h-screen">
      <div className="h-20 p-4 flex">
        <h3 className="text-xl">Daftar Informasi</h3>
      </div>
      <div className="px-3 py-4 flex justify-between ">
        <Link
          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          to="/himatikadmin/info/tambahinfo"
        >
          Tambah
        </Link>
      </div>
      <div className="px-3 py-4 flex justify-center"></div>
    </div>
  );
}

export default Info;
