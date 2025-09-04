import PostGraduateBanner from '@/components/PostGraduateDiploma/PostGraduateBanner/PostGraduateBanner';
import PostGraduateBenefit from '@/components/PostGraduateDiploma/PostGraduateBenefit/PostGraduateBenefit';
import PostGraduateCourses from '@/components/PostGraduateDiploma/PostGraduateCourses/PostGraduateCourses';
import PostGraduateSupport from '@/components/PostGraduateDiploma/PostGraduateSupport/PostGraduateSupport';
import PostGraduateTextReview from '@/components/PostGraduateDiploma/PostGraduateTextReview/PostGraduateTextReview';
import PostGraduateVideoReview from '@/components/PostGraduateDiploma/PostGraduateVideoReview/PostGraduateVideoReview';

const PostGraduate = () => {
  return (
    <div>
      <PostGraduateBanner />
      <PostGraduateCourses />
      <PostGraduateBenefit />
      <PostGraduateTextReview />
      <PostGraduateVideoReview />
      <PostGraduateSupport />
    </div>
  );
};

export default PostGraduate;
