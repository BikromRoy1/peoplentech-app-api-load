import Department from '@/components/Home/Department/Department';
import CareerPlacement from '../CareerPlacement/CareerPlacement';
import Course from '../Course/Course';
import DiplomaCourse from '../DiplomaCourse/DiplomaCourse';
import SisterConcerns from '../SisterConcerns/SisterConcerns';
import SuccessStoryText from '../SuccessStoryText/SuccessStoryText';
import SuccessStoryVideo from '../SuccessStoryVideo/SuccessStoryVideo';
import University from '../University/University';
import UpcomingCourse from '../UpcomingCourse/UpcomingCourse';
import WorkingOrganization from '../WorkingOrganizations/WorkingOrganization';
import BannerTwo from './Banner/BannerTwo';
import Certification from './Certification/Certification';
import Featured from './Featured/Featured';
import Numbers from './Numbers/Numbers';

const Home = () => {
  return (
    <>
      <BannerTwo />
      <WorkingOrganization />
      {/* <Banner /> */}
      <UpcomingCourse />
      <Numbers />
      <Course />
      <DiplomaCourse />
      <Certification />
      <Department />
      <Featured />
      <SuccessStoryText />
      <SuccessStoryVideo />
      <University />
      <SisterConcerns />
      <CareerPlacement />
    </>
  );
};

export default Home;
