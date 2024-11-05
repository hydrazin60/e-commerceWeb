import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./Header";
import AdminSidbar from "./Sidbar";

export default function Adminlayaout() {
  const [openSidbar, setOpenSidbar] = React.useState(false);
  return (
    <div className="flex min-h-screen  w-full ">
      <div>
        <AdminSidbar open={openSidbar} setOpen={setOpenSidbar} />
      </div>
      <div className="flex flex-1 flex-col ">
        <AdminHeader setOpen={setOpenSidbar} />
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
