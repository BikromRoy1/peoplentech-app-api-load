import { RiVerifiedBadgeFill } from 'react-icons/ri';
import './University.css';

const University = () => {
  return (
    <section className='pb-[100px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='university-background py-16 rounded-[10px] px-12'>
          <div className='shape-1'></div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-5 md:items-center md:gap-8'>
            <div className='md:col-span-3'>
              <div className='mb-[5px]'>
                <a target='_blank' href='https://www.wust.edu/'>
                  <img
                    src='/image/certificate/accrediated.png'
                    alt='certificate'
                  />
                </a>
              </div>
              <div className='bg-white p-[30px] rounded-[10px]'>
                <div>
                  <span></span>
                  <h2 className='text-[22px] font-semibold leading-tight mb-3'>
                    Global Academic Collaboration with WUST
                  </h2>
                  <p className='text-[14px] text-[#6C706F] mb-5'>
                    University of Science & Technology (WUST) is a top-ranked
                    public university in China, known for excellence in
                    engineering, science, and medicine. It offers global
                    academic programs and attracts students from over 100
                    countries through innovation and research-based education.
                  </p>
                </div>
                <div className='border-b border-[#E0E5EB] pb-[15px] mb-[25px] flex items-center justify-between gap-3'>
                  <ul>
                    <li className='text-[#162726] mb-[10px] font-medium text-[15px] flex items-center gap-1.5'>
                      <RiVerifiedBadgeFill className='text-primary' />
                      Globally ranked programs
                    </li>
                    <li className='text-[#162726] mb-[10px] font-medium text-[15px] flex items-center gap-1.5'>
                      <RiVerifiedBadgeFill className='text-primary' />
                      International student community
                    </li>
                  </ul>
                  <ul>
                    <li className='text-[#162726] mb-[10px] font-medium text-[15px] flex items-center gap-1.5'>
                      <RiVerifiedBadgeFill className='text-primary' />
                      State-of-the-art labs, research centers
                    </li>
                    <li className='text-[#162726] mb-[10px] font-medium text-[15px] flex items-center gap-1.5'>
                      <RiVerifiedBadgeFill className='text-primary' />
                      Dual-degree opportunities
                    </li>
                  </ul>
                </div>
                <div className='flex items-center justify-between gap-2'>
                  <div className='bg-[#F2F4F7] border border-[#E0E5EB] rounded-[10px] w-[100px] h-[70px] flex justify-center items-center'>
                    <img
                      src='/image/certificate/wust-1.png'
                      alt='critifications'
                    />
                  </div>
                  <div className='bg-[#F2F4F7] border border-[#E0E5EB] rounded-[10px] w-[100px] h-[70px] flex justify-center items-center'>
                    <img
                      src='/image/certificate/wust-2.png'
                      alt='critifications'
                    />
                  </div>
                  <div className='bg-[#F2F4F7] border border-[#E0E5EB] rounded-[10px] w-[100px] h-[70px] flex justify-center items-center'>
                    <img
                      src='/image/certificate/wust-3.png'
                      alt='critifications'
                    />
                  </div>
                  <div className='bg-[#F2F4F7] border border-[#E0E5EB] rounded-[10px] w-[100px] h-[70px] flex justify-center items-center'>
                    <img
                      src='/image/certificate/wust-4.png'
                      alt='critifications'
                    />
                  </div>
                  <div className='bg-[#F2F4F7] border border-[#E0E5EB] rounded-[10px] w-[100px] h-[70px] flex justify-center items-center'>
                    <img
                      src='/image/certificate/wust-5.png'
                      alt='critifications'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-2'>
              <div className='bg-white h-[445px] w-full p-[5px] rounded-[15px]'>
                <img
                  className='rounded-[10px] w-full h-full object-cover'
                  src='/image/background/cta-img.jpg'
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

export default University;
