import React from "react";
import { Skill } from "../../../utils/Skill";

function Portfolio() {
  return (
    <div className=" items-center pt-28 pb-10 md:py-72 ">
      <div className="font-medium order-last md:order-first  ">
        <div>
          <h1 className=" text-3xl font-medium">Skill</h1>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-3">
            {Skill.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 bg-white rounded-lg p-3"
              >
                <div className="w-full flex justify-center">
                  <div>
                    <h1 className=" text-6xl w-full flex justify-center">
                      <item.Icons />
                    </h1>
                    <h1 className=" text-center">{item.title}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
