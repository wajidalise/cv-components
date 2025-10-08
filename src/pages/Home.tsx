import MaxWidth from "../components/MaxWidth";
import { Experience } from "../components/Experience";
import { educationData, experienceData, projectData } from "../components/fortfolioData";
import { Project } from "../components/Project";
import { Education } from "../components/Education";

const Home = () => {
  return (
    <MaxWidth className="min-h-screen flex gap-4 py-8">
      <div className="w-full lg:w-[70%] ">
        <section className="">
          <Experience
            data={experienceData}
            title="Experience"
            className="animate-slide-in-left"
          />
        </section>
        <section className="mt-2">
          <Project
            data={projectData}
            title="Projects"
            className="animate-slide-in-left"
          />
        </section>
        <section className="mt-2">
          <Education
            data={educationData}
            title="Education"
            className="animate-slide-in-left"
          />
        </section>
      </div>
      <div className="w-full lg:w-[30%] text-center">Profile</div>
    </MaxWidth>
  );
};

export default Home;
