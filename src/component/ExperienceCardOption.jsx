import { IoIosCheckmarkCircle } from "react-icons/io";

const ExperienceCardOption = (cardOptions) => {
  const { topicName, topicStatus } = cardOptions;
  return (
    <>
      <div className="flex gap-6 align-top ">
        <div className="icon text-3xl">
          <IoIosCheckmarkCircle />
        </div>
        <div className="content">
          <h4 className="leading-none text-lg font-poppins text-slate-950 font-semibold">
            {topicName}
          </h4>
          <p className="leading-none text-md font-poppins text-[#555] pt-2">
            {topicStatus}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExperienceCardOption;
