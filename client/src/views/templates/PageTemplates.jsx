import React from 'react'
import SideBar from '../../parts/SideBar';
import TopBar from '../../parts/TopBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../Content/Admin";
import Pengurus from "../Content/Pengurus";
import Galeri from "../Content/Galeri";
import Artikel from "../Content/Artikel";
import Dashboard from '../Content/Dashboard';

function PageTemplates() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <div className="w-2/12 flex flex-wrap">
          <div className="fixed w-2/12 top-0 left-0 h-full bg-gray-800 text-white z-30">
            <SideBar />
          </div>
        </div>
        <div className="w-10/12">
          <div className="fixed flex top-0 w-full bg-gray-900 text-white z-30">
            <TopBar />
          </div>
          <div className="mt-16 w-full">
            <Routes>
              <Route path="/himatikadmin/dashboard" element={<Dashboard />} />
              <Route path="/himatikadmin/admin" element={<Admin />} />
              <Route path="/himatikadmin/pengurus" element={<Pengurus />} />
              <Route path="/himatikadmin/galeri" element={<Galeri />} />
              <Route path="/himatikadmin/artikel" element={<Artikel />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default PageTemplates