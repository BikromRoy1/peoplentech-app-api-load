'use client';

import { API_BASE_URL } from '@/app/lib/config';
import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const SisterConcerns = () => {
  const [concerns, setConcerns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const fetchConcerns = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/sister-concern`);
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

  return (
    <section className='pb-[100px] pt-[100px]  bg-[#F2F4F7] relative'>
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
        <SectionTitle title='Our Sister Concerns' subtitle='Sister Concern' />
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
                  title={item?.name}
                  key={index}
                  className={`bg-white tooltip p-[13px] border border-[#E0E5EB] h-[100px] flex items-center justify-center overflow-hidden rounded-lg 
                    transform transition-all duration-700 ease-out
                    ${
                      visibleIndexes.includes(index)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-3'
                    }`}
                >
                  <a target='_blank' href={item?.web_url}>
                    <img
                      className='max-w-[100px] object-contain'
                      src={item.logo || '/images/default-logo.png'}
                      alt={item.name || 'Sister Concern'}
                    />
                  </a>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default SisterConcerns;
