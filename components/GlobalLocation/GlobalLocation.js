import SectionTitle from '../SectionTitle/SectionTitle';
import './GlobalLocation.css';

const GlobalLocation = () => {
  return (
    <section className='pb-[90px] pt-[90px] bg-color'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <SectionTitle
          title='Our Global Network'
          subtitle='04 Global Locations'
        />
        <div className='grid grid-cols-1 gap-4 md:grid-cols-12 md:items-center md:gap-8 justify-center mx-auto'>
          <div className='md:col-span-10 mx-auto md:col-start-2 text-center'>
            <div className='data-center-location-map'>
              <img
                className='max-w-full'
                src='/image/location/map.png'
                alt='map'
              />
              <div className='l_info l_info2'>
                <span className='circle-ball'></span>
                <div className='info-box text-center'>
                  <h5>United States</h5>
                </div>
              </div>
              <div className='l_info l_info7'>
                <span className='circle-ball'></span>
                <div className='info-box text-center'>
                  <h5>Canada</h5>
                </div>
              </div>
              <div className='l_info l_info9'>
                <span className='circle-ball'></span>
                <div className='info-box text-center'>
                  <h5>Bangladesh</h5>
                </div>
              </div>
              <div className='l_info l_info8'>
                <span className='circle-ball'></span>
                <div className='info-box text-center'>
                  <h5>India</h5>
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <div className='flex justify-center items-center gap-5 flex-wrap'>
                <div className='h-[90px] w-[140px]'>
                  <img
                    className='max-w-full rounded-lg'
                    src='/image/location/bd.png'
                    alt='map'
                  />
                  <p className='text-[#54595F] text-sm font-medium mt-1.5'>
                    Bangladesh
                  </p>
                </div>
                <div className='h-[90px] w-[140px]'>
                  <img
                    className='max-w-full rounded-lg'
                    src='/image/location/usa.png'
                    alt='map'
                  />
                  <p className='text-[#54595F] text-sm font-medium mt-1.5'>
                    United States
                  </p>
                </div>
                <div className='h-[90px] w-[140px]'>
                  <img
                    className='max-w-full rounded-lg'
                    src='/image/location/India.png'
                    alt='map'
                  />
                  <p className='text-[#54595F] text-sm font-medium mt-1.5'>
                    India
                  </p>
                </div>
                <div className='h-[90px] w-[140px]'>
                  <img
                    className='max-w-full rounded-lg'
                    src='/image/location/Canada.png'
                    alt='map'
                  />
                  <p className='text-[#54595F] text-sm font-medium mt-1.5'>
                    Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalLocation;
