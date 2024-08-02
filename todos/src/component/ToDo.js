import React from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const ToDo = ({ text, updateMode, deleteMode }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-lg mb-4 shadow-md">
      <div className="text-white">{text}</div>
      <div className="flex items-center space-x-4">
        <FaPen
          className="text-white cursor-pointer hover:text-blue-950"
          onClick={updateMode}
        />
        <MdDelete
          className="text-white cursor-pointer hover:text-red-600"
          onClick={deleteMode}
        />
      </div>
    </div>
  );
};

export default ToDo;
