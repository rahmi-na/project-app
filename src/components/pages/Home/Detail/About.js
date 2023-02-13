import React from "react";
import personal from "../../../assets/personal.svg";

function About() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center ">
        <div className="font-medium order-last md:order-first flex justify-center ">
          <div className="mt-10">
            <h1 className=" text-2xl md:text-3xl font-medium">About me</h1>
            <p className=" text-lg text-justify ">
              Experienced in web developer. Having a commitment to long-term
              goals, being persistent in doing something, and being curious
              about new things. Have a goal of being useful to others and have a
              passion for website technology
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={personal} alt="" className=" w-1/1 " />
        </div>
      </div>
    </div>
  );
}

export default About;
