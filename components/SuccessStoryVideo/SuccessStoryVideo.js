import { API_BASE_URL } from '@/app/lib/config';
import Link from 'next/link';
import { IoArrowForwardSharp } from 'react-icons/io5';
import SectionTitle from '../SectionTitle/SectionTitle';
import VideosModal from '../VideosModal/VideosModal';
import './SuccessStoryVideo.css';

async function getVideoTestimonials() {
  const res = await fetch(
    `${API_BASE_URL}/video-testimonial`,
    { cache: 'force-cache' } // Static generation
  );
  const data = await res.json();
  return data.data || [];
}

const SuccessStoryVideo = async () => {
  const videos = await getVideoTestimonials();
  const topThree = videos.slice(0, 6); // Get the first three videos

  return (
    <section className='pb-[100px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <SectionTitle
          title='Success Stories Of Our Students'
          subtitle='Reviews'
        />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {topThree.map((video) => {
            const youtubeId = new URL(video.video_url).searchParams.get('v');
            const thumbnail = youtubeId
              ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
              : '/image/default-video-thumb.jpg';
            return (
              <div key={video.id} className='relative successStudents-items'>
                <label htmlFor='video_modal' className='cursor-pointer'>
                  <img
                    className='w-full h-full object-cover rounded-[10px] cursor-pointer'
                    src={thumbnail}
                    alt='success story'
                  />
                </label>
                <div className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                  <label htmlFor='video_modal' className='cursor-pointer'>
                    <img
                      className='w-[70px] h-[70px]'
                      src='/image/icons/play_icon_2 1.svg'
                      alt='play icon'
                    />
                  </label>
                </div>
                <VideosModal
                  video_url={video.video_url}
                  video_title='Video Testimonial'
                />
              </div>
            );
          })}
        </div>
        <div className='mt-8 text-center'>
          <Link href='/success-stories' className='primary-btn'>
            Show More
            <IoArrowForwardSharp className='ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoryVideo;
