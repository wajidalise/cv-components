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
    <div className='min-h-screen flex page '>
      <div className='w-[65.4%] py-9 pl-11 pr-8 '>
        <Header
          data={headerData}
          className=''
          titleClassName='text-[24px] font-rubik text-[#3e3e3e] font-medium'
          subtitleClassName='text-[14px] font-inter text-[#078fff]'
          paragraphClassName='text-[11px] font-inter text-gray-700'
        />
        <Experience
          data={experienceData}
          title='Experience'
          className='mt-5'
          titleClassName='text-[13.6px] font-rubik text-black/80'
          subtitleClassName='text-[12.7px] font-rubik text-black/80'
          companyClassName='text-[11.9px] font-rubik text-[#078fff]'
          paragraphClassName='text-[10.2px] font-inter text-black/80'
        />
        <Project
          data={projectData}
          title='Research and consulting projects'
          className='mt-5'
          titleClassName='text-[13.6px] font-rubik text-black/80'
          subtitleClassName='text-[12.7px] font-rubik text-black/80'
          paragraphClassName='text-[10.2px] font-inter text-black/80'
        />
        <Education
          data={educationData}
          title='Education'
          className='mt-5'
          titleClassName='text-[13.6px] font-rubik text-black/80'
          subtitleClassName='text-[12.7px] font-rubik text-black/80'
          institutionClassName='text-[11.9px] font-rubik text-[#078fff]'
          paragraphClassName='text-[10.2px] font-inter text-black/80'
        />
        <Qualification
          data={qualificationData}
          title='PROFESSIONAL QUALIFICATIONS'
          className='mt-5'
          titleClassName='text-[13.6px] font-rubik text-black/80'
          subtitleClassName='text-[12.7px] font-rubik text-black/80'
          paragraphClassName='text-[10.2px] font-inter text-black/80'
        />
        <Availability
          data={availabilityData}
          title='Availability'
          className='mt-5'
          titleClassName='text-[13.6px] font-rubik text-black/80'
          paragraphClassName='text-[10.2px] font-inter text-black/80'
        />
      </div>
      <div className='w-[34.6%] bg-[#22405c] text-white py-9 pr-10 pl-8 '>
        <ProfilePhoto
          data={imageData}
          className='mt-5'
        />
        <AboutUs
          data={aboutusData}
          title='About Me'
          className='mt-5'
          titleClassName='text-[13.6px] font-rubik'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
        <Language
          data={languagesData}
          title='Languages'
          className='mt-5'
          titleClassName='text-[13.6px] font-rubik'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
        <ToolAndSkill
          data={skillCategoriesData}
          title='Tools and Skills'
          className='mt-5'
          titleClassName='text-[13.6px] font-rubik'
          subtitleClassName='text-[12.7px] font-rubik text-primary'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
        <Achivements
          data={achievementsData}
          title='Key Achivements'
          classNmae='mt-5'
          titleClassName='text-[13.6px] font-rubik'
          subtitleClassName='text-[12.7px] font-rubik text-primary'
          paragraphClassName='text-[10.2px] font-inter text-primary'
        />
      </div> 
    </div>
  );
};

export default Home;
