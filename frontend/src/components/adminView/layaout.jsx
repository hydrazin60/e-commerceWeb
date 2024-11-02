import React from "react";
import AdmainSidbar from "./Sidbar";
import AdmainHeader from "./Header";
import { Outlet } from "react-router-dom";
export default function Adminlayaout() {
  return (
    <div className="flex min-h-screen w-full ">
      <AdmainSidbar />
      <div className="flex flex-1 flex-col">
        <AdmainHeader />
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
