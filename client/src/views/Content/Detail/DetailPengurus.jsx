import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function DetailPengurus() {
  const { id } = useParams();
  const [pengurus, setPengurus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8081/pengurus/detailpengurus/${id}`
      );
      if (response.status === 200) {
        const pengurusData = response.data;
        pengurusData.fullImageUrl = `http://localhost:8081/${pengurusData.foto.replace(
          /\\/g,
          "/"
        )}`;
        setPengurus(pengurusData);
        setError("");
      } else {
        throw new Error("Failed to fetch pengurus data");
      }
    } catch (error) {
      setError("Error fetching pengurus data: " + error.message);
      setPengurus(null);
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
}, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!pengurus) return <p>No pengurus data found</p>;

  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus pengurus ini?")) {
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:8081/pengurus/deletepengurus/${id}`
      );
      if (response.status === 200) {
        console.log("Pengurus deleted successfully!");
        setData(data.filter((pengurus) => pengurus.id_pengurus !== id));
      } else {
        throw new Error("Failed to delete pengurus");
      }
    } catch (error) {
      console.error("Error deleting pengurus:", error);
      alert("Penghapusan gagal! Silakan coba lagi.");
    }
  };

  const handleEdit = (id) => {
    console.log("Edit data with id:", id);
    window.location.href = `/himatikadmin/pengurus/editpengurus/${id}`;
  };
  return (
    <div className="vh-100 vw-100 text-gray-900 bg-gray-200 min-h-screen">
      <div className="">
        <div className="h-20 p-4 flex">
          <h1 className="text-xl">Detail Pengurus</h1>
        </div>
        <div className="px-3 py-4 flex justify-between">
          <button className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
            <Link to="/himatikadmin/pengurus">Kembali</Link>
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-12 gap-4 bg-white rounded-lg p-6">
          <div className="col-span-2">
            <img
              src={pengurus.fullImageUrl}
              alt={`Foto of ${pengurus.nama}`}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="col-span-10">
            <div className="grid grid-cols-12">
              <table className="col-span-10">
                <tr>
                  <td className="w-48">
                    <b>Nama</b>
                  </td>
                  <td className="w-6">:</td>
                  <td>{pengurus.nama}</td>
                </tr>
                <tr>
                  <td className="w-48">
                    <b>Nama Panggilan</b>
                  </td>
                  <td>:</td>
                  <td>{pengurus.nama_panggilan}</td>
                </tr>
                <tr>
                  <td className="w-48">
                    <b>Nim</b>
                  </td>
                  <td>:</td>
                  <td>{pengurus.nim}</td>
                </tr>
                <tr>
                  <td className="w-48">
                    <b>Divisi</b>
                  </td>
                  <td>:</td>
                  <td>{pengurus.divisi}</td>
                </tr>
                <tr>
                  <td className="w-48">
                    <b>Posisi</b>
                  </td>
                  <td>:</td>
                  <td>{pengurus.posisi}</td>
                </tr>
                <tr>
                  <td className="w-48">
                    <b>Link Instagram</b>
                  </td>
                  <td>:</td>
                  <td>
                    {pengurus.ig_link ? (
                      <a
                        href={pengurus.ig_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700"
                      >
                        {pengurus.ig_link}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="w-48">
                    <b>Link Github</b>
                  </td>
                  <td>:</td>
                  <td>
                    {pengurus.github_link ? (
                      <a
                        href={pengurus.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700"
                      >
                        {pengurus.github_link}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="w-48">
                    <b>Link LinkedIn</b>
                  </td>
                  <td>:</td>
                  <td>
                    {pengurus.linkedin_link ? (
                      <a
                        href={pengurus.linkedin_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700"
                      >
                        {pengurus.linkedin_link}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              </table>
              <div className="col-span-2">
                <h3 className="text-center">
                  <b>Aksi</b>
                </h3>
                <div className="flex flex-col space-y-5 py-5">
                  <button
                    type="button"
                    className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPengurus;
