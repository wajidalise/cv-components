// pages/Home.tsx

import { Experience } from '../components/Experience';
// import MaxWidth from '../components/MaxWidth';
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
} from '../components/fortfolioData';
import { Project } from '../components/Project';
import { Education } from '../components/Education';
import { Header } from '../components/Header';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { AboutUs } from '../components/AboutUs';
import { Language } from '../components/Language';
import { ToolAndSkill } from '../components/ToolAndSkill';
import { Achivements } from '../components/Achivements';
import { Qualification } from '../components/Qualification';
import { Availability } from '../components/Availability';

const Home = () => {
  return (
    <div className='min-h-screen flex page bg-white shadow-lg '>
      <div className='w-[70%] p-6 '>
        <Header
          data={headerData}
          className=''
          titleClassName='text-[24px] font-rubik text-primary'
          subtitleClassName='text-[14px] font-inter text-blue-600'
          paragraphClassName='text-[11px] font-inter text-gray-700'
        />
        <Experience
          data={experienceData}
          title='Experience'
          className=''
          titleClassName='text-[13.6px] font-rubik'
          subtitleClassName='text-[12.7px] font-rubik text-primary'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
        <Project
          data={projectData}
          title='Projects'
          className=''
          titleClassName='text-[13.6px] font-rubik'
          subtitleClassName='text-[12.7px] font-rubik text-primary'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
        <Education
          data={educationData}
          title='Education'
          className=''
          titleClassName='text-[13.6px] font-rubik'
          subtitleClassName='text-[12.7px] font-rubik text-primary'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
        <Qualification
          data={qualificationData}
          title='PROFESSIONAL QUALIFICATIONS'
          className=''
          titleClassName='text-[13.6px] font-rubik'
          subtitleClassName='text-[12.7px] font-rubik text-primary'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
        <Availability
          data={availabilityData}
          title='Availability'
          className=''
          titleClassName='text-[13.6px] font-rubik'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
      </div>
      <div className='w-[30%] bg-blue-500 text-white p-6  '>
        <ProfilePhoto
          data={imageData}
          className=''
        />
        <AboutUs
          data={aboutusData}
          title='About Me'
          titleClassName='text-[13.6px] font-rubik'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
        <Language
          data={languagesData}
          title='Languages'
          titleClassName='text-[13.6px] font-rubik'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
        <ToolAndSkill
          data={skillCategoriesData}
          title='Tools and Skills'
          titleClassName='text-[13.6px] font-rubik'
          subtitleClassName='text-[12.7px] font-rubik text-primary'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
        <Achivements
          data={achievementsData}
          title='Key Achivements'
          titleClassName='text-[13.6px] font-rubik'
          subtitleClassName='text-[12.7px] font-rubik text-primary'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
      </div> 
    </div>
  );
};

export default Home;
