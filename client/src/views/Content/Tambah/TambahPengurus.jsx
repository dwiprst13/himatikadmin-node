import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function TambahPengurus() {
  const [values, setValues] = useState({
    nama: "",
    nama_panggilan: "",
    nim: "",
    divisi: "",
    posisi: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

        axios.post('/add_user', values)
        .then((res)=>{

            navigate('/')
            console.log(res)
        })
        .catch((err)=>console.log(err))
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
          action="#"
          method="POST"
          enctype="multipart/form-data"
        >
          <div className=" grid grid-cols-8 ">
            <div className="space-y-6 col-span-4 p-5">
              <div className=" ">
                <label
                  for="name"
                  className="block text-sm font-medium leading-6"
                >
                  Nama Lengkap
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nama"
                    required
                    onChange={(e) =>
                      setValues({ ...values, nama: e.target.value })
                    }
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className=" ">
                <label
                  for="panggilan"
                  className="block text-sm font-medium leading-6"
                >
                  Alias
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nama_panggilan"
                    required
                    onChange={(e) =>
                      setValues({ ...values, nama_panggilan: e.target.value })
                    }
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="nim"
                  className="block text-sm font-medium leading-6"
                >
                  NIM
                </label>
                <div className="mt-2">
                  <input
                    id="nim"
                    name="nim"
                    type="text"
                    autocomplete="off"
                    required
                    onChange={(e) =>
                      setValues({ ...values, nim: e.target.value })
                    }
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="divisi"
                  className="block text-sm font-medium leading-6"
                >
                  Divisi
                </label>
                <select
                  id="divisi"
                  name="divisi"
                  required
                  onChange={(e) =>
                    setValues({ ...values, divisi: e.target.value })
                  }
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
                  for="posisi"
                  className="block text-sm font-medium leading-6"
                >
                  Posisi
                </label>
                <div className="mt-2">
                  <input
                    id="posisi"
                    name="posisi"
                    type="text"
                    autocomplete="off"
                    required
                    onChange={(e) =>
                      setValues({ ...values, posisi: e.target.value })
                    }
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 col-span-4 p-5">
              <div>
                <label
                  for="fotopengurus"
                  className="block text-sm font-medium leading-6"
                >
                  Foto
                </label>
                <div className="mt-2">
                  <input
                    id="fotopengurus"
                    name="fotopengurus"
                    type="file"
                    autocomplete=""
                    multiple
                    onChange={(e) =>
                      setValues({ ...values, foto: e.target.value })
                    }
                    onchange="readURL(this)"
                    accept="image/*"
                    placeholder="Pilih Foto"
                    enctype="multipart/form-data"
                    className="bg-white block w-[100%] p-5 file:mr-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-violet-500 file:cursor-pointer rounded-md border-0 py-1.5 white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="ig_link"
                  className="block text-sm font-medium leading-6  "
                >
                  IG
                </label>
                <div className="mt-2">
                  <input
                    id="ig_link"
                    name="ig_link"
                    type="text"
                    autocomplete="off"
                    onChange={(e) =>
                      setValues({ ...values, ig_link: e.target.value })
                    }
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="linkedin_link"
                  className="block text-sm font-medium leading-6  "
                >
                  LinkedIn
                </label>
                <div className="mt-2">
                  <input
                    id="linkedin_link"
                    name="linkedin_link"
                    type="text"
                    autocomplete="off"
                    onChange={(e) =>
                      setValues({ ...values, linkedin_link: e.target.value })
                    }
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="github_link"
                  className="block text-sm font-medium leading-6  "
                >
                  Github
                </label>
                <div className="mt-2">
                  <input
                    id="github_link"
                    name="github_link"
                    type="text"
                    autocomplete="off"
                    onChange={(e) =>
                      setValues({ ...values, github_link: e.target.value })
                    }
                    className="block w-full rounded-md  p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="github_link"
                  className="block text-sm font-medium leading-6"
                >
                  <br />
                </label>
                <div className="mt-2">
                  <button
                    type="submit"
                    action="#"
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
