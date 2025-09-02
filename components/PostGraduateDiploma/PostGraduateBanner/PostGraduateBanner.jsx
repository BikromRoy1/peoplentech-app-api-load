import { FaArrowRightLong } from 'react-icons/fa6';
import './PostGraduateBanner.css';

const PostGraduateBanner = () => {
  return (
    <section className='pp-hero-1 overflow-hidden'>
      <div className='top-shape'>
        <img src='/image/background/hero-bg.png' alt='banner' />
      </div>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-12 justify-center mx-auto'>
          <div className='col-span-12 lg:col-span-10 lg:col-start-2'>
            <div className='pp-hero-content'>
              <h1 className='wow img-custom-anim-left'>
                Post Graduate & Professional <br /> Diploma Programs
              </h1>
              <p className='wow fadeInUp' data-wow-delay='.5s'>
                Our list of courses is organized to include the skills that are
                currently in most demand in the country and abroad. From here
                you can enroll in the course online or offline anytime at your
                convenience.
              </p>
              <div className='pp-hero-button'>
                <a
                  href='#courses'
                  className='pp-theme-btn wow fadeInUp flex items-center gap-3 font-siliguri'
                  data-wow-delay='.3s'
                >
                  আমাদের কোর্স সমূহ <FaArrowRightLong />
                </a>
                <a
                  target='_blank'
                  href='https://www.piit.com.bd/'
                  className='pp-theme-btn pp-style-2 wow fadeInUp flex items-center gap-3 font-siliguri'
                  data-wow-delay='.3s'
                >
                  আরও জানুন <FaArrowRightLong />
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-12 mx-auto pb-6'>
            <div className='pp-hero-image  img-custom-anim-bottom rounded-[24px]'>
              <img src='/image/background/hero-2.jpg' alt='banner' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostGraduateBanner;
