import React, { Fragment } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { FaRecordVinyl } from "react-icons/fa";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { ChartNoAxesCombined } from "lucide-react";

export const AdminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icons: <LuLayoutDashboard size={25} />,
  },

  {
    id: "products",
    label: "Products",
    path: "/admin/product",
    icons: <SlBasket size={25} />,
  },

  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icons: <FaRecordVinyl size={25} />,
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {AdminSidebarMenuItems.map((menuItem) => (
        <div
          className="flex text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer "
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
        >
          {menuItem.icons}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

export default function AdminSidbar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-6`">
          <div className="flex flex-col  h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-3 my-5  cursor-pointer">
                <ChartNoAxesCombined size={25} />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className=" cursor-pointer flex items-center gap-2 "
        >
          <GrUserAdmin size={30} />
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
}
