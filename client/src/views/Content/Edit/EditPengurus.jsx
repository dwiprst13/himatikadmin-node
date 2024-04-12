import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EditPengurus() {
  const [pengurus, setPengurus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8081/pengurus/editpengurus/${id}`
        );
        if (response.status === 200) {
          setPengurus(response.data);
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

  return (
    <div className="vh-100 vw-100 text-gray-900 bg-gray-200 min-h-screen">
      <div class="p-4 flex">
        <h3 class="text-xl">Edit Pengurus</h3>
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
    </div>
  );
}

export default EditPengurus;
