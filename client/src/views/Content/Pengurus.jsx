import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Pengurus() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8081/pengurus`)
      .then((res) => {
        if (res.status === 200) {
          const dataArray = Array.isArray(res.data) ? res.data : [];
          setData(dataArray);
        } else {
          throw new Error("Gagal cohh");
        }
      })
      .catch((err) => console.log(err));
  }, [id]);


  return (
    <div>
      <h1>Daftar Pengurus</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>NIM</th>
            <th>Posisi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pengurus) => {
            return (
              <tr>
                <td>{pengurus.id_pengurus}</td>
                <td>{pengurus.nama}</td>
                <td>{pengurus.nim}</td>
                <td>{pengurus.posisi}</td>{" "}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Pengurus;
