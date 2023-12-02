import { FaAirFreshener, FaTrophy } from "react-icons/fa";

const AboutCard = (aboutCardProps) => {
  const { icon, headLine, des1, des2 } = aboutCardProps;
  // const aboutCardInfoAboutSection = [
  //   {
  //     id: 1,
  //     headLine: "I'm First Headline",
  //     subHeadLine: "I'm First Sub Headline",
  //     paragraph: "I'm First Paragraph",
  //     icon: <FaTrophy />,
  //   },
  //   {
  //     id: 2,
  //     headLine: "I'm Second Headline",
  //     subHeadLine: "I'm Second Sub Headline",
  //     paragraph: "I'm Second Paragraph",
  //     icon: <FaAirFreshener />,
  //   },
  // ];
  return (
    <>
      <div className="card_con_main w-full border rounded-3xl border-[#555] p-6 text-center">
        <div className="icon_area text-slate-950 flex justify-center text-3xl pb-2">
          {icon}
        </div>
        <h4 className="text-lg text-slate-950 font-bold font-poppins">
          {headLine}
        </h4>
        <p className="font-poppins text-md text-[#555]">{des1}</p>
        <p className="font-poppins text-md text-[#555]">{des2}</p>
      </div>
    </>
  );
};

export default AboutCard;
