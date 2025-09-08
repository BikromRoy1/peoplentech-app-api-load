import VideosModal from '@/components/VideosModal/VideosModal';
import './PolytechnicVideos.css';

const PolytechnicVideos = () => {
  return (
    <section className='pb-[60px] pt-[60px] poly-videos'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-12 md:items-center'>
          <div className='md:col-span-8 md:col-start-3'>
            <div className='poly-videos'>
              <label htmlFor='video_modal' className='cursor-pointer'>
                <img
                  src='https://img.youtube.com/vi/VSU7YTi-5Mw/maxresdefault.jpg'
                  loading='lazy'
                  className='img-fluid videos-banner'
                  alt='PeopleTech Institute of IT'
                />
              </label>
              <label
                htmlFor='video_modal'
                className=' play-icons cursor-pointer'
              >
                <img
                  src='/image/icons/play_icon_2 1.svg'
                  className='img-fluid'
                  alt='playing-icons'
                  loading='lazy'
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <VideosModal
        video_url='https://www.youtube.com/embed/VSU7YTi-5Mw?si=PYFD0vUNE_v4KU4h'
        video_title='Industry Skills For Global Career'
      />
    </section>
  );
};

export default PolytechnicVideos;
