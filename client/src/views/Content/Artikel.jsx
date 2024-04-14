import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Artikel() {
  const [data, setData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/artikel");
        if (response.status === 200) {
          setData(response.data);
        } else {
          throw new Error("Failed to fetch artikel data");
        }
      } catch (error) {
        console.error("Error fetching artikel data:", error);
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
    window.location.href = `/himatikadmin/artikel/editartikel/${id}`;
  };

  return (
    <div className="vh-100 text-gray-900 bg-gray-200 min-h-screen">
      <div className="h-20 p-4 flex w-full justify-between">
        <div>
          <h3 className="text-xl">Daftar Artikel</h3>
        </div>
        <div>
          <form method="post" className="flex mb-4 w-full flex-wrap ">
            <input
              type="search"
              className="mx-auto m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-blackfocus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-gray-600 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />
            <button
              className=" flex items-center rounded-r bg-blue-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="px-3 py-4 flex justify-between ">
        <Link
          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          to="/himatikadmin/artikel/tambahartikel"
        >
          Tambah
        </Link>
      </div>
      <table className="w-full text-md table-auto bg-white shadow-md rounded mb-4">
        <thead>
          <tr>
            <th className="text-center p-3 px-5">ID</th>
            <th className="text-center p-3 px-5">Judul</th>
            <th className="text-center p-3 px-5">Penulis</th>
            <th className="text-center p-3 px-5">Tanggal</th>
            <th className="text-center p-3 px-5">Status</th>
            <th className="text-center p-3 px-5">Tag</th>
            <th className="text-center p-3 px-5">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artikel) => (
            <tr key={artikel.id_artikel} className="px-3 border-b bg-gray-100">
              <td className="py-2 text-center px-2">{artikel.id_artikel}</td>
              <td className="py-2 text-center px-2">{artikel.judul}</td>
              <td className="py-2 text-center px-2">{artikel.author}</td>
              <td className="py-2 text-center px-2">{artikel.date}</td>
              <td className="py-2 text-center px-2">{artikel.status}</td>
              <td className="py-2 text-center px-2">{artikel.tag}</td>
              <td className="justify-center py-2 text-center px-2 flex gap-1">
                <div className="">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleEdit(artikel.id_artikel)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Artikel