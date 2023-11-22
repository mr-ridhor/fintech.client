import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";

interface ListProps {
    text: string;
  }

  const List: React.FC<ListProps> = ({ text }) => {
    return (
      <div className="flex gap-2">
        <span className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center text-white font-bold">
          <IoCheckmarkOutline />
        </span>
        <p className="text-white text-sm font-bold">{text}</p>
      </div>
    );
  }

export default List