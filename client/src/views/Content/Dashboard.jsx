import React from 'react'

function Dashboard() {
  return (
    <div>
    <div className="grid grid-cols-12 gap-5 w-[90%]  mx-auto py-8 text-white">
        <a href="/himatikadmin/admin" className="col-span-3 ">
            <div className="h-32 bg-blue-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">Admin</h2>
                <p className="text-center text-[2.8rem]">4</p>
            </div>
        </a>
        <a href="/himatikadmin/pengurus" className=" col-span-3 ">
            <div className=" h-32 bg-orange-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">Pengurus</h2>
                <p className="text-center text-[2.8rem]">34</p>
            </div>
        </a>
        <a href="" className="col-span-3 ">
            <div className="h-32 bg-yellow-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">Galeri</h2>
                <p className="text-center text-[2.8rem]">3</p>
            </div>
        </a>
        <a href="" className="col-span-3 ">
            <div className="h-32 bg-green-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">Artikel</h2>
                <p className="text-center text-[2.8rem]">7</p>
            </div>
        </a>
    </div>
    <div className="grid grid-cols-12 gap-5 w-[90%] mx-auto py-8 text-white">
        <a href="" className="col-span-3 ">
            <div className="h-32 bg-gray-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">Proker</h2>
                <p className="text-center text-[2.8rem]">6</p>
            </div>
        </a>
        <a href="" className="col-span-3 ">
            <div className="h-32 bg-purple-500 w-full rounded-lg p-3">
                <h2 className="text-center text-[1.5rem] w-full bg-white text-black rounded-md">Pesan</h2>
                <p className="text-center text-[2.8rem]">0</p>
            </div>
        </a>
    </div>
    </div>
  )
}

export default Dashboard