import './PostGraduateBenefit.css';

const PostGraduateBenefit = () => {
  return (
    <section className='pb-[60px] pt-[40px] pp-how-work-section '>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8 relative'>
        <div className='bg-[#1A192E] pb-[70px] pt-[70px] px-10 rounded-[30px] relative z-10 overflow-hidden'>
          <div className='top-shape'>
            <img src='/image/background/bg-shape.png' alt='img' />
          </div>
          <div>
            <div className='pb-[50px] text-center'>
              <h2
                className={`text-[26px] font-siliguri text-[#fff]  sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[38px] font-semibold leading-tight mb-0 capitalize `}
              >
                স্নাতক ডিপ্লোমা{' '}
                <span className='text-primary'>ট্রেনিং এ যা যা থাকছে</span>
              </h2>
              <p className='mx-auto mt-3 leading-[26px] font-siliguri text-[#ffffffb3]  tracking-[0.20000000298023224px] font-normal text-[16px] max-w-[800px]'>
                আমাদের দায়িত্ব কিন্তু কেবল ট্রেনিং দেবার মাঝেই সীমাবদ্ধ নয়। আমরা
                দিচ্ছি ট্রেনিং পরবর্তী মেন্টর সাপোর্ট, জব প্লেসেমেন্ট সাপোর্টসহ
                ক্যারিয়ার গড়ার সকল সাপোর্ট।
              </p>
            </div>
            <div>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                <div className='benefit-item'>
                  <img src='/image/icons/benefit-1.svg' alt='icons' />
                  <h2 className='text-[#fff] mt-6 mb-3 font-siliguri font-bold text-[20px] sm:text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]'>
                    অত্যাধুনিক ল্যাব ক্লাসরুম
                  </h2>
                  <p className='text-[#ffffffb2] mb-0 font-siliguri font-medium text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]'>
                    আমাদের ল্যাব ক্লাসরুমগুলো অত্যাধুনিক প্রযুক্তি দিয়ে সজ্জিত,
                    যেখানে শিক্ষার্থীরা হাতে-কলমে শিখে বাস্তব অভিজ্ঞতা অর্জন
                    করে। অভিজ্ঞ প্রশিক্ষক ও ব্যবহারিক শিক্ষণ পদ্ধতি তাদেরকে
                    ভবিষ্যতের জন্য প্রস্তুত করে।
                  </p>
                </div>
                <div className='benefit-item'>
                  <img src='/image/icons/benefit-2.svg' alt='icons' />
                  <h2 className='text-[#fff] hover:text-black mt-6 mb-3 font-siliguri font-bold text-[20px] sm:text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]'>
                    আনলিমিটেড সাপোর্ট
                  </h2>
                  <p className='text-[#ffffffb2] mb-0 font-siliguri font-medium text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]'>
                    আমরা শিক্ষার্থীদের জন্য ২৪/৭ আনলিমিটেড সাপোর্ট প্রদান করি,
                    যাতে যেকোনো প্রশ্ন বা সমস্যার দ্রুত সমাধান পাওয়া যায়। আমাদের
                    টিম সবসময় পাশে আছে শেখার প্রতিটি ধাপে সহায়তা করার জন্য।
                  </p>
                </div>
                <div className='benefit-item'>
                  <img src='/image/icons/benefit-3.svg' alt='icons' />
                  <h2 className='text-[#fff] hover:text-black mt-6 mb-3 font-siliguri font-bold text-[20px] sm:text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]'>
                    বিশেষ ইন্টারভিউ প্রস্তুতি
                  </h2>
                  <p className='text-[#ffffffb2] mb-0 font-siliguri font-medium text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]'>
                    আমরা শিক্ষার্থীদের জন্য বিশেষ ইন্টারভিউ প্রস্তুতির ব্যবস্থা
                    রেখেছি, যেখানে মক ইন্টারভিউ, ক্যারিয়ার গাইডলাইন এবং
                    প্রফেশনাল টিপসের মাধ্যমে আত্মবিশ্বাসী হয়ে চাকরির বাজারে
                    এগিয়ে যাওয়ার সুযোগ তৈরি হয়।
                  </p>
                </div>
                <div className='benefit-item'>
                  <img src='/image/icons/benefit-4.svg' alt='icons' />
                  <h2 className='text-[#fff] hover:text-black mt-6 mb-3 font-siliguri font-bold text-[20px] sm:text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]'>
                    লাইভ সেশন / লাইভ ক্লাস
                  </h2>
                  <p className='text-[#ffffffb2] mb-0 font-siliguri font-medium text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]'>
                    আমরা নিয়মিত লাইভ সেশন ও লাইভ ক্লাসের মাধ্যমে শিক্ষার্থীদের
                    ইন্টারঅ্যাক্টিভ লার্নিংয়ের সুযোগ দিই, যেখানে তারা সরাসরি
                    প্রশ্ন করতে পারে এবং রিয়েল-টাইম গাইডলাইন পায়।
                  </p>
                </div>
                <div className='benefit-item'>
                  <img src='/image/icons/benefit-5.svg' alt='icons' />
                  <h2 className='text-[#fff] hover:text-black mt-6 mb-3 font-siliguri font-bold text-[20px] sm:text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]'>
                    অফলাইন ভিডিও দেখার বিকল্প
                  </h2>
                  <p className='text-[#ffffffb2] mb-0 font-siliguri font-medium text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]'>
                    শিক্ষার্থীদের সুবিধার জন্য আমাদের কোর্সে অফলাইন ভিডিও দেখার
                    বিকল্প রয়েছে, যাতে ইন্টারনেট সংযোগ ছাড়াই যেকোনো সময় সহজে
                    শেখা যায়।
                  </p>
                </div>
                <div className='benefit-item'>
                  <img src='/image/icons/benefit-6.svg' alt='icons' />
                  <h2 className='text-[#fff] hover:text-black mt-6 mb-3 font-siliguri font-bold text-[20px] sm:text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]'>
                    ইন্টারন্যাশনাল জব প্লেসমেন্ট
                  </h2>
                  <p className='text-[#ffffffb2] mb-0 font-siliguri font-medium text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]'>
                    আমাদের বিশেষ ক্যারিয়ার সাপোর্ট প্রোগ্রামের মাধ্যমে
                    শিক্ষার্থীরা ইন্টারন্যাশনাল জব প্লেসমেন্টের সুযোগ পায়, যা
                    তাদের বৈশ্বিক ক্যারিয়ার গড়তে সহায়তা করে।
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

export default PostGraduateBenefit;
