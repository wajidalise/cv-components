import React from "react";
import { Page, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

import { Experience } from "../components/react-pdf-randerer-com/Experience";
import { Project } from "../components/react-pdf-randerer-com/Project";
import { Education } from "../components/react-pdf-randerer-com/Education";
import { Header } from "../components/react-pdf-randerer-com/Header";
import { ProfilePhoto } from "../components/react-pdf-randerer-com/ProfilePhoto";
import { AboutUs } from "../components/react-pdf-randerer-com/AboutUs";
import { Language } from "../components/react-pdf-randerer-com/Language";
import { ToolAndSkill } from "../components/react-pdf-randerer-com/ToolAndSkill";
import { Achivements } from "../components/react-pdf-randerer-com/Achivements";
import { Qualification } from "../components/react-pdf-randerer-com/Qualification";
import { Availability } from "../components/react-pdf-randerer-com/Availability";

import {
  aboutusData,
  achievementsData,
  availabilityData,
  educationData,
  experienceData,
  headerData,
  imageData,
  languagesData,
  projectData,
  qualificationData,
  skillCategoriesData,
} from "../components/fortfolioData";

const tw = createTw({
  theme: {
    fontFamily: {
      inter: ["Inter"],
      rubik: ["Rubik"],
    },
  },
});

const Home: React.FC = () => {
  return (
    <Page size="A4" style={tw("flex flex-row min-h-screen w-[210mm] h-[297mm] mx-auto")}>
      {/* LEFT SECTION */}
      <View style={tw("w-[65.4%] py-9 pl-11 pr-8")}>
        <Header
          data={headerData}
          className=""
          titleClassName="text-[24px] font-rubik text-[#3e3e3e] font-medium"
          subtitleClassName="text-[14px] font-inter text-[#078fff]"
          paragraphClassName="text-[11px] font-inter text-gray-700"
        />

        <Experience
          data={experienceData}
          title="Experience"
          className="mt-5"
          titleClassName="text-[13.6px] font-rubik text-black/80"
          subtitleClassName="text-[12.7px] font-rubik text-black/80"
          companyClassName="text-[11.9px] font-rubik text-[#078fff]"
          paragraphClassName="text-[10.2px] font-inter text-black/80"
        />

        <Project
          data={projectData}
          title="Research and consulting projects"
          className="mt-5"
          titleClassName="text-[13.6px] font-rubik text-black/80"
          subtitleClassName="text-[12.7px] font-rubik text-black/80"
          paragraphClassName="text-[10.2px] font-inter text-black/80"
        />

        <Education
          data={educationData}
          title="Education"
          className="mt-5"
          titleClassName="text-[13.6px] font-rubik text-black/80"
          subtitleClassName="text-[12.7px] font-rubik text-black/80"
          institutionClassName="text-[11.9px] font-rubik text-[#078fff]"
          paragraphClassName="text-[10.2px] font-inter text-black/80"
        />

        <Qualification
          data={qualificationData}
          title="PROFESSIONAL QUALIFICATIONS"
          className="mt-5"
          titleClassName="text-[13.6px] font-rubik text-black/80"
          subtitleClassName="text-[12.7px] font-rubik text-black/80"
          paragraphClassName="text-[10.2px] font-inter text-black/80"
        />

        <Availability
          data={availabilityData}
          title="Availability"
          className="mt-5"
          titleClassName="text-[13.6px] font-rubik text-black/80"
          paragraphClassName="text-[10.2px] font-inter text-black/80"
        />
      </View>

      {/* RIGHT SECTION */}
      <View style={tw("w-[34.6%] bg-[#22405c] text-white py-9 pr-10 pl-8")}>
        <ProfilePhoto data={imageData} className="mt-5" />

        <AboutUs
          data={aboutusData}
          title="About Me"
          className="mt-5"
          titleClassName="text-[13.6px] font-rubik"
          paragraphClassName="text-[10.2px] font-inter text-primary"
        />

        <Language
          data={languagesData}
          title="Languages"
          className="mt-5"
          titleClassName="text-[13.6px] font-rubik"
          paragraphClassName="text-[10.2px] font-inter text-primary"
        />

        <ToolAndSkill
          data={skillCategoriesData}
          title="Tools and Skills"
          className="mt-5"
          titleClassName="text-[13.6px] font-rubik"
          subtitleClassName="text-[12.7px] font-rubik text-primary"
          paragraphClassName="text-[10.2px] font-inter text-primary"
        />

        <Achivements
          data={achievementsData}
          title="Key Achivements"
          className="mt-5"
          titleClassName="text-[13.6px] font-rubik"
          subtitleClassName="text-[12.7px] font-rubik text-primary"
          paragraphClassName="text-[10.2px] font-inter text-primary"
        />
      </View>
    </Page>
  );
};

export default Home;
