import MaxWidth from '../components/MaxWidth';
import { Experience } from '../components/Experience';
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
import {ProfilePhoto} from '../components/ProfilePhoto';
import {AboutUs} from '../components/AboutUs';
import { Language } from '../components/Language';
import { ToolAndSkill } from '../components/ToolAndSkill';
import { Achivements } from '../components/Achivements';
import { Qualification } from '../components/Qualification';
import { Availability } from '../components/Availability';

const Home = () => {
  return (
    <MaxWidth className='min-h-screen flex gap-4 py-8'>
      <div className='w-full lg:w-[70%] '>
        <section className=''>
          <Header
            data={headerData}
            className='animate-slide-in-left'
          />
        </section>
        <section className='mt-2'>
          <Experience
            data={experienceData}
            title='Experience'
            className='animate-slide-in-left'
          />
        </section>
        <section className='mt-2'>
          <Project
            data={projectData}
            title='Projects'
            className='animate-slide-in-left'
          />
        </section>
        <section className='mt-2'>
          <Education
            data={educationData}
            title='Education'
            className='animate-slide-in-left'
          />
        </section>
        <section className='mt-2'>
          <Qualification
            data={qualificationData}
            title='PROFESSIONAL QUALIFICATIONS'
            className='animate-slide-in-left'
          />
        </section>
        <section className='mt-2'>
          <Availability
            data={availabilityData}
            title='Availability'
            className='animate-slide-in-left'
          />
        </section>
      </div>
      <div className='w-full lg:w-[30%] bg-blue-500 text-white p-6'>
        <ProfilePhoto data={imageData} className='' />
        <AboutUs data={aboutusData} title='About Me' />
        <Language data={languagesData} title='Languages' />
        <ToolAndSkill data={skillCategoriesData} title='Tools and Skills'  />
        <Achivements data={achievementsData} title='Key Achivements' />
      </div>
    </MaxWidth>
  );
};

export default Home;
