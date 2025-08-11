import Link from 'next/link';
// import './PageBanner.css';

const PageBanner = ({ title, subtitle }) => {
  return (
    <section className='pb-[100px] pt-[100px] page-banner-bg bg-[#020617] relative'>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(4,169,255,0.35), transparent)`,
        }}
      />
      <div className='mx-auto px-4 sm:px-6 container lg:px-8 relative'>
        <div className='text-center'>
          <h4 className='text-2xl lg:text-4xl font-semibold mb-4 capitalize text-white'>
            {title}
          </h4>
          <ul className='mx-auto text-gray-500 text-sm lg:text-sm'>
            <li className='inline-flex items-center'>
              <Link
                className='hover:text-primary text-[#ced4df] font-medium'
                href='/'
              >
                Home
              </Link>
              <svg
                fill='currentColor'
                viewBox='0 0 20 20'
                className='h-5 w-auto text-gray-300'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </li>
            <li className='inline-flex items-center text-gray-400'>
              <span className='capitalize'>{subtitle}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
