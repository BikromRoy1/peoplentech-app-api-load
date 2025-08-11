const WorkingOrganization = () => {
  return (
    <section className='pb-[40px] pt-[40px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:items-center md:gap-8'>
          <div className='md:col-span-2'>
            <div>
              <h2 className='text-[17px] text-[#191919] sm:text-[18px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-semibold leading-tight'>
                We Are Working with The Organizations
              </h2>
            </div>
          </div>
          <div className='md:col-span-4'>
            <div className='flex flex-wrap items-center justify-center w-full gap-6 lg:gap-0 lg:flex-nowrap lg:justify-between'>
              <div>
                <img
                  className='w-full h-18 object-cover'
                  src='/image/certificate/accrediated.png'
                  alt='image'
                />
              </div>
              <div>
                <img
                  className='w-full h-10 object-cover'
                  src='/image/certificate/Organizations-1.png'
                  alt='image'
                />
              </div>
              <div>
                <img
                  className='w-full h-10 object-cover'
                  src='/image/certificate/Organizations-2.png'
                  alt='image'
                />
              </div>
              <div>
                <img
                  className='w-full h-10 object-cover'
                  src='/image/certificate/Organizations-3.png'
                  alt='image'
                />
              </div>
              <div>
                <img
                  className='w-full h-10 object-cover'
                  src='/image/certificate/Organizations-4.png'
                  alt='image'
                />
              </div>
              <div>
                <img
                  className='w-full h-10 object-cover'
                  src='/image/certificate/Organizations-5.png'
                  alt='image'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingOrganization;
