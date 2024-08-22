
import React from 'react';
import Widget from './Widget';
import Button from './Button';
import { FaPlus } from "react-icons/fa";


function Category({ title, widgets }) {
  const slots = [];
  const totalSlots = Math.ceil((widgets.length + 1) / 3) * 3; // Ensure the total number of slots is a multiple of 3

  for (let i = 0; i < totalSlots; i++) {
    if (i < widgets.length) {
      slots.push(
        <div key={i} className="w-1/3 p-2">
          <Widget widgetName={widgets[i].name} widgetDesc={widgets[i].text} />
        </div>
      );
    } else {
      slots.push(
        <div key={i} className="w-1/3 p-2">
          <div className="border border-slate-300 shadow-md mx-4 my-4 h-52 bg-white flex flex-col items-center justify-center p-4 rounded-xl">
            <h1 className='bg-inherit text-xl flex items-center text-gray-500 font-bold'>Add Widget <FaPlus className="text-sm text-gray-500 bg-inherit mx-2 font-bold" /></h1>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="w-full flex-col my-4 h-auto">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap">
        {slots}
      </div>
    </div>
  );
}

export default Category;
