import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function Layout() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <Outlet />
    </main>
  );
}
