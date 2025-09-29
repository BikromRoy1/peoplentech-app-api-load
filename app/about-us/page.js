import PageBanner from '@/components/PageBanner/PageBanner';
import SisterConcerns from '@/components/SisterConcerns/SisterConcerns';
import CompanyDream from './CompanyDream/CompanyDream';
import FounderMs from './FounderMs/FounderMs';
import OurGoal from './OurGoal/OurGoal';
import OurStory from './OurStory/OurStory';

const About = () => {
  return (
    <div>
      <PageBanner title='Our Company' subtitle='About' />
      <CompanyDream />
      <OurStory />
      <OurGoal />
      <FounderMs />
      <SisterConcerns />
    </div>
  );
};

export default About;
