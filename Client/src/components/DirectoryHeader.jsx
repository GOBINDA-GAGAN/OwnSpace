/* eslint-disable react/prop-types */
import { AiOutlinePlus } from "react-icons/ai";
import { LuUpload } from "react-icons/lu";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaFilePdf, FaSignature, FaPen,} from "react-icons/fa";

export default function DirectoryHeader({
  onCreateFolderClick,
  onUploadFilesClick,
  fileInputRef,
  handleFileSelect,
}) {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4 bg-gray-50 rounded-xl shadow-sm">
      {/* Create */}
      <button
        onClick={onCreateFolderClick}
        className="flex flex-col items-start justify-center w-[150px] sm:w-[180px] h-[80px] px-5 py-4 rounded-xl shadow-sm border border-gray-200 bg-black text-white hover:bg-gray-800 transition-all duration-200"
      >
        <div className="text-lg">
          <AiOutlinePlus size={20} />
        </div>
        <span className="text-sm font-medium">Create</span>
      </button>

      {/* Upload or Drop */}

        
      <div>
      <button
        onClick={onUploadFilesClick}
        className="flex flex-col items-start justify-center w-[150px] sm:w-[180px] h-[80px] px-5 py-4 rounded-xl shadow-sm border border-gray-200 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-900 transition-all duration-200"
      >
        <div className="text-lg">
          <LuUpload size={20} />
        </div>
        <span className="text-sm font-medium">Upload or Drop</span>
      </button>

      <input
        ref={fileInputRef}
        id="file-upload"
        type="file"
        style={{ display: "none" }}
        multiple
        onChange={handleFileSelect}
      />
    </div>

      {/* Create Folder */}
      <button 
      onClick={onCreateFolderClick}
      className="flex flex-col items-start justify-center w-[150px] sm:w-[180px] h-[80px] px-5 py-4 rounded-xl shadow-sm border border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-800 transition-all duration-200">
        <div className="text-lg">
          <MdOutlineCreateNewFolder size={20} />
        </div>
        <span className="text-sm font-medium">Create Folder</span>
      </button>

      {/* Edit PDF */}
      <button className="flex flex-col items-start justify-center w-[150px] sm:w-[180px] h-[80px] px-5 py-4 rounded-xl shadow-sm border border-gray-200 bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 text-red-700 transition-all duration-200">
        <div className="text-lg">
          <FaFilePdf size={20} />
        </div>
        <span className="text-sm font-medium">Edit PDF</span>
      </button>

      {/* Get Signatures */}
      <button className="flex flex-col items-start justify-center w-[150px] sm:w-[180px] h-[80px] px-5 py-4 rounded-xl shadow-sm border border-gray-200 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 text-green-700 transition-all duration-200">
        <div className="text-lg">
          <FaSignature size={20} />
        </div>
        <span className="text-sm font-medium">Get Signatures</span>
      </button>

      {/* Sign Yourself */}
      <button className="flex flex-col items-start justify-center w-[150px] sm:w-[180px] h-[80px] px-5 py-4 rounded-xl shadow-sm border border-gray-200 bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 text-yellow-700 transition-all duration-200">
        <div className="text-lg">
          <FaPen size={20} />
        </div>
        <span className="text-sm font-medium">Sign Yourself</span>
      </button>
    </div>
  );
}
