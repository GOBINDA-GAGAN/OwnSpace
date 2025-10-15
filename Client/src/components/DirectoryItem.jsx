/* eslint-disable react/prop-types */
import {
  FaFilePdf,
  FaFileImage,
  FaFileVideo,
  FaFileArchive,
  FaFileCode,
  FaFileAlt,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import ContextMenu from "../components/ContextMenu";
import folderIcon from "../assets/folderIcon.png";

const DirectoryItem = ({
  item,
  handleRowClick,
  activeContextMenu,
  contextMenuPos,
  handleContextMenu,
  getFileIcon,
  isUploading,
  uploadProgress,
  handleCancelUpload,
  handleDeleteFile,
  handleDeleteDirectory,
  openRenameModal,
  BASE_URL,
}) => {
  const isUploadingItem = item.id.startsWith("temp-");

  function renderFileIcon(iconString) {
    switch (iconString) {
      case "pdf":
        return <FaFilePdf className="w-6 h-6 text-red-500" />;
      case "image":
        return <FaFileImage className="w-6 h-6 text-green-500" />;
      case "video":
        return <FaFileVideo className="w-6 h-6 text-purple-500" />;
      case "archive":
        return <FaFileArchive className="w-6 h-6 text-yellow-500" />;
      case "code":
        return <FaFileCode className="w-6 h-6 text-blue-500" />;
      case "alt":
      default:
        return <FaFileAlt className="w-6 h-6 text-gray-500" />;
    }
  }

  return (
    <div
      className="flex items-center justify-between p-2 sm:p-3 rounded-lg border border-green-200 bg-gray-50 hover:bg-green-50 cursor-pointer transition"
      onClick={() =>
        !(activeContextMenu || isUploading)
          ? handleRowClick(item.isDirectory ? "directory" : "file", item.id)
          : null
      }
      onContextMenu={(e) => handleContextMenu(e, item.id)}
    >
      {/* Left: Icon + Name */}
      <div className="flex items-center gap-3">
        {item.isDirectory ? (
          <img
            src={folderIcon}
            alt="Folder"
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-md"
          />
        ) : (
          renderFileIcon(getFileIcon(item.name))
        )}
        <span className="text-sm sm:text-base text-gray-800 truncate">
          {item.name}
        </span>
      </div>

      {/* Right: Animated Upload Progress Button */}
      {isUploadingItem ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCancelUpload(item.id);
          }}
          className="relative px-4 py-1.5 rounded-full bg-gray-200 text-white text-xs sm:text-sm overflow-hidden shadow-inner group w-28 sm:w-36"
        >
          {/* Animated Gradient Bar */}
          <div
            className="absolute left-0 top-0 h-full rounded-full animate-pulse bg-gradient-to-r from-green-400 via-green-500 to-green-600 transition-all duration-500 ease-in-out"
            style={{ width: `${uploadProgress}%` }}
          ></div>

          {/* Glow effect */}
          <div
            className="absolute left-0 top-0 h-full rounded-full opacity-30 blur-md"
            style={{ width: `${uploadProgress}%`, backgroundColor: "#34D399" }}
          ></div>

          <span className="relative z-10">{Math.floor(uploadProgress)}%</span>
        </button>
      ) : (
        <div
          className="text-green-900 hover:text-gray-600 p-1"
          onClick={(e) => handleContextMenu(e, item.id)}
        >
          <BsThreeDotsVertical  size={18} />
        </div>
      )}

      {/* Context Menu */}
      {activeContextMenu === item.id && (
        <ContextMenu
          item={item}
          contextMenuPos={contextMenuPos}
          isUploadingItem={isUploadingItem}
          handleCancelUpload={handleCancelUpload}
          handleDeleteFile={handleDeleteFile}
          handleDeleteDirectory={handleDeleteDirectory}
          openRenameModal={openRenameModal}
          BASE_URL={BASE_URL}
        />
      )}
    </div>
  );
};

export default DirectoryItem;
