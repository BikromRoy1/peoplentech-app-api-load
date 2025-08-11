import PageBanner from '@/components/PageBanner/PageBanner';
import VideoTestimonialsClient from '@/components/SuccessStoryVideo/VideoTestimonialsClient';

export const metadata = {
  title: 'Success Story - PeopleNTech',
  description:
    'We PeopleNTech is offering professional IT training course &amp; job placement facility for students. We are affiliating with top notch IT company in Bangladesh..',
};

const SuccessStories = () => {
  return (
    <div>
      <PageBanner
        title='Success Stories of Our Students'
        subtitle='success-stories'
      />
      <div className='pb-[80px] pt-[80px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <VideoTestimonialsClient />
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
