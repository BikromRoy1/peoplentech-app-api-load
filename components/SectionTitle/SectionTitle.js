import { FaBolt } from 'react-icons/fa6';

const SectionTitle = ({ title, subtitle, text, className = '' }) => {
  return (
    <div className='pb-[60px] text-center'>
      {subtitle && (
        <h4 className='bg-white text-[#162726] text-[16px] font-medium inline-flex items-center gap-2.5 mb-5 relative border border-[#E0E5EB] rounded-full section-padding'>
          <span className='background-color-section text-primary text-[14px] w-7 h-7 rounded-full flex items-center justify-center'>
            <FaBolt />
          </span>
          {subtitle}
        </h4>
      )}
      <h2
        className={`text-[28px]  sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-semibold leading-tight mb-0 ${className}`}
      >
        {title}
      </h2>
      {text && (
        <p className='mx-auto mt-3 text-gray-700 font-medium text-[15px] max-w-[800px]'>
          {text}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
