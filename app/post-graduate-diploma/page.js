import PostGraduateBanner from '@/components/PostGraduateDiploma/PostGraduateBanner/PostGraduateBanner';
import PostGraduateBenefit from '@/components/PostGraduateDiploma/PostGraduateBenefit/PostGraduateBenefit';
import PostGraduateCourses from '@/components/PostGraduateDiploma/PostGraduateCourses/PostGraduateCourses';

const PostGraduate = () => {
  return (
    <div>
      <PostGraduateBanner />
      <PostGraduateCourses />
      <PostGraduateBenefit />
    </div>
  );
};

export default PostGraduate;
