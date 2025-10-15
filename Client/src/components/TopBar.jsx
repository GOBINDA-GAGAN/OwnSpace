
import { FiSearch,  } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white px-4 py-3 border-b border-gray-200">
      {/* Search Bar */}
      <div className="flex items-center w-full max-w-md bg-gray-50 border px-2 border-green-200 rounded-lg">
        <FiSearch className="text-green-400 text-lg mr-2" size={20} />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Search"
          required
          className="w-full rounded-lg p-2 focus:outline-none "
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 ml-4">
        {/* <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-100 transition">
          <FiUserPlus className="text-gray-500" />
          Invite Members
        </button> */}

        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="User Avatar"
            className="w-9 h-9 rounded-full object-cover border border-gray-200"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Gobinda Gagan</p>
            <p className="text-xs text-green-500 font-medium">User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
