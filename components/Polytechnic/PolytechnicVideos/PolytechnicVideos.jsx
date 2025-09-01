import './PolytechnicVideos.css';

const PolytechnicVideos = () => {
  return (
    <section className='pb-[60px] pt-[60px] poly-videos'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-12 md:items-center'>
          <div className='md:col-span-8 md:col-start-3'>
            <div className='poly-videos'>
              <a
                href='https://www.youtube.com/watch?v=VSU7YTi-5Mw'
                className='glightbox'
              >
                <img
                  src='https://img.youtube.com/vi/VSU7YTi-5Mw/maxresdefault.jpg'
                  loading='lazy'
                  className='img-fluid videos-banner'
                  alt='PeopleTech Institute of IT'
                />
              </a>
              <a
                href='https://www.youtube.com/watch?v=VSU7YTi-5Mw'
                className='glightbox play-icons'
              >
                <img
                  src='/image/icons/play_icon_2 1.svg'
                  className='img-fluid'
                  alt='playing-icons'
                  loading='lazy'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolytechnicVideos;
