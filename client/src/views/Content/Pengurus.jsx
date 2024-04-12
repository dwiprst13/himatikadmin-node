import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pengurus() {
  const [data, setData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/pengurus");
        if (response.status === 200) {
          setData(response.data);
        } else {
          throw new Error("Failed to fetch pengurus data");
        }
      } catch (error) {
        console.error("Error fetching pengurus data:", error);
      } finally {
        setIsDataFetched(true); 
      }
    };

    if (!isDataFetched) {
      fetchData();
    }
  }, []); 

  const handleEdit = (id) => {
    console.log("Edit data with id:", id);
    window.location.href = `/himatikadmin/pengurus/editpengurus/${id}`;
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Apakah kamu yakin ingin menghapus data pengurus ini?"
    );
    if (isConfirmed) {
      try {
        const response = await axios.delete(`/delete/${id}`);
        if (response.status === 200 || response.status === 204) {
          console.log("Pengurus berhasil dihapus!");
          setData(data.filter((pengurus) => pengurus.id_pengurus !== id));
        } else {
          throw new Error("Gagal menghapus pengurus");
        }
      } catch (error) {
        console.error("Error saat menghapus pengurus:", error);
      }
    }
  };

  return (
    <div className="vh-100 vw-100 text-gray-900 bg-gray-200 min-h-screen">
      <div class="p-4 flex">
        <h3 class="text-xl">Daftar Pengurus</h3>
      </div>
      <div className="px-3 py-4 flex justify-between bg-green-500">
        <div className="">
          <Link
            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            to=""
          >
            Tambah
          </Link>
        </div>
        <div class="">
          <form method="post" class="flex mb-4 flex w-full flex-wrap ">
            <input
              type="search"
              class="mx-auto m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-blackfocus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-gray-600 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />
            <button
              class=" flex items-center rounded-r bg-blue-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md table-auto bg-white shadow-md rounded mb-4">
          <thead>
            <tr>
              <th className="text-center p-3 px-5">ID</th>
              <th className="text-center p-3 px-5">Nama</th>
              <th className="text-center p-3 px-5">NIM</th>
              <th className="text-center p-3 px-5">Divisi</th>
              <th className="text-center p-3 px-5">Posisi</th>
              <th className="text-center p-3 px-5">Foto</th>
              <th className="text-center p-3 px-5">IG</th>
              <th className="text-center p-3 px-5">Github</th>
              <th className="text-center p-3 px-5">LinkedIn</th>
              <th className="text-center p-3 px-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pengurus) => (
              <tr
                key={pengurus.id_pengurus}
                className="px-3 border-b bg-gray-100"
              >
                <td className="py-2 text-center px-2">
                  {pengurus.id_pengurus}
                </td>
                <td className="py-2 text-center px-2">{pengurus.nama}</td>
                <td className="py-2 text-center px-2">{pengurus.nim}</td>
                <td className="py-2 text-center px-2">{pengurus.divisi}</td>
                <td className="py-2 text-center px-2">{pengurus.posisi}</td>
                <td className="py-2 text-center px-2">
                  {pengurus.foto ? (
                    <span class="text-green-500">✓</span>
                  ) : (
                    <span class="text-red-500">x</span>
                  )}
                </td>
                <td className="py-2 text-center px-2">
                  {pengurus.ig_link ? (
                    <span class="text-green-500">✓</span>
                  ) : (
                    <span class="text-red-500">x</span>
                  )}
                </td>
                <td className="py-2 text-center px-2">
                  {pengurus.github_link ? (
                    <span class="text-green-500">✓</span>
                  ) : (
                    <span class="text-red-500">x</span>
                  )}
                </td>
                <td className="py-2 text-center px-2">
                  {pengurus.linkedin_link ? (
                    <span class="text-green-500">✓</span>
                  ) : (
                    <span class="text-red-500">x</span>
                  )}
                </td>
                <td className="py-2 text-center px-2 flex gap-1">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleEdit(pengurus.id_pengurus)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDelete(pengurus.id_pengurus)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pengurus;
