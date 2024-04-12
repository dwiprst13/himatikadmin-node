import React from "react";
import SideBar from "../../parts/SideBar";
import TopBar from "../../parts/TopBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../Content/Admin";
import Pengurus from "../Content/Pengurus";
import Galeri from "../Content/Galeri";
import Artikel from "../Content/Artikel";
import Dashboard from "../Content/Dashboard";
import Divisi from "../Content/Divisi";
import Proker from "../Content/Proker";
import Pesan from "../Content/Pesan";
import Info from "../Content/Info";
import TambahArtikel from "../Content/Tambah/TambahArtikel";
import EditArtikel from "../Content/Edit/EditArtikel";
import TambahAdmin from "../Content/Tambah/TambahAdmin";
import TambahGaleri from "../Content/Tambah/TambahGaleri";
import TambahInfo from "../Content/Tambah/TambahInfo";
import TambahProker from "../Content/Tambah/TambahProker";
import TambahPengurus from "../Content/Tambah/TambahPengurus";
import EditPengurus from "../Content/Edit/EditPengurus";

function PageTemplates() {
  return (
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
            <Route path="/home" element={<Dashboard />} />
            {/* Halaman Admin */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/tambahadmin" element={<TambahAdmin />} />
            <Route path="/admin/editadmin" element={<EditArtikel />} />
            {/* Halaman Pengurus */}
            <Route path="/pengurus" element={<Pengurus />} />
            <Route
              path="/pengurus/tambahpengurus"
              element={<TambahPengurus />}
            />
            <Route path="/pengurus/editpengurus/:id" element={<EditPengurus />} />
            {/* Halaman Divisi */}
            <Route path="/divisi" element={<Divisi />} />
            <Route path="/divisi/editdivisi" element={<EditArtikel />} />
            {/* Halaman Proker */}
            <Route path="/proker" element={<Proker />} />
            <Route path="/proker/tambahproker" element={<TambahProker />} />
            <Route path="/proker/editproker" element={<EditArtikel />} />
            {/* Halaman Galeri */}
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/galeri/tambahgaleri" element={<TambahGaleri />} />
            <Route path="/galeri/editgaleri" element={<EditArtikel />} />
            {/* Halaman Artikel */}
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/artikel/tambahartikel" element={<TambahArtikel />} />
            <Route path="/artikel/editartikel" element={<EditArtikel />} />
            {/* Halaman Info */}
            <Route path="/info" element={<Info />} />
            <Route path="/info/tambahinfo" element={<TambahInfo />} />
            <Route path="/info/editinfo" element={<EditArtikel />} />
            {/* Halaman Pesan */}
            <Route path="/pesan" element={<Pesan />} />
            <Route path="/pesan" element={<Pesan />} />
            <Route path="/pesan" element={<Pesan />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default PageTemplates;
