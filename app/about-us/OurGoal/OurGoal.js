import './OurGoal.css';

const OurGoal = () => {
  return (
    <section className='pb-[90px] pt-[90px] OurGoal-bg'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
          <div className='join-us-style-one-item'>
            <div className='shape'>
              <img src='/image/icons/shap-01.png' alt='shap' />
            </div>
            <div className='info pb-6'>
              <h4 className='mb-6 text-xl font-extrabold capitalize text-secondary  sm:text-3xl'>
                Our Goal
              </h4>
              <p className='text-gray-500 text-[16px] font-medium leading-7'>
                Our aim is to provide a learning experience that exceeds
                expectations and we believe in only practical training methods.
                We always support our students in their aspirations to never
                stop learning and never stop growing. Our mission is to meet the
                growing demand for IT education to stay abreast of the latest
                technologies and skills.
              </p>
            </div>
            <div className='thumb'>
              <img
                className='max-w-full'
                src='/image/icons/shap-02.png'
                alt='man'
              />
            </div>
          </div>
          <div className='join-us-style-one-item active '>
            <div className='shape'>
              <img src='/image/icons/shap-01.png' alt='shap' />
            </div>
            <div className='info'>
              <h4 className='mb-6 text-xl font-extrabold capitalize text-primary  sm:text-3xl'>
                Our Purpose
              </h4>
              <p className='text-gray-300 text-[16px] font-medium leading-7'>
                Our vision is to serve our students as helping hands to create
                new horizons for people&apos;s career change. To empower the
                people of the country by ensuring modern and quality training
                system by harnessing the youth power.
              </p>
            </div>
            <div className='thumb'>
              <img
                className='max-w-full'
                src='/image/icons/shap-03.png'
                alt='woman'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
