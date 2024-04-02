import React from "react";
import LoginName from "../components/materials/LoginName";
import LogoutBtn from "../components/materials/LogoutBtn";

function TopBar() {
  return (
    <section className="h-16 bg-gray-900 text-white w-10/12 flex flex-wrap justify-between px-10 items-center">
        <LoginName />
        <LogoutBtn />
    </section>
  );
}

export default TopBar;
