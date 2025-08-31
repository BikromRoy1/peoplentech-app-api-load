import PolytechnicBanner from '@/components/Polytechnic/PolytechnicBanner/PolytechnicBanner';
import PolytechnicBenefitCourse from '@/components/Polytechnic/PolytechnicBenefitCourse/PolytechnicBenefitCourse';
import PolytechnicCourse from '@/components/Polytechnic/PolytechnicCourse/PolytechnicCourse';
import PolytechnicSuccess from '@/components/Polytechnic/PolytechnicSuccess/PolytechnicSuccess';
import PolytechnicWhyChoose from '@/components/Polytechnic/PolytechnicWhyChoose/PolytechnicWhychoose';

const page = () => {
  return (
    <div>
      <PolytechnicBanner />
      <PolytechnicCourse />
      <PolytechnicBenefitCourse />
      <PolytechnicSuccess />
      <PolytechnicWhyChoose />
    </div>
  );
};

export default page;
