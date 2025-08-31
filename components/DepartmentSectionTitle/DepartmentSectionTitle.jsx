const DepartmentSectionTitle = ({ title, text, subtitle }) => {
  return (
    <div className='pb-[50px] text-center'>
      <h2
        className={`text-[26px] font-siliguri text-[#111827]  sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[38px] font-semibold leading-tight mb-0 capitalize `}
      >
        {title} <span className='text-primary'>{subtitle}</span>
      </h2>
      {text && (
        <p className='mx-auto mt-3 leading-[26px] font-siliguri text-[#4b5563]  tracking-[0.20000000298023224px] font-normal text-[16px] max-w-[800px]'>
          {text}
        </p>
      )}
    </div>
  );
};

export default DepartmentSectionTitle;
