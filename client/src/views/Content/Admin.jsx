import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  const [data, setData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/admin");
        if (response.status === 200) {
          setData(response.data);
        } else {
          throw new Error("Failed to fetch admin data");
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
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
    window.location.href = `/himatikadmin/admin/editadmin/${id}`;
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus admin ini?")) {
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:8081/admin/deleteadmin/${id}`
      );
      if (response.status === 200) {
        console.log("Admin deleted successfully!");
        setData(data.filter((admin) => admin.id_admin !== id));
      } else {
        throw new Error("Failed to delete admin");
      }
    } catch (error) {
      console.error("Error deleting admin:", error);
      alert("Penghapusan gagal! Silakan coba lagi.");
    }
  };

  return (
    <div className="vh-100 vw-100 text-gray-900 bg-gray-200 min-h-screen">
      <div className="h-20 p-4 flex">
        <h3 className="text-xl">Daftar Admin</h3>
      </div>
      <div className="px-3 py-4 flex justify-between ">
          <Link
            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            to="/himatikadmin/admin/tambahadmin"
          >
            Tambah
          </Link>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md table-auto bg-white shadow-md rounded mb-4">
          <thead>
            <tr>
              <th className="text-center p-3 px-5">ID</th>
              <th className="text-center p-3 px-5">Nama</th>
              <th className="text-center p-3 px-5">Nama Pengguna</th>
              <th className="text-center p-3 px-5">NIM</th>
              <th className="text-center p-3 px-5">Email</th>
              <th className="text-center p-3 px-5">Role</th>
              <th className="text-center p-3 px-5">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((admin) => (
              <tr key={admin.id_admin} className="px-3 border-b bg-gray-100">
                <td className="py-2 text-center px-2">{admin.id_admin}</td>
                <td className="py-2 text-center px-2">{admin.nama}</td>
                <td className="py-2 text-center px-2">{admin.username}</td>
                <td className="py-2 text-center px-2">{admin.nim}</td>
                <td className="py-2 text-center px-2">{admin.email}</td>
                <td className="py-2 text-center px-2">{admin.role}</td>
                <td className="py-2 text-center px-2 flex gap-1 justify-center">
                  <div>
                    <button
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleEdit(admin.id_admin)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleDelete(admin.id_admin)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
