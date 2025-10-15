import  { useState } from "react";
import { FaSignature } from "react-icons/fa";
import {
  FiGrid,
  FiFileText,
  FiTrash2,
  // FiStar,
  // FiDollarSign,
  // FiBarChart2,
  // FiCalendar,
  // FiCloud,
  FiBell,
  FiHelpCircle,
} from "react-icons/fi";

const Sidebar = () => {
  const [active, setActive] = useState("All Files");

  const mainMenu = [
    { name: "Dashboard", icon: <FiGrid /> },
    { name: "All Files", icon: <FiFileText /> },
    { name: "Signatures", icon: <FaSignature /> },
    // { name: "Send and Track", icon: <FiSend /> },
    // { name: "Shared", icon: <FiUsers /> },
    // { name: "File Requests", icon: <FiFileText /> },
    { name: "Deleted Files", icon: <FiTrash2 /> },
  ];

  // const quickAccess = [
  //   { name: "Starred", icon: <FiStar /> },
  //   { name: "Finance", icon: <FiDollarSign /> },
  //   { name: "Report", icon: <FiBarChart2 /> },
  //   { name: "Event", icon: <FiCalendar /> },
  // ];

  return (
    <div className="w-64 bg-white h-full shadow-md p-4 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-6 h-6 bg-green-400 rounded-full"></div>
          <h1 className="text-lg font-semibold text-gray-800">CloudHub</h1>
        </div>

        {/* Main Menu */}
        <div className="space-y-1">
          {mainMenu.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                active === item.name
                  ? "bg-green-50 text-green-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>

        {/* Quick Access
        <div className="mt-6">
          <p className="text-gray-400 text-sm mb-2 font-medium">
            Quick Access
          </p>
          {quickAccess.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                active === item.name
                  ? "bg-green-50 text-green-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div> */}
      </div>

      {/* Bottom Section */}
      <div className="space-y-3">
        {/* Storage */}
        {/* <div className="p-3 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <FiCloud className="text-green-500" />
            <p className="text-gray-700 text-sm font-medium">Storage</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
          </div>
          <p className="text-xs text-gray-600 mb-2">500 GB of 900 GB used</p>
          <button className="w-full bg-black text-white text-sm rounded-md py-1 hover:bg-gray-800 transition">
            Get More Storage
          </button>
        </div> */}

        {/* Notifications & Help */}
        <button className="flex items-center gap-3 w-full text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium">
          <FiBell className="text-lg" /> Notification
        </button>
        <button className="flex items-center gap-3 w-full text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium">
          <FiHelpCircle className="text-lg" /> Help and Guide
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
