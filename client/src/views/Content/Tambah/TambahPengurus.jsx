import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function TambahPengurus() {
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("");

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nama", event.target.nama.value);
    formData.append("nama_panggilan", event.target.nama_panggilan.value);
    formData.append("nim", event.target.nim.value);
    formData.append("divisi", event.target.divisi.value);
    formData.append("posisi", event.target.posisi.value);
    formData.append("foto", fileInputRef.current.files[0]);
    formData.append("ig_link", event.target.ig_link.value);
    formData.append("linkedin_link", event.target.linkedin_link.value);
    formData.append("github_link", event.target.github_link.value);

    try {
      const response = await axios.post(
        "http://localhost:8081/pengurus/tambahpengurus",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("pengurus berhasil ditambahkan!");
      window.location.href = "/himatikadmin/pengurus";
    } catch (error) {
      console.error("Gagal mengupload pengurus:", error);
      alert("Gagal menambahkan pengurus!");
    }
  };

  function handleFileChange(e) {
    setValues({ ...values, foto: e.target.files[0] });
  }
  return (
    <div className="vh-100 vw-100 text-gray-900 bg-gray-200 min-h-screen">
      <div className="p-4 flex">
        <h3 className="text-xl">Tambah Pengurus</h3>
      </div>
      <div className="px-3 py-4 flex justify-between">
        <div className="">
          <Link
            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            to="/himatikadmin/pengurus"
          >
            Kembali
          </Link>
        </div>
      </div>
      <div>
        <form
          className="space-y-6"
          method="POST"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className=" grid grid-cols-8 ">
            <div className="space-y-6 col-span-4 p-5">
              <div className=" ">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6"
                >
                  Nama Lengkap
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nama"
                    required 
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className=" ">
                <label
                  htmlFor="panggilan"
                  className="block text-sm font-medium leading-6"
                >
                  Alias
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nama_panggilan"
                    required
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="nim"
                  className="block text-sm font-medium leading-6"
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
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="divisi"
                  className="block text-sm font-medium leading-6"
                >
                  Divisi
                </label>
                <select
                  id="divisi"
                  name="divisi"
                  required 
                  className="block w-full rounded-md p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                >
                  <option value="Ketua">Ketua</option>
                  <option value="Wakil Ketua">Wakil Ketua</option>
                  <option value="BPH">BPH</option>
                  <option value="Kominfo">Kominfo</option>
                  <option value="Sosmas">Sosmas</option>
                  <option value="Diklat">Diklat</option>
                  <option value="PSDA">PSDA</option>
                  <option value="Keagamaan">Keagamaan</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="posisi"
                  className="block text-sm font-medium leading-6"
                >
                  Posisi
                </label>
                <div className="mt-2">
                  <input
                    id="posisi"
                    name="posisi"
                    type="text"
                    autoComplete="off"
                    required 
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 col-span-4 p-5">
              <div>
                <label
                  htmlFor="fotopengurus"
                  className="block text-sm font-medium leading-6"
                >
                  Foto
                </label>
                <div className="mt-2">
                  <input
                    id="fotopengurus"
                    name="fotopengurus"
                    type="file"
                    autoComplete=""
                    multiple
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    required
                    accept="image/*"
                    className="bg-white block w-[100%] p-5 file:mr-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-violet-500 file:cursor-pointer rounded-md border-0 py-1.5 white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="ig_link"
                  className="block text-sm font-medium leading-6  "
                >
                  IG
                </label>
                <div className="mt-2">
                  <input
                    id="ig_link"
                    name="ig_link"
                    type="text"
                    autoComplete="off" 
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="linkedin_link"
                  className="block text-sm font-medium leading-6  "
                >
                  LinkedIn
                </label>
                <div className="mt-2">
                  <input
                    id="linkedin_link"
                    name="linkedin_link"
                    type="text"
                    autoComplete="off" 
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="github_link"
                  className="block text-sm font-medium leading-6  "
                >
                  Github
                </label>
                <div className="mt-2">
                  <input
                    id="github_link"
                    name="github_link"
                    type="text"
                    autoComplete="off" 
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="github_link"
                  className="block text-sm font-medium leading-6"
                >
                  <br />
                </label>
                <div className="mt-2">
                  <button
                    type="submit"
                    name="submit"
                    className="flex text-white justify-center rounded-md w-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TambahPengurus;
