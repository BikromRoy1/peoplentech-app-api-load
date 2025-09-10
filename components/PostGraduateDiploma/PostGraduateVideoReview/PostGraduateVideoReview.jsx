import { API_BASE_URL } from '@/app/lib/config';
import DepartmentSectionTitle from '@/components/DepartmentSectionTitle/DepartmentSectionTitle';
import './PostGraduateVideoReview.css';
import VideosModalPolytechnic from '@/components/Polytechnic/VideosModalPolytechnic/VideosModalPolytechnic';

async function getVideoTestimonials() {
  const res = await fetch(
    `${API_BASE_URL}/pgd/student-testimonial`,
    { cache: 'force-cache' } // Static generation
  );
  const data = await res.json();
  return data.data || [];
}
const PostGraduateVideoReview = async () => {
  const videos = await getVideoTestimonials();
  return (
    <section
      className='pb-[80px] pt-[80px] VideoReview-bg '
      style={{ backgroundImage: "url('/image/background/testimonial-bg.jpg')" }}
    >
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <DepartmentSectionTitle
          title='আমাদের  ডিপ্লোমা  ট্রেনিং নিয়ে'
          text='যারা ইন্ডাস্ট্রিয়াল ট্রেনিং মাধ্যমে নিজেদের দক্ষতা বৃদ্ধি করে ক্যারিয়ারে উন্নতি করেছেন। তাদের অভিজ্ঞতা, চ্যালেঞ্জ এবং সাফল্যের কথা শুনুন।'
          subtitle='আজ যারা সফল'
        />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {videos.map((video) => {
            const getYoutubeId = (url) => {
              try {
                if (url.includes('watch?v=')) {
                  return new URL(url).searchParams.get('v');
                } else if (url.includes('/embed/')) {
                  return url.split('/embed/')[1].split('?')[0];
                } else if (url.includes('youtu.be/')) {
                  return url.split('youtu.be/')[1].split('?')[0];
                }
                return null;
              } catch {
                return null;
              }
            };

            const youtubeId = getYoutubeId(video.video_url);
            const thumbnail = youtubeId
              ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
              : '/image/default-video-thumb.jpg';

            return (
              <div key={video.id} className='relative successStudents-items'>
                <label htmlFor='video_modal_poly' className='cursor-pointer'>
                  <img
                    className='w-full h-full object-cover rounded-[10px] cursor-pointer'
                    src={thumbnail}
                    alt='success story'
                  />
                </label>

                <div className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                  <label htmlFor='video_modal_poly' className='cursor-pointer'>
                    <img
                      className='w-[70px] h-[70px]'
                      src='/image/icons/play_icon_2 1.svg'
                      alt='play icon'
                    />
                  </label>
                </div>
                <VideosModalPolytechnic
                  video_url={video?.video_url}
                  video_title='Video Testimonial'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PostGraduateVideoReview;
