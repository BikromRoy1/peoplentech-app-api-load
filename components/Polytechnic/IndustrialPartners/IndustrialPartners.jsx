import DepartmentSectionTitle from '@/components/DepartmentSectionTitle/DepartmentSectionTitle';

const IndustrialPartners = () => {
  return (
    <section className='pb-[80px] pt-[80px]  bg-[#F2F4F7] relative'>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
    `,
          backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%',
        }}
      />
      <div className='mx-auto px-4 sm:px-6 container lg:px-8 relative z-10'>
        <DepartmentSectionTitle
          title='আমাদের ইন্ডাস্ট্রিয়াল'
          subtitle='পার্টনারস'
          text='আমাদের শক্তিশালী ইন্ডাস্ট্রিয়াল পার্টনারস নেটওয়ার্ক আমাদেরকে আরও অগ্রসর হতে সাহায্য করছে। তাদের অভিজ্ঞতা, সহযোগিতা ও বিশ্বাস আমাদের যাত্রাকে করছে আরও সমৃদ্ধ এবং টেকসই।'
        />
        <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6'>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px] object-cover'
              src='/image/Sister-Concern/Partners-1.jpeg'
              alt='image'
            />
          </div>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px]'
              src='/image/Sister-Concern/Partners-2.jpeg'
              alt='image'
            />
          </div>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px] object-cover'
              src='/image/Sister-Concern/Partners-1.jpeg'
              alt='image'
            />
          </div>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px]'
              src='/image/Sister-Concern/Partners-2.jpeg'
              alt='image'
            />
          </div>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px] object-cover'
              src='/image/Sister-Concern/Partners-1.jpeg'
              alt='image'
            />
          </div>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px]'
              src='/image/Sister-Concern/Partners-2.jpeg'
              alt='image'
            />
          </div>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px] object-cover'
              src='/image/Sister-Concern/Partners-1.jpeg'
              alt='image'
            />
          </div>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px]'
              src='/image/Sister-Concern/Partners-2.jpeg'
              alt='image'
            />
          </div>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px] object-cover'
              src='/image/Sister-Concern/Partners-1.jpeg'
              alt='image'
            />
          </div>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px]'
              src='/image/Sister-Concern/Partners-2.jpeg'
              alt='image'
            />
          </div>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px] object-cover'
              src='/image/Sister-Concern/Partners-1.jpeg'
              alt='image'
            />
          </div>
          <div className='bg-white p-[10px] border border-[#E0E5EB]  h-[170px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[150px]'
              src='/image/Sister-Concern/Partners-2.jpeg'
              alt='image'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialPartners;
