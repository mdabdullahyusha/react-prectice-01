import React from "react";
import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";

const ExperienceMain = () => {
  return (
    <>
      <div className="explore_area my-14">
        <div className="container mx-auto">
          <SectionTitle subTitle="Explore My" mainTitle="Experience" />
          <div className="explore_con_main grid grid-cols-2 gap-6 w-4/5 mx-auto">
            <ExperienceCard headLine="Frontend Development" />
            <ExperienceCard headLine="Backend Development" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceMain;
