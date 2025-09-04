import PostGraduateBanner from '@/components/PostGraduateDiploma/PostGraduateBanner/PostGraduateBanner';
import PostGraduateBenefit from '@/components/PostGraduateDiploma/PostGraduateBenefit/PostGraduateBenefit';
import PostGraduateCourses from '@/components/PostGraduateDiploma/PostGraduateCourses/PostGraduateCourses';
import PostGraduateTextReview from '@/components/PostGraduateDiploma/PostGraduateTextReview/PostGraduateTextReview';

const PostGraduate = () => {
  return (
    <div>
      <PostGraduateBanner />
      <PostGraduateCourses />
      <PostGraduateBenefit />
      <PostGraduateTextReview />
    </div>
  );
};

export default PostGraduate;
