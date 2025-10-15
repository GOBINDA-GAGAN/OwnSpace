import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:block w-64 h-screen fixed top-0 left-0">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* TopBar */}
        <div className="w-full">
          <TopBar />
        </div>

        {/* Scrollable Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
