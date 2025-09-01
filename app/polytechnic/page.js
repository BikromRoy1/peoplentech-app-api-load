import CallToAction from '@/components/Polytechnic/CallToAction/CallToAction';
import IndustrialPartners from '@/components/Polytechnic/IndustrialPartners/IndustrialPartners';
import PolytechnicBanner from '@/components/Polytechnic/PolytechnicBanner/PolytechnicBanner';
import PolytechnicBenefitCourse from '@/components/Polytechnic/PolytechnicBenefitCourse/PolytechnicBenefitCourse';
import PolytechnicChoose from '@/components/Polytechnic/PolytechnicChoose/PolytechnicChoose';
import PolytechnicCourse from '@/components/Polytechnic/PolytechnicCourse/PolytechnicCourse';
import PolytechnicSuccess from '@/components/Polytechnic/PolytechnicSuccess/PolytechnicSuccess';
import PolytechnicSuccessVideo from '@/components/Polytechnic/PolytechnicSuccessVideo/PolytechnicSuccessVideo';
import PolytechnicVideos from '@/components/Polytechnic/PolytechnicVideos/PolytechnicVideos';

const page = () => {
  return (
    <div>
      <PolytechnicBanner />
      <PolytechnicCourse />
      <PolytechnicBenefitCourse />
      <PolytechnicSuccess />
      <PolytechnicChoose />
      <PolytechnicSuccessVideo />
      <IndustrialPartners />
      <PolytechnicVideos />
      <CallToAction />
    </div>
  );
};

export default page;
