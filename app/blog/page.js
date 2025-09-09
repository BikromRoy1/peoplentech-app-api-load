import PageBanner from '@/components/PageBanner/PageBanner';
import Link from 'next/link';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import './Blogs.css';

export const metadata = {
  title: 'Blogs - PeopleNTech',
  description:
    'Join our free seminars and enhance your skills with PeopleNTech experts.',
};

const Blogs = () => {
  return (
    <div>
      <PageBanner title='Our All Blogs' subtitle='Blogs' />
      <div className='pb-[80px] pt-[100px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            <div className='blog-post bg-white rounded-[10px] p-[20px] mb-[30px] mt-[20px]'>
              <div className='wt-post-media mb-[40px] overflow-hidden mt-[-40px] rounded-[10px]'>
                <Link href='/blog/Effective-Study-Habits-to-Boost-Your-Learning-Journey'>
                  <img
                    className='w-full'
                    src='/image/blogs/blog-1.jpg'
                    alt='images'
                  />
                </Link>
              </div>
              <div className='relative z-10'>
                <div className='wt-post-meta relative mb-[20px]'>
                  <ul className='list-none mb-0'>
                    <li className='post-date'>March 05, 2025</li>
                    <li className='post-author'>
                      By <span className='text-primary'>Bikrom Roy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='mb-[15px] capitalize text-lg font-semibold text-[#17171d] hover:text-primary'>
                    <Link href='/blog/Effective-Study-Habits-to-Boost-Your-Learning-Journey'>
                      Effective Study Habits to Boost Your Learning Journey
                    </Link>
                  </h4>
                </div>
                <div>
                  <p className='mb-3 text-base text-gray-500 font-normal'>
                    Discover practical tips and proven methods to improve your
                    study habits, stay consistent, and achieve better academic
                    results.
                  </p>
                </div>
                <div className='pb-1'>
                  <Link
                    className='text-primary flex items-center gap-1.5 text-[15px] font-semibold hover:text-[#17171d] '
                    href='/blog/Effective-Study-Habits-to-Boost-Your-Learning-Journey'
                  >
                    Read More <MdKeyboardDoubleArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className='blog-post bg-white rounded-[10px] p-[20px] mb-[30px] mt-[20px]'>
              <div className='wt-post-media mb-[40px] overflow-hidden mt-[-40px] rounded-[10px]'>
                <a href='#'>
                  <img
                    className='w-full'
                    src='/image/blogs/blog-2.jpg'
                    alt='images'
                  />
                </a>
              </div>
              <div className='relative z-10'>
                <div className='wt-post-meta relative mb-[20px]'>
                  <ul className='list-none mb-0'>
                    <li className='post-date'>April 15, 2025</li>
                    <li className='post-author'>
                      By <span className='text-primary'>Bikrom Roy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='mb-[15px] capitalize text-lg font-semibold text-[#17171d] hover:text-primary'>
                    <a href='#'>
                      Why Online Courses Are the Future of Education
                    </a>
                  </h4>
                </div>
                <div>
                  <p className='mb-3 text-base text-gray-500 font-normal'>
                    Explore how e-learning platforms are transforming education,
                    making quality learning accessible anytime, anywhere.
                  </p>
                </div>
                <div className='pb-1'>
                  <a
                    className='text-primary flex items-center gap-1.5 text-[15px] font-semibold hover:text-[#17171d] '
                    href='#'
                  >
                    Read More <MdKeyboardDoubleArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className='blog-post bg-white rounded-[10px] p-[20px] mb-[30px] mt-[20px]'>
              <div className='wt-post-media mb-[40px] overflow-hidden mt-[-40px] rounded-[10px]'>
                <a href='#'>
                  <img
                    className='w-full'
                    src='/image/blogs/blog-3.jpg'
                    alt='images'
                  />
                </a>
              </div>
              <div className='relative z-10'>
                <div className='wt-post-meta relative mb-[20px]'>
                  <ul className='list-none mb-0'>
                    <li className='post-date'>May 20, 2025</li>
                    <li className='post-author'>
                      By <span className='text-primary'>Bikrom Roy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='mb-[15px] capitalize text-lg font-semibold text-[#17171d] hover:text-primary'>
                    <a href='#'>
                      Mastering Interview Skills: A Complete Guide for Students
                    </a>
                  </h4>
                </div>
                <div>
                  <p className='mb-3 text-base text-gray-500 font-normal'>
                    Learn the essential interview strategies, tips, and tricks
                    that will help you stand out and secure your dream job.
                  </p>
                </div>
                <div className='pb-1'>
                  <a
                    className='text-primary flex items-center gap-1.5 text-[15px] font-semibold hover:text-[#17171d] '
                    href='#'
                  >
                    Read More <MdKeyboardDoubleArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className='blog-post bg-white rounded-[10px] p-[20px] mb-[30px] mt-[20px]'>
              <div className='wt-post-media mb-[40px] overflow-hidden mt-[-40px] rounded-[10px]'>
                <a href='#'>
                  <img
                    className='w-full'
                    src='/image/blogs/blog-4.jpg'
                    alt='images'
                  />
                </a>
              </div>
              <div className='relative z-10'>
                <div className='wt-post-meta relative mb-[20px]'>
                  <ul className='list-none mb-0'>
                    <li className='post-date'>July 28, 2025</li>
                    <li className='post-author'>
                      By <span className='text-primary'>Bikrom Roy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='mb-[15px] capitalize text-lg font-semibold text-[#17171d] hover:text-primary'>
                    <a href='#'>
                      How to Balance Work, Study, and Personal Life Effectively
                    </a>
                  </h4>
                </div>
                <div>
                  <p className='mb-3 text-base text-gray-500 font-normal'>
                    Managing time is challenging. Here’s how you can balance
                    work, study, and personal life without feeling overwhelmed.
                  </p>
                </div>
                <div className='pb-1'>
                  <a
                    className='text-primary flex items-center gap-1.5 text-[15px] font-semibold hover:text-[#17171d] '
                    href='#'
                  >
                    Read More <MdKeyboardDoubleArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className='blog-post bg-white rounded-[10px] p-[20px] mb-[30px] mt-[20px]'>
              <div className='wt-post-media mb-[40px] overflow-hidden mt-[-40px] rounded-[10px]'>
                <a href='#'>
                  <img
                    className='w-full'
                    src='/image/blogs/blog-5.jpg'
                    alt='images'
                  />
                </a>
              </div>
              <div className='relative z-10'>
                <div className='wt-post-meta relative mb-[20px]'>
                  <ul className='list-none mb-0'>
                    <li className='post-date'>August 03, 2025</li>
                    <li className='post-author'>
                      By <span className='text-primary'>Bikrom Roy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='mb-[15px] capitalize text-lg font-semibold text-[#17171d] hover:text-primary'>
                    <a href='#'>The Role of Soft Skills in Career Success</a>
                  </h4>
                </div>
                <div>
                  <p className='mb-3 text-base text-gray-500 font-normal'>
                    Technical knowledge is important, but soft skills like
                    communication, teamwork, and leadership set you apart in the
                    job market.
                  </p>
                </div>
                <div className='pb-1'>
                  <a
                    className='text-primary flex items-center gap-1.5 text-[15px] font-semibold hover:text-[#17171d] '
                    href='#'
                  >
                    Read More <MdKeyboardDoubleArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className='blog-post bg-white rounded-[10px] p-[20px] mb-[30px] mt-[20px]'>
              <div className='wt-post-media mb-[40px] overflow-hidden mt-[-40px] rounded-[10px]'>
                <a href='#'>
                  <img
                    className='w-full'
                    src='/image/blogs/blog-6.jpg'
                    alt='images'
                  />
                </a>
              </div>
              <div className='relative z-10'>
                <div className='wt-post-meta relative mb-[20px]'>
                  <ul className='list-none mb-0'>
                    <li className='post-date'>September 07, 2025</li>
                    <li className='post-author'>
                      By <span className='text-primary'>Bikrom Roy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='mb-[15px] capitalize text-lg font-semibold text-[#17171d] hover:text-primary'>
                    <a href='#'>
                      {' '}
                      Top Tech Skills Every Student Should Learn in 2025
                    </a>
                  </h4>
                </div>
                <div>
                  <p className='mb-3 text-base text-gray-500 font-normal'>
                    Stay ahead of the competition by learning the most in-demand
                    tech skills such as AI, Data Analytics, and Cloud Computing.
                  </p>
                </div>
                <div className='pb-1'>
                  <a
                    className='text-primary flex items-center gap-1.5 text-[15px] font-semibold hover:text-[#17171d] '
                    href='#'
                  >
                    Read More <MdKeyboardDoubleArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className='blog-post bg-white rounded-[10px] p-[20px] mb-[30px] mt-[20px]'>
              <div className='wt-post-media mb-[40px] overflow-hidden mt-[-40px] rounded-[10px]'>
                <a href='#'>
                  <img
                    className='w-full'
                    src='/image/blogs/blog-7.jpg'
                    alt='images'
                  />
                </a>
              </div>
              <div className='relative z-10'>
                <div className='wt-post-meta relative mb-[20px]'>
                  <ul className='list-none mb-0'>
                    <li className='post-date'>September 03, 2025</li>
                    <li className='post-author'>
                      By <span className='text-primary'>Bikrom Roy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='mb-[15px] capitalize text-lg font-semibold text-[#17171d] hover:text-primary'>
                    <a href='#'> Benefits of Learning Through Live Classes</a>
                  </h4>
                </div>
                <div>
                  <p className='mb-3 text-base text-gray-500 font-normal'>
                    Live sessions make learning interactive, engaging, and
                    real-time, allowing students to clear doubts instantly and
                    gain deeper insights.
                  </p>
                </div>
                <div className='pb-1'>
                  <a
                    className='text-primary flex items-center gap-1.5 text-[15px] font-semibold hover:text-[#17171d] '
                    href='#'
                  >
                    Read More <MdKeyboardDoubleArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className='blog-post bg-white rounded-[10px] p-[20px] mb-[30px] mt-[20px]'>
              <div className='wt-post-media mb-[40px] overflow-hidden mt-[-40px] rounded-[10px]'>
                <a href='#'>
                  <img
                    className='w-full'
                    src='/image/blogs/blog-8.jpg'
                    alt='images'
                  />
                </a>
              </div>
              <div className='relative z-10'>
                <div className='wt-post-meta relative mb-[20px]'>
                  <ul className='list-none mb-0'>
                    <li className='post-date'>July 12, 2025</li>
                    <li className='post-author'>
                      By <span className='text-primary'>Bikrom Roy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='mb-[15px] capitalize text-lg font-semibold text-[#17171d] hover:text-primary'>
                    <a href='#'>
                      {' '}
                      How Continuous Learning Shapes Your Career Growth
                    </a>
                  </h4>
                </div>
                <div>
                  <p className='mb-3 text-base text-gray-500 font-normal'>
                    Lifelong learning is the key to staying relevant in today’s
                    fast-changing world. Discover how continuous learning helps
                    in career advancement.
                  </p>
                </div>
                <div className='pb-1'>
                  <a
                    className='text-primary flex items-center gap-1.5 text-[15px] font-semibold hover:text-[#17171d] '
                    href='#'
                  >
                    Read More <MdKeyboardDoubleArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className='blog-post bg-white rounded-[10px] p-[20px] mb-[30px] mt-[20px]'>
              <div className='wt-post-media mb-[40px] overflow-hidden mt-[-40px] rounded-[10px]'>
                <a href='#'>
                  <img
                    className='w-full'
                    src='/image/blogs/blog-9.jpg'
                    alt='images'
                  />
                </a>
              </div>
              <div className='relative z-10'>
                <div className='wt-post-meta relative mb-[20px]'>
                  <ul className='list-none mb-0'>
                    <li className='post-date'>July 12, 2025</li>
                    <li className='post-author'>
                      By <span className='text-primary'>Bikrom Roy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='mb-[15px] capitalize text-lg font-semibold text-[#17171d] hover:text-primary'>
                    <a href='#'>
                      Importance of Practical Projects in Skill Development
                    </a>
                  </h4>
                </div>
                <div>
                  <p className='mb-3 text-base text-gray-500 font-normal'>
                    Hands-on projects bridge the gap between theory and
                    practice, helping students gain real-world experience and
                    industry-ready skills.
                  </p>
                </div>
                <div className='pb-1'>
                  <a
                    className='text-primary flex items-center gap-1.5 text-[15px] font-semibold hover:text-[#17171d] '
                    href='#'
                  >
                    Read More <MdKeyboardDoubleArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
