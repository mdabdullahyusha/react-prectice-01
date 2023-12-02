import React from "react";
import ExperienceCardOption from "./ExperienceCardOption";

const ExperienceCard = (props) => {
  const cardOption = [
    {
      id: 1,
      topicName: "HTML",
      topicStatus: "Experienced",
    },
    {
      id: 2,
      topicName: "CSS",
      topicStatus: "Experienced",
    },
    {
      id: 3,
      topicName: "SASS",
      topicStatus: "Intermediate",
    },
    {
      id: 4,
      topicName: "Javascript",
      topicStatus: "Basic",
    },
    {
      id: 5,
      topicName: "TypeScript",
      topicStatus: "Basic",
    },
    {
      id: 6,
      topicName: "Material UI",
      topicStatus: "Intermediate",
    },
    {
      id: 7,
      topicName: "PostgreSQL",
      topicStatus: "Basic",
    },
    {
      id: 8,
      topicName: "Node JS",
      topicStatus: "Intermediate",
    },
    {
      id: 9,
      topicName: "Express JS",
      topicStatus: "Intermediate",
    },
    {
      id: 10,
      topicName: "Git",
      topicStatus: "Intermediate",
    },
  ];

  return (
    <>
      <div className="card_con border border-[#555] rounded-3xl p-6">
        <h3 className="text-center font-poppins text-3xl text-[#555] font-semibold mb-7">
          {props.headLine}
        </h3>
        <div className="card_option grid grid-cols-2 gap-10 justify-around">
          {cardOption.slice(0, 6).map((item, i) => (
            <ExperienceCardOption
              key={i}
              topicName={item.topicName}
              topicStatus={item.topicStatus}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
