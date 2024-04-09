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
    <div>
      <div>
        <h2>TambahPengurus</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              name="nama"
              required
              onChange={(e) => setValues({ ...values, nama: e.target.value })}
              className="border border-black"
            />
          </div>
          <div>
            <label htmlFor="nama_panggilan">Nama Panggilan</label>
            <input
              type="text"
              name="nama_panggilan"
              required
              onChange={(e) =>
                setValues({ ...values, nama_panggilan: e.target.value })
              }
              className="border border-black"
            />
          </div>
          <div>
            <label htmlFor="nama">NIM</label>
            <input
              type="text"
              name="nim"
              required
              onChange={(e) => setValues({ ...values, nim: e.target.value })}
              className="border border-black"
            />
          </div>
          <div>
            <label htmlFor="nama">Divisi</label>
            <input
              type="text"
              name="divisi"
              required
              onChange={(e) => setValues({ ...values, divisi: e.target.value })}
              className="border border-black"
            />
          </div>
          <div>
            <label htmlFor="nama">Posisi</label>
            <input
              type="text"
              name="posisi"
              required
              onChange={(e) => setValues({ ...values, posisi: e.target.value })}
              className="border border-black"
            />
          </div>
          <div>
            <button type="submit">Kirim</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TambahPengurus;
