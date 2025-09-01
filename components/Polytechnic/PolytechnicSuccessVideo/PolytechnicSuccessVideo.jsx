import DepartmentSectionTitle from '@/components/DepartmentSectionTitle/DepartmentSectionTitle';
import '../../SuccessStoryVideo/SuccessStoryVideo.css';

const PolytechnicSuccessVideo = () => {
  return (
    <section className='pb-[100px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <DepartmentSectionTitle
          title='ইন্ডাস্ট্রিয়াল ট্রেনিং নিয়ে'
          subtitle='আজ যারা সফল'
          text='যারা ইন্ডাস্ট্রিয়াল ট্রেনিং মাধ্যমে নিজেদের দক্ষতা বৃদ্ধি করে ক্যারিয়ারে উন্নতি করেছেন। তাদের অভিজ্ঞতা, চ্যালেঞ্জ এবং সাফল্যের কথা শুনুন।'
        />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='relative successStudents-items'>
            <a href=''>
              <img
                className='w-full h-full object-cover rounded-[10px] cursor-pointer'
                src='https://img.youtube.com/vi/ec8I4GI5ULo/maxresdefault.jpg'
                alt='image'
              />
            </a>
            <div className='flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
              <a href=''>
                <img
                  className='w-[70px] h-[70px]'
                  src='/image/icons/play_icon_2 1.svg'
                  alt='icons'
                />
              </a>
            </div>
          </div>
          <div className='relative successStudents-items'>
            <a href=''>
              <img
                className='w-full h-full object-cover rounded-[10px] cursor-pointer'
                src='https://img.youtube.com/vi/GFSQYBZ7-yU/maxresdefault.jpg'
                alt='image'
              />
            </a>
            <div className='flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
              <a href=''>
                <img
                  className='w-[70px] h-[70px]'
                  src='/image/icons/play_icon_2 1.svg'
                  alt='icons'
                />
              </a>
            </div>
          </div>
          <div className='relative successStudents-items'>
            <a href=''>
              <img
                className='w-full h-full object-cover rounded-[10px] cursor-pointer'
                src='https://img.youtube.com/vi/VEjAVNvh-0Y/maxresdefault.jpg'
                alt='image'
              />
            </a>
            <div className='flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
              <a href=''>
                <img
                  className='w-[70px] h-[70px]'
                  src='/image/icons/play_icon_2 1.svg'
                  alt='icons'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolytechnicSuccessVideo;
