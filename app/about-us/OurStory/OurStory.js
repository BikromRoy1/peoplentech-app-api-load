import Image from 'next/image';

const OurStory = () => {
  return (
    <section className='pb-[90px] pt-[90px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
          <div>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
              <div>
                <div>
                  <img
                    className='max-w-full h-full rounded-[10px]'
                    src='/image/icons/new-avatar2.jpg'
                    alt='avatar2'
                  />
                </div>
                <div className='bg-primary p-6 rounded-[10px] mt-5'>
                  <div className='w-[147px] mb-4'>
                    <Image
                      width={147}
                      height={80}
                      src='/image/icons/list-avatar.png'
                      alt='avatar'
                    />
                  </div>
                  <div>
                    <h4 className='text-white text-[28px] leading-[1.25em] font-bold'>
                      245k+
                    </h4>
                    <p className='mb-0 text-white text-[15px]'>
                      Positive Reviews
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <img
                    className='max-w-full h-full rounded-[10px]'
                    src='/image/icons/new-avatar.jpg'
                    alt='avatar2'
                  />
                </div>
                <div className='mt-5'>
                  <img
                    className='max-w-full h-full rounded-[10px]'
                    src='/image/icons/Frame.jpg'
                    alt='avatar2'
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h4 className='mb-4 text-xl font-extrabold capitalize   sm:text-3xl'>
                Our Story
              </h4>
              <p className='text-gray-500 text-[15px] mb-4 font-normal'>
                PeopleTech, LLC was formed in 2005 to provide affordable
                consulting and staffing services to small and medium enterprises
                to test their applications. Over the past few years,
                PeopleEnTech has expanded its service capabilities by
                incorporating diverse expertise into its pool of consultants and
                embarked on career consultancy to meet the needs of clients on
                both the employer and job seeker end. Such an endeavor for
                PeopleTech is a unique experience bringing a fresh realization
                that rapidly changing demands in technical skills can be
                effectively met by upskilling potential IT professionals through
                comprehensive and practical training.
              </p>
              <p className='text-gray-500 text-[15px] mb-4 font-normal'>
                In parallel with the employment agency, consulting and staffing
                services PeopleEnTech has started in-house training of its
                consultants and new hires on cutting edge testing, business
                analysts, project management professionals, database
                administration and network administration tools that are being
                used directly on the work desk. . The positive impact of such
                training results in higher performance for testers, QA analysts,
                business analysts, project management professionals, database
                administrators and network administrators.
              </p>
              <p className='text-gray-500 text-[15px] mb-4 font-normal'>
                Based on the success of PeopleNTech in USA, Canada and India,
                PeopleNTech started their journey in Bangladesh in 2014 with 60+
                courses at Dhaka campus. Now, PeopleEnTech Bangladesh is playing
                an important role in youth skill development by providing direct
                mid-level jobs and freelancing jobs. In this regard, PeopleNTech
                Bangladesh is known as the top professional skill development
                institute in Bangladesh and a global leader in IT and job
                placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
