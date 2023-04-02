import React from "react";
import { useState } from "react";

const AccordData = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="" onClick={() => setIsActive(!isActive)}>
        <div className="flex justify-between mt-2 rounded-t-xl text-2xl font-bold bg-slate-50 cursor-pointer shadow-xl">
          <div className="m-2">{title}</div>
          <div className="font-extrabold text-2xl mx-2 order-last">
            {isActive ? "-" : "+"}
          </div>
        </div>
      </div>
      {isActive && (
        <div className="accordion-content bg-slate-200 p-2 rounded-b-2xl">{content}</div>
      )}
    </div>
  );
};

export default AccordData;
