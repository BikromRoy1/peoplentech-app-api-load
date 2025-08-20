'use client';

import { API_BASE_URL } from '@/app/lib/config';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import '../ContactForm/ContactForm.css';
const OfficeContact = () => {
  const [contactsData, setContactsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/office-contacts`);
        const data = await res.json();
        setContactsData(data?.data || []);
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <section className=' pt-[80px] from-bg'>
      <div className='mx-auto px-4 sm:px-6 container'>
        <SectionTitle
          title='Office Contact Information'
          text='IP Phone: +880961-333-7448 ( please use your extension ) For Support & Complain send Email: info@peoplentech.com.bd'
        />

        {loading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
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
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            {contactsData?.map((group, index) => (
              <div
                key={index}
                className='border border-[#98a2b3] rounded-lg p-5'
              >
                <h4 className='text-[19px] leading-7 font-semibold mb-[15px]'>
                  {group?.title}
                </h4>

                {group?.contacts?.length === 0 ? (
                  <p className='text-gray-500 text-sm'>No contacts available</p>
                ) : (
                  group?.contacts?.map((person) => (
                    <div
                      key={person?.id}
                      className='flex w-full items-center justify-start gap-3 bg-gradient-to-r from-[#0062E0] to-[#19AFFF] mt-2 p-2 rounded-[6px]'
                    >
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='28'
                          height='28'
                          fill='none'
                          viewBox='0 0 29 28'
                          className='w-[17px] h-[17px] md:w-6 md:h-6'
                        >
                          <path
                            stroke='#fff'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2.223'
                            d='M17.246 2.917a9.298 9.298 0 018.213 8.204M17.246 7.05a5.164 5.164 0 014.083 4.083'
                          ></path>
                          <path
                            stroke='#fff'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2.223'
                            d='M13.37 14.551c4.655 4.653 5.71-.73 8.673 2.231 2.857 2.856 4.5 3.428.88 7.047-.454.364-3.334 4.748-13.457-5.373C-.658 8.335 3.722 5.451 4.086 4.998c3.629-3.628 4.193-1.977 7.05.879 2.961 2.962-2.42 4.022 2.235 8.674z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-base font-semibold md:text-[17px] text-white'>
                          {person.name}
                        </h3>
                        <p className='text-[14px] font-medium text-white opacity-90 tracking-wide'>
                          {person?.phone}{' '}
                          {person?.ip_phone && `(Ext:${person?.ip_phone})`}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OfficeContact;
