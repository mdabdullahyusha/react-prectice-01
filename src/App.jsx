import ContactMain from "./ContactMain";
import AboutSection from "./component/AboutSection";
import ExperienceMain from "./component/ExperienceMain";
import Intro from "./component/Intro";
import ProjectsMain from "./component/ProjectsMain";

const App = () => {
  return (
    <>
      <Intro />

      <AboutSection />

      <ExperienceMain />

      <ProjectsMain />

      <ContactMain />
    </>
  );
};

export default App;
