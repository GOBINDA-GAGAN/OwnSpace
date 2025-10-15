
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";



const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:block w-64">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
