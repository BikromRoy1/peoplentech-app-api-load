import PageBanner from '@/components/PageBanner/PageBanner';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Image from 'next/image';
import '../../components/Home/Featured/Featured.css';

const Facilities = () => {
  return (
    <div>
      <PageBanner
        title='Benefits of enrolling in our courses'
        subtitle='Our Facilities'
      />
      <div className='pb-[100px] pt-[100px] featured-background'>
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
            title='You will Get From PeopleNTech?'
            subtitle='Our Facilities'
          />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-1.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    Industry Focused Live Course
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                Every piece of our content is developed in collaboration with
                leading industry experts, ensuring direct support, guidance, and
                feedback. By participating in industry-centric live courses, our
                goal is to cultivate professionalism and expertise among our
                students in their chosen field of study.
              </p>
            </div>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-2.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    Job and Internship Opportunities
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                Over the past 14 years, our recruitment team has consistently
                achieved impressive job placement results for our students.
                Currently, the PeopleNTech job placement team in Bangladesh is
                actively assisting students in securing positions at major
                companies in the country.
              </p>
            </div>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-3.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    Lifetime Support
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                At the conclusion of the course, we offer lifelong support to
                our trainees. They can engage in real-time chat with our online
                team or visit our institution for assistance whenever needed.
              </p>
            </div>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-4.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    Support For Freelance Work
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                We offer comprehensive guidance and assistance to trainees
                interested in pursuing freelance opportunities post-course
                completion. Students can access support directly from the
                institution at any time for their needs.
              </p>
            </div>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-5.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    Career and Interview Preparation
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                Our trainees will get direct support for your CV, LinkedIn
                profile, GitHub profile and job interview at the end of the
                course.
              </p>
            </div>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-6.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    Guidance Directly From Mentors
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                If any issues arise during the course, solutions are available
                from our seasoned mentors solely during designated support
                hours.
              </p>
            </div>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-6.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    Projects and Assignments
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                Do practice projects with what you are learning, hone your
                skills. Market standard practical projects and assignments will
                be done, which you can add to your portfolio.
              </p>
            </div>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-6.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    24/7 online support
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                Basically, we provide 24/7 online support considering the
                convenience of our students and those who have started
                freelancing or new jobs in various sectors after receiving
                training from us.
              </p>
            </div>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-6.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    Opportunity to practice in the lab
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                We have separate labs so that your regular practice is not
                interrupted during the course. You can practice your work
                anytime, as long as you want in the lab.
              </p>
            </div>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-6.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    Career Advancement Program
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                The Career Advancement Program is intended to maintain the
                relationship of the students with PeopleTech Institute of IT not
                only during the course but also after the course under close
                supervision to reach the specific goals.
              </p>
            </div>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-6.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    Verified Certificate
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                At the end of the course you will be graded on your performance.
                Accordingly you will get certificate from PeopleTech Institute
                of IT.
              </p>
            </div>
            <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
              <div className='flex mb-[30px] items-center gap-4'>
                <div>
                  <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover'
                      src='/image/icons/feature-6.svg'
                      alt='icons'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                    Recorded Class video
                  </h3>
                </div>
              </div>
              <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
                Many times students do not understand some topics in the class,
                for them there is the benefit of class videos. So now students
                can take class with peace of mind. You can solve your problem
                yourself by watching the video of any difficulty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
