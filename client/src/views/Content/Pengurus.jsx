import React from 'react'
import { useEffect, useState } from "react";

function Pengurus() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8081/blog")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }, []);
  return (
    <div>
        <h2>Pengurus</h2>
    </div>
  )
}

export default Pengurus