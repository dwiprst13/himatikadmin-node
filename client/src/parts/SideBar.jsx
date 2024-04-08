import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? "flex items-center py-2 px-4 text-gray-300 rounded-md bg-blue-500 hover:bg-blue-500"
      : "flex items-center py-2 px-4 text-gray-300 rounded-md hover:bg-gray-950 hover:text-gray-100";
  };
  return (
    <section>
      <div className="h-screen bg-gray-900 p-4 z-50 transition-transform">
        <a
          href="#"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          <img
            src="/himatik.png"
            alt=""
            className="w-8 h-8 rounded object-cover"
          ></img>
          <span className="text-lg font-bold text-white ml-3">
            HimatikAdmin
          </span>
        </a>
        <ul className="mt-4">
          <li className="mb-1">
            <NavLink
              to="/himatikadmin/home"
              className={getNavLinkClass}
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Dashboard</span>
            </NavLink>
          </li>
          <li className="mb-1 group ">
            <NavLink
              to="/himatikadmin/admin"
              className={getNavLinkClass}
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Admin</span>
            </NavLink>
          </li>
          <li className="mb-1 group">
            <NavLink
              to="/himatikadmin/pengurus"
              className={getNavLinkClass}
            >
              <i className="ri-settings-2-line mr-3 text-lg"></i>
              <span className="text-sm">Pengurus</span>
            </NavLink>
          </li>
          <li className="mb-1 group ">
            <NavLink
              to="/himatikadmin/divisi"
              className={getNavLinkClass}
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Divisi</span>
            </NavLink>
          </li>
          <li className="mb-1 group">
            <NavLink
              to="/himatikadmin/proker"
              className={getNavLinkClass}
            >
              <i className="ri-settings-2-line mr-3 text-lg"></i>
              <span className="text-sm">Proker</span>
            </NavLink>
          </li>
          <li className="mb-1 group ">
            <NavLink
              to="/himatikadmin/artikel"
              className={getNavLinkClass}
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Artikel</span>
            </NavLink>
          </li>
          <li className="mb-1 group ">
            <NavLink
              to="/himatikadmin/galeri"
              className={getNavLinkClass}
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Galeri</span>
            </NavLink>
          </li>
          <li className="mb-1 group ">
            <NavLink
              to="/himatikadmin/info"
              className={getNavLinkClass}
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Info</span>
            </NavLink>
          </li>
          <li className="mb-1 group">
            <NavLink
              to="/himatikadmin/pesan"
              className={getNavLinkClass}
            >
              <i className="ri-settings-2-line mr-3 text-lg"></i>
              <span className="text-sm">Pesan</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SideBar;
