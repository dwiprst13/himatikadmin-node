import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        pengurus && (
          <>
            <h2>Edit Pengurus: {pengurus.nama}</h2>
            <p>ID: {pengurus.id_pengurus}</p>
          </>
        )
      )}
    </div>
  );
}

export default EditPengurus;
