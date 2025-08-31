import DepartmentSectionTitle from '@/components/DepartmentSectionTitle/DepartmentSectionTitle';
import './PolytechnicWhychoose.css';

const PolytechnicWhyChoose = () => {
  return (
    <section className='pb-[80px] pt-[20px] bg-[#ffffff] why-choose-us'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <DepartmentSectionTitle
          title='পিপলএনটেক ইনস্টিটিউট কে'
          subtitle='কেন বেছে নিবেন?'
          text='অত্যাধুনিক মাল্টিমিডিয়া ক্লাসরুমে বসে, দেশের সেরা শিক্ষকদের কাছ থেকে সরাসরি শিখতে পারবেন ইন্ডাস্ট্রিয়াল এটাচমেন্ট ট্রেনিং এবং জব ও ইন্ডাস্ট্রি প্রস্তুতির টিপস এন্ড ট্রিকস।'
        />
        <div className='why-choose-us-box'>
          <div className='grid grid-cols-1 gap-0 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center'>
            <div className='col-lg-6'>
              <div className='why-choose-box-1'>
                <div className='why-choose-item'>
                  <div className='icon-box'>
                    <img src='/image/icons/icon-why-us-1.svg' alt='icons' />
                  </div>

                  <div className='why-choose-content'>
                    <h3 className='font-siliguri'>লেটেস্ট কোর্স মডিউল</h3>
                    <p className='font-siliguri'>
                      আমাদের প্রতিটি কোর্স ইন্ডাস্ট্রির শীর্ষ এক্সপার্ট ও অভিজ্ঞ
                      প্রফেশনালদের দ্বারা তৈরি
                    </p>
                  </div>
                </div>

                <div
                  className='why-choose-item wow fadeInUp'
                  data-wow-delay='0.25s'
                >
                  <div className='icon-box'>
                    <img src='/image/icons/icon-why-us-2.svg' alt='icons' />
                  </div>

                  <div className='why-choose-content'>
                    <h3 className='font-siliguri'>কমপ্লিট লার্নিং সাপোর্ট</h3>
                    <p className='font-siliguri'>
                      কোর্স চলাকালীন ও তার পরবর্তী পুরোটা সময় মেন্টর সাপোর্ট ও
                      গাইডেন্স
                    </p>
                  </div>
                </div>

                <div className='why-choose-item'>
                  <div className='icon-box'>
                    <img src='/image/icons/icon-why-us-3.svg' alt='icons' />
                  </div>

                  <div className='why-choose-content'>
                    <h3 className='font-siliguri'>রিয়েল-লাইফ ফোকাসড</h3>
                    <p className='font-siliguri'>
                      প্রতিটা প্রজেক্ট ও অ্যাসাইনমেন্টের রিয়েল-লাইফবেজড
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='why-choose-box-2'>
                <div className='why-choose-item'>
                  <div className='icon-box'>
                    <img src='/image/icons/icon-why-us-4.svg' alt='icons' />
                  </div>

                  <div className='why-choose-content'>
                    <h3 className='font-siliguri'>জব ও ইন্ডাস্ট্রি রেডিনেস</h3>
                    <p className='font-siliguri'>
                      এই কোর্স শেষে শিক্ষার্থীদের মধ্যে ইন্ডাস্ট্রিতে কাজ করার
                      মতো আত্মবিশ্বাস ও দক্ষতা তৈরি হবে।
                    </p>
                  </div>
                </div>

                <div className='why-choose-item '>
                  <div className='icon-box'>
                    <img src='/image/icons/icon-why-us-5.svg' alt='icons' />
                  </div>

                  <div className='why-choose-content'>
                    <h3 className='font-siliguri'>জব প্লেসমেন্ট পার্টনার</h3>
                    <p className='font-siliguri'>
                      জবপ্লেসমেন্ট পার্টনারদের কাছ থেকে ইন্টারভিউর কল পেতে শুধু
                      আমাদের দেখানো গাইডলাইনই যথেষ্ট
                    </p>
                  </div>
                </div>

                <div className='why-choose-item'>
                  <div className='icon-box'>
                    <img src='/image/icons/icon-why-us-6.svg' alt='icons' />
                  </div>

                  <div className='why-choose-content'>
                    <h3 className='font-siliguri'>জব ইন্টারভিউর সুযোগ</h3>
                    <p className='font-siliguri'>
                      আমাদের সাথে ইন্ডাস্ট্রিয়াল এটাচমেন্ট সম্পন্ন করলে চাকরির
                      জন্য ইন্টারভিউ এর ব্যবস্থা করে দিবো
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='why-choose-image'>
              <img src='/image/icons/why-us-img.png' alt='icons' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolytechnicWhyChoose;
