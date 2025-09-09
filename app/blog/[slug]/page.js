import PageBanner from '@/components/PageBanner/PageBanner';
import { FaRegCalendarAlt, FaUserLock } from 'react-icons/fa';
import './BlogDetails.css';

const BlogDetails = () => {
  return (
    <div>
      <PageBanner title='Blog detail' subtitle='Blog detail' />
      <section className='pb-[80px] pt-[80px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-8 md:gap-10'>
            <div className='md:col-span-5'>
              <div>
                <img
                  className='w-full object-cover rounded-[10px] h-[450px]'
                  src='/image/blogs/blog-5.jpg'
                  alt='icons'
                />
                <div className='flex items-center gap-4 mt-[20px]'>
                  <div className='flex items-center gap-1.5'>
                    <FaRegCalendarAlt className='text-[#6C706F]' />
                    <span className='text-[#6C706F] text-[15px] font-medium capitalize'>
                      April 05, 2023
                    </span>
                  </div>
                  <div className='flex items-center gap-1.5 '>
                    <FaUserLock className='text-[#6C706F]' />
                    <span className='text-[#6C706F] text-[15px] font-medium'>
                      Bikrom Roy
                    </span>
                  </div>
                </div>
                <div className='mt-7 mb-3'>
                  <h4 className='font-bold text-2xl'>
                    Effective Study Habits to Boost Your Learning Journey
                  </h4>
                </div>
                <div>
                  <p className='text-gray-500 text-[15px] mb-4 font-medium'>
                    Please make sure you understand what rights you are claiming
                    before you submit a DMCA takedown notice because it is a
                    serious legal document. Consider whether you need legal
                    advice. Its really important not to make false claims as
                    this could have serious legal consequences.
                  </p>
                  <p className='text-gray-500 text-[15px] mb-4 font-medium'>
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Integer tristique elit lobortis purus
                    bibendum, quis dictum metus mattis. Phasellus posuere felis
                    sed eros porttitor mattis. Curabitur massa magna, tempor in
                    blandit id, porta in ligula. Aliquam laoreet nisl massa, at
                    interdum mauris sollicitudin et.Harvel is a copyright
                    protection platform for next-gen creators, crawling the web
                    on a daily basis in order to find piracy links and copyright
                    infringement of your content. I
                  </p>
                  <p className='text-gray-500 text-[15px] mb-4 font-medium'>
                    Phasellus enim magna, varius et commodo ut, ultricies vitae
                    velit. Ut nulla tellus, eleifend euismod and pellentesque
                    vel, sagittis vel justo. In libero urna, venenatis sit amet
                    ornare non, suscipit nec risus. Sed consequat justo non
                    mauris pretium at tempor justo sodales.
                  </p>
                  <h5 className='text-[18px] font-semibold mb-3'>
                    Get Your Resume Done Right
                  </h5>
                  <p className='text-gray-500 text-[15px] mb-4 font-medium'>
                    Phasellus enim magna, varius et commodo ut, ultricies vitae
                    velit. Ut nulla tellus, eleifend euismod and pellentesque
                    vel, sagittis vel justo. In libero urna, venenatis sit amet
                    ornare non, suscipit nec risus. Sed consequat justo non
                    mauris pretium at tempor justo sodales.
                  </p>
                  <p className='text-gray-500 text-[15px] mb-4 font-medium'>
                    Phasellus enim magna, varius et commodo ut, ultricies vitae
                    velit. Ut nulla tellus, eleifend euismod and pellentesque
                    vel, sagittis vel justo. In libero urna, venenatis sit amet
                    ornare non, suscipit nec risus. Sed consequat justo non
                    mauris pretium at tempor justo sodales.
                  </p>
                </div>
              </div>
            </div>
            <div className='md:col-span-3'>
              <div className='Article-bg p-6 rounded-[10px]'>
                <h4 className='capitalize text-[21px] font-semibold pl-[10px] border-l-[3px] border-primary mb-6'>
                  Recent Article
                </h4>
                <div>
                  <div className='mb-5 flex items-center gap-4'>
                    <div className='flex-shrink-0'>
                      <a href='#'>
                        <img
                          className='w-[140px] object-cover rounded-[8px] h-[90px]'
                          src='/image/blogs/blog-1.jpg'
                          alt='icons'
                        />
                      </a>
                    </div>
                    <div>
                      <h5 className='text-primary font-medium text-[15px] mb-1'>
                        March 05, 2025
                      </h5>
                      <p className='font-semibold text-[16px]'>
                        <a href='#'>
                          Effective Study Habits to Boost Your Learning Journey
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className='mb-5 flex items-center gap-4'>
                    <div className='flex-shrink-0'>
                      <a href='#'>
                        <img
                          className='w-[140px] object-cover rounded-[8px] h-[90px]'
                          src='/image/blogs/blog-2.jpg'
                          alt='icons'
                        />
                      </a>
                    </div>
                    <div>
                      <h5 className='text-primary font-medium text-[15px] mb-1'>
                        April 15, 2025
                      </h5>
                      <p className='font-semibold text-[16px]'>
                        <a href='#'>
                          Why Online Courses Are the Future of Education
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className='mb-5 flex items-center gap-4'>
                    <div className='flex-shrink-0'>
                      <a href='#'>
                        <img
                          className='w-[140px] object-cover rounded-[8px] h-[90px]'
                          src='/image/blogs/blog-3.jpg'
                          alt='icons'
                        />
                      </a>
                    </div>
                    <div>
                      <h5 className='text-primary font-medium text-[15px] mb-1'>
                        May 20, 2025
                      </h5>
                      <p className='font-semibold text-[16px]'>
                        <a href='#'>
                          Mastering Interview Skills: A Complete Guide for
                          Students
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className='mb-5 flex items-center gap-4'>
                    <div className='flex-shrink-0'>
                      <a href='#'>
                        <img
                          className='w-[140px] object-cover rounded-[8px] h-[90px]'
                          src='/image/blogs/blog-4.jpg'
                          alt='icons'
                        />
                      </a>
                    </div>
                    <div>
                      <h5 className='text-primary font-medium text-[15px] mb-1'>
                        July 28, 2025
                      </h5>
                      <p className='font-semibold text-[16px]'>
                        <a href='#'>
                          How to Balance Work, Study, and Personal Life
                          Effectively
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className='mb-5 flex items-center gap-4'>
                    <div className='flex-shrink-0'>
                      <a href='#'>
                        <img
                          className='w-[140px] object-cover rounded-[8px] h-[90px]'
                          src='/image/blogs/blog-6.jpg'
                          alt='icons'
                        />
                      </a>
                    </div>
                    <div>
                      <h5 className='text-primary font-medium text-[15px] mb-1'>
                        September 07, 2025
                      </h5>
                      <p className='font-semibold text-[16px]'>
                        <a href='#'>
                          Top Tech Skills Every Student Should Learn in 2025
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className=' flex items-center gap-4'>
                    <div className='flex-shrink-0'>
                      <a href='#'>
                        <img
                          className='w-[140px] object-cover rounded-[8px] h-[90px]'
                          src='/image/blogs/blog-9.jpg'
                          alt='icons'
                        />
                      </a>
                    </div>
                    <div>
                      <h5 className='text-primary font-medium text-[15px] mb-1'>
                        July 12, 2025
                      </h5>
                      <p className='font-semibold text-[16px]'>
                        <a href='#'>
                          Importance of Practical Projects in Skill Development
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
