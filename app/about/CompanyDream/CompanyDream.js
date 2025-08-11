import Image from 'next/image';
import './CompanyDream.css';

const CompanyDream = () => {
  return (
    <section className='pb-[60px] pt-[60px] companyDream-bg'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:items-center'>
          <div>
            <h3 className='text-secondary mb-2 font-semibold text-[20px]'>
              Our Company Dream
            </h3>
            <h4 className='text-[17px]  sm:text-[18px] md:text-[20px] mb-5 lg:text-[25px] xl:text-[30px] font-bold leading-tight'>
              PeopleNTech Mission - To Create Skilled Manpower For Students.
            </h4>
            <p className='text-[#4b5563] text-base'>
              Since its inception in 2005, PeopleNTech has more than 6,000
              Trained students. PeopleNtech founder Abu Hanip has been committed
              to life and career change since the beginning attentive At
              PeopleNTech, we are real-time project oriented We provide training
              in the method. Our certified trainers With students at every step
              of their learning process Work closely. At PeopleNTech, we are
              passionate about learning, And we encourage our students to be the
              same. your Regardless of previous professional and educational
              background, if you successfully Complete the training and develop
              the right skills but few Within months you are IT like our other
              successful trainees will be employed in the field.
            </p>
          </div>
          <div className='banner-bg rounded-[20px] p-2.5 relative'>
            <a
              href='https://www.youtube.com/watch?v=nxSFNs00AkY'
              className='glightbox'
            >
              <img
                src='/image/about-bg.png'
                loading='lazy'
                className='w-full rounded-[20px] videos-banner'
                alt='PeopleTech Institute of IT'
              />
            </a>
            <a
              href='https://www.youtube.com/watch?v=nxSFNs00AkY'
              className='glightbox play-icons'
            >
              <Image
                width={80}
                height={80}
                src='/image/icons/play_icon_2 1.svg'
                className='object-cover'
                alt='playing-icons'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDream;
