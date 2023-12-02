import AboutCard from "./AboutCard";
import { FaAirFreshener, FaTrophy } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const AboutSection = () => {
  const AboutConMap = [
    {
      id: 1,
      headLine: "Experience",
      subHeadLine: "2+ years",
      paragraph: "Frontend Development",
      icon: <FaTrophy />,
    },
    {
      id: 2,
      headLine: "Education",
      subHeadLine: "B.Sc. Bachelors Degree",
      paragraph: "M.Sc. Masters Degree",
      icon: <FaAirFreshener />,
    },
  ];
  return (
    <>
      <div className="container mx-auto justify-center w-4/5">
        <SectionTitle subTitle="Get to know more" mainTitle="About Me" />
        <div className="about_con_main grid grid-cols-2 justify-center place-items-center gap-9">
          <div className="avatar">
            <div className="w-4/5 rounded-[30px]">
              <img src="https://thriving-dragon-a3fcd9.netlify.app/assets/about-pic.png" />
            </div>
          </div>
          <div className="about_con_area">
            <div className="grid grid-cols-2 gap-6">
              {AboutConMap.map((item, i) => (
                <AboutCard
                  key={i}
                  icon={item.icon}
                  headLine={item.headLine}
                  des1={item.subHeadLine}
                  des2={item.paragraph}
                />
              ))}
            </div>
            <p className="font-poppins text-md text-[#555] pt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium repudiandae quasi voluptatem cum eius tempore nesciunt
              deleniti accusamus, dolorum magnam. Repellendus assumenda deserunt
              hic voluptas asperiores inventore, perferendis, incidunt
              laboriosam ratione saepe quo neque eum est omnis! Commodi,
              repellat repellendus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
