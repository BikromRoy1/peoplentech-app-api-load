'use client';

import { API_BASE_URL } from '@/app/lib/config';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoArrowForwardSharp } from 'react-icons/io5';
import './Featured.css';

const Featured = () => {
  const [benefits, setBenefits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/student-benefits`);
        const data = await res.json();
        setBenefits((data.data || []).slice(0, 6)); // Get the first 6 benefits
      } catch (error) {
        console.error('Failed to fetch benefits:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBenefits();
  }, []);

  return (
    <section className='pb-[100px] pt-[100px] featured-background'>
      <div className='shapes'>
        <div className='shape-1'>
          <img src='/image/background/feature-shape-3.png' alt='shape' />
        </div>
        <div className='shape-2'>
          <img src='/image/background/feature-shape-4.png' alt='shape' />
        </div>
        <div className='shape-3'>
          <img src='/image/background/feature-shape-5.png' alt='shape' />
        </div>
        <div className='shape-4'>
          <img src='/image/background/feature-shape-6.png' alt='shape' />
        </div>
      </div>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <SectionTitle
          title='Why Is PeopleNTech The Best Choice ?'
          subtitle='Special Services'
        />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {loading ? (
            <>
              <div className='relative successStudents-items animate-pulse'>
                <div
                  className='w-full h-48 rounded-[10px]'
                  style={{ backgroundColor: '#04a9ff33' }}
                />
                <div className='mt-4'>
                  <div
                    className='h-4 rounded w-3/4 mb-2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                  <div
                    className='h-3 rounded w-1/2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                </div>
              </div>
              <div className='relative successStudents-items animate-pulse'>
                <div
                  className='w-full h-48 rounded-[10px]'
                  style={{ backgroundColor: '#04a9ff33' }}
                />
                <div className='mt-4'>
                  <div
                    className='h-4 rounded w-3/4 mb-2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                  <div
                    className='h-3 rounded w-1/2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                </div>
              </div>
              <div className='relative successStudents-items animate-pulse'>
                <div
                  className='w-full h-48 rounded-[10px]'
                  style={{ backgroundColor: '#04a9ff33' }}
                />
                <div className='mt-4'>
                  <div
                    className='h-4 rounded w-3/4 mb-2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                  <div
                    className='h-3 rounded w-1/2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                </div>
              </div>
            </>
          ) : (
            benefits.map((benefit) => (
              <div
                key={benefit.id}
                className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary'
              >
                <div className='flex mb-[30px] items-center gap-4'>
                  <div>
                    <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                      <Image
                        width={50}
                        height={50}
                        className='object-cover'
                        src={benefit.icon || '/image/icons/feature-1.svg'}
                        alt={benefit.title}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                      {benefit.title}
                    </h3>
                  </div>
                </div>
                <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                  {benefit.description}
                </p>
              </div>
            ))
          )}
        </div>
        <div className='mt-8 text-center'>
          <Link href='/facilities' className='primary-btn'>
            Show More
            <IoArrowForwardSharp className='ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
