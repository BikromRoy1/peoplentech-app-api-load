import PolytechnicBanner from '@/components/Polytechnic/PolytechnicBanner/PolytechnicBanner';
import PolytechnicBenefitCourse from '@/components/Polytechnic/PolytechnicBenefitCourse/PolytechnicBenefitCourse';
import PolytechnicChoose from '@/components/Polytechnic/PolytechnicChoose/PolytechnicChoose';
import PolytechnicCourse from '@/components/Polytechnic/PolytechnicCourse/PolytechnicCourse';
import PolytechnicSuccess from '@/components/Polytechnic/PolytechnicSuccess/PolytechnicSuccess';

const page = () => {
  return (
    <div>
      <PolytechnicBanner />
      <PolytechnicCourse />
      <PolytechnicBenefitCourse />
      <PolytechnicSuccess />
      <PolytechnicChoose />
    </div>
  );
};

export default page;
