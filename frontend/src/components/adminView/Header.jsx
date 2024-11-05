import React from "react";
import { Button } from "../ui/button";
import { IoMenuSharp } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

export default function AdminHeader({ setOpen }) {
  return (
    <header className="flex items-center  justify-end w-full px-4 py-3 bg-background border-b">
      <div className="lg:hidden sm:block w-full ">
        <Button className="lg:hidden sm:block" onClick={() => setOpen(true)}>
          <IoMenuSharp />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>
      <div className="">
        <Button className=" inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow ">
          <CiLogout />
          Logout
        </Button>
      </div>
    </header>
  );
}
