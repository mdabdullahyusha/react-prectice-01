import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";

const ProjectsMain = () => {
  const projectCardCon = [
    {
      id: 1,
      image: "https://thriving-dragon-a3fcd9.netlify.app/assets/project-1.png",
      headLine: "Project One",
      githubBtn: "https://github.com/mdabdullahyusha/react-prectice-01",
      liveBtn: "https://react-prectice-01.vercel.app/",
    },
    {
      id: 2,
      image: "https://thriving-dragon-a3fcd9.netlify.app/assets/project-2.png",
      headLine: "Project Two",
      githubBtn: "https://github.com/mdabdullahyusha/investment",
      liveBtn: "https://mdabdullahyusha.github.io/investment/",
    },
    {
      id: 3,
      image: "https://thriving-dragon-a3fcd9.netlify.app/assets/project-3.png",
      headLine: "Project Three",
      githubBtn: "https://github.com/mdabdullahyusha/ctg-first-job",
      liveBtn: "https://mdabdullahyusha.github.io/ctg-first-job/",
    },
  ];
  return (
    <>
      <div className="container w-4/5 mx-auto justify-center my-24">
        <SectionTitle subTitle="Browse My Recent" mainTitle="Projects" />

        <div className="grid grid-cols-3 gap-6">
          {projectCardCon.map((item, i) => (
            <ProjectsCard
              key={i}
              image={item.image}
              headLine={item.headLine}
              githubBtn={item.githubBtn}
              liveBtn={item.liveBtn}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsMain;
