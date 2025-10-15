/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";

function CreateDirectoryModal({
  newDirname,
  setNewDirname,
  onClose,
  onCreateDirectory,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus and select text only once on mount
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }

    // Listen for "Escape" key to close the modal
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup keydown event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Stop propagation when clicking inside the content
  // const handleContentClick = (e) => {
  //   e.stopPropagation();
  // };

  // Close when clicking outside the modal content
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div
  className="fixed inset-0 z-50 flex items-center  bg-green-950/10 justify-center bg-opacity-50 backdrop-blur-sm"
  onClick={handleOverlayClick}
>
  <div
    className="bg-gray-50 rounded-2xl shadow-lg w-[90%] sm:w-[400px] p-6"
    onClick={(e) => e.stopPropagation()} // stop overlay click from closing
  >
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Create a new directory
    </h2>

    <form onSubmit={onCreateDirectory} className="space-y-4">
      <input
        ref={inputRef}
        type="text"
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter folder name"
        value={newDirname}
        onChange={(e) => setNewDirname(e.target.value)}
      />

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg transition"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</div>
  );
}

export default CreateDirectoryModal;
