import DepartmentSectionTitle from '@/components/DepartmentSectionTitle/DepartmentSectionTitle';
import './PolytechnicBenefitCourse.css';

const PolytechnicBenefitCourse = () => {
  return (
    <section className='pb-[30px] pt-[30px] bg-[#ffffff]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <DepartmentSectionTitle
          title='ইন্ডাস্ট্রিয়াল এটাচমেন্ট'
          subtitle='ট্রেনিং এ যা যা থাকছে'
          text='আমাদের দায়িত্ব কিন্তু কেবল ট্রেনিং দেবার মাঝেই সীমাবদ্ধ নয়। আমরা দিচ্ছি ট্রেনিং পরবর্তী মেন্টর সাপোর্ট, জব প্লেসেমেন্ট সাপোর্টসহ ক্যারিয়ার গড়ার সকল সাপোর্ট।'
        />
        <div className='grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='service-item'>
            <div className='icon-box'>
              <img src='/image/icons/icon-service-1.svg' alt='icons' />
            </div>
            <div className='service-body'>
              <h3 className='font-siliguri'>অত্যাধুনিক ল্যাব ক্লাসরুম</h3>
              <p className='font-siliguri'>
                আমাদের ল্যাব ক্লাসরুমগুলো অত্যাধুনিক প্রযুক্তি দিয়ে সজ্জিত, যা
                শিক্ষার্থীদের বাস্তব অভিজ্ঞতা অর্জনে সহায়তা করে।
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='icon-box'>
              <img src='/image/icons/icon-service-2.svg' alt='icons' />
            </div>
            <div className='service-body'>
              <h3 className='font-siliguri'>যেকোন যায়গা থেকে শেখার সুযোগ</h3>
              <p className='font-siliguri'>
                শিক্ষার্থীরা দেশের যেকোন প্রান্ত থেকে আমাদের ইন্সটিটিউটে এসে বা
                অনলাইন প্ল্যাটফর্মে জয়েন করে ইন্ডাস্ট্রি প্রজেক্টের মাধ্যমে
                শিখতে পারে।
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='icon-box'>
              <img src='/image/icons/icon-about-us-2.svg' alt='icons' />
            </div>

            <div className='service-body'>
              <h3 className='font-siliguri'>দেশের সেরা টিচার প্যানেল</h3>
              <p className='font-siliguri'>
                আমাদের প্যানেলে দেশের দীর্ঘ অভিজ্ঞতাসম্পন্ন শীর্ষস্থানীয়
                মেন্টররা, যারা শিক্ষার্থীদের সর্বোচ্চ মানের প্রশিক্ষণ প্রদান
                করেন।
              </p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-x-5 md:grid-cols-12 md:items-center'>
          <div className='md:col-span-4'>
            <div className='service-item'>
              <div className='icon-box'>
                <img src='/image/icons/icon-service-4.svg' alt='icons' />
              </div>

              <div className='service-body'>
                <h3 className='font-siliguri'>
                  ক্যারিয়ার ও ইন্টারভিউ প্রস্তুতি
                </h3>
                <p className='font-siliguri'>
                  আপনার সিভি, LinkedIn প্রোফাইল, GitHub প্রোফাইল আর চাকরির
                  ইন্টারভিউর ব্যাপারে সরাসরি সাপোর্ট পাবেন আমাদের কাছে।
                </p>
              </div>
            </div>
          </div>
          <div className='md:col-span-8'>
            <div className='service-item service-cta-item '>
              <div className='icon-box'>
                <img src='/image/icons/icon-cta.svg' alt='icons' />
              </div>

              <div className='service-body'>
                <h3 className='font-siliguri'>সাপোর্ট সেন্টার</h3>
                <p className='font-siliguri'>
                  শিক্ষার্থীদের সর্বোচ্চ সাপোর্ট নিশ্চিত করতে থাকবে এক্সপার্ট
                  টিচার ও ট্রেনিং কোওরডিনেটরদের সাথে ওয়ান টু ওয়ান সেশন ও
                  ফিডব্যাক সেশনের। যেখানে তুমি পাবে যেকোনো প্রশ্নের উত্তর পাওয়ার
                  সুযোগ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolytechnicBenefitCourse;
