/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DirectoryItem from "./DirectoryItem";
import {
  AiOutlineClockCircle,
  AiOutlineDelete,
  AiOutlineFolder,
  AiOutlineShareAlt,
  AiOutlineStar,
} from "react-icons/ai";
import { BsGrid, BsList } from "react-icons/bs";

const DirectoryList = ({
  items,
  handleRowClick,
  activeContextMenu,
  contextMenuPos,
  handleContextMenu,
  getFileIcon,
  isUploading,
  progressMap,
  handleCancelUpload,
  handleDeleteFile,
  handleDeleteDirectory,
  openRenameModal,
  BASE_URL,
}) => {
  const tabs = [
    { name: "All", icon: <AiOutlineFolder size={18} /> },
    { name: "Recent", icon: <AiOutlineClockCircle size={18} /> },
    { name: "Favorites", icon: <AiOutlineStar size={18} /> },
    // { name: "Shared", icon: <AiOutlineShareAlt size={18} /> },
    // { name: "Trash", icon: <AiOutlineDelete size={18} /> },
  ];
  const [activeTab, setActiveTab] = useState("All");
  const [view, setView] = useState("list");

  return (
    <div className="mt-3">
      {/* Header + Hook Line */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 px-1">
        {/* Left: Title */}
        <h1 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-800">
          All Folders & Files
        </h1>

        {/* Right: View toggle buttons */}
        <div className="flex mt-3 sm:mt-0 space-x-2">
          <button
            onClick={() => setView("list")}
            className={`flex items-center gap-2 px-3 py-1 rounded-lg font-medium transition-all ${
              view === "list"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <BsList size={18} />
          </button>

          <button
            onClick={() => setView("line")}
            className={`flex items-center gap-2 px-3 py-1 rounded-lg font-medium transition-all ${
              view === "line"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <BsGrid size={18} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === tab.name
                ? "bg-green-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Directory Items */}
      <div className="space-y-4">
        {items.map((item) => {
          const uploadProgress = progressMap[item.id] || 0;

          return (
            <DirectoryItem
              key={item.id}
              item={item}
              handleRowClick={handleRowClick}
              activeContextMenu={activeContextMenu}
              contextMenuPos={contextMenuPos}
              handleContextMenu={handleContextMenu}
              getFileIcon={getFileIcon}
              isUploading={isUploading}
              uploadProgress={uploadProgress}
              handleCancelUpload={handleCancelUpload}
              handleDeleteFile={handleDeleteFile}
              handleDeleteDirectory={handleDeleteDirectory}
              openRenameModal={openRenameModal}
              BASE_URL={BASE_URL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DirectoryList;
