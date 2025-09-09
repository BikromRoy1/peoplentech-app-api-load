'use client';
import { API_BASE_URL } from '@/app/lib/config';
import DepartmentSectionTitle from '@/components/DepartmentSectionTitle/DepartmentSectionTitle';
import { useEffect, useState } from 'react';

const IndustrialPartners = () => {
  const [concerns, setConcerns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const fetchConcerns = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/polytechnic/industrial-partners`
        );
        const data = await res.json();
        setConcerns(data?.data || []);
      } catch (error) {
        console.error('Failed to fetch sister concerns', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConcerns();
  }, []);

  useEffect(() => {
    if (!loading && concerns.length > 0) {
      concerns.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleIndexes((prev) => [...prev, idx]);
        }, idx * 150); // প্রতিটি আইটেমের জন্য 150ms delay
      });
    }
  }, [loading, concerns]);

  console.log(concerns);

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
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className='bg-white p-[13px] border border-[#E0E5EB] h-[100px] flex items-center justify-center overflow-hidden rounded-lg'
                >
                  <div className='skeleton w-[100px] h-[50px]'></div>
                </div>
              ))
            : concerns.map((item, index) => (
                <div
                  title={item?.name || 'Industrial Partners'}
                  key={index}
                  className={`bg-white tooltip p-[10px] border border-[#E0E5EB] h-[170px] flex items-center justify-center overflow-hidden rounded-lg 
                    transform transition-all duration-700 ease-out
                    ${
                      visibleIndexes.includes(index)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-3'
                    }`}
                >
                  <a target='_blank' href={item?.web_url}>
                    <img
                      className='max-w-[150px] object-cover'
                      src={item?.logo || '/images/default-logo.png'}
                      alt={item?.name || 'Industrial Partners'}
                    />
                  </a>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialPartners;
