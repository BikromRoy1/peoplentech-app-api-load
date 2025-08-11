import { API_BASE_URL } from '@/app/lib/config';
import PageBanner from '@/components/PageBanner/PageBanner';
import Image from 'next/image';
import { FaTrophy, FaUserGraduate } from 'react-icons/fa';
import { FaFileWord } from 'react-icons/fa6';
import { IoPeopleSharp, IoPlay } from 'react-icons/io5';
import { MdEmail, MdPhoneInTalk } from 'react-icons/md';
import './FacultyDetails.css';

async function fetchTeacher(id) {
  const res = await fetch(`${API_BASE_URL}/teacher/profile/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch teacher details');
  return res.json();
}

// Dynamic metadata export
export async function generateMetadata(props) {
  const params = await props.params;
  const id = params.id;

  const teacher = await fetchTeacher(id);
  const teacherName = teacher.data?.name || 'Teacher Details';

  return {
    title: `${teacherName} - PeopleNTech`,
    description: `Learn more about ${teacherName}, one of our expert mentors at PeopleNTech.`,
  };
}

const FacultyDetails = async ({ params }) => {
  const resolvedParams = await params;
  const teacher = await fetchTeacher(resolvedParams?.id);
  const teacherData = teacher?.data;

  // Fallback image if no image in API response
  const imageUrl = teacherData?.image?.trim() || '/image/Teachers/default.jpg';

  // Split expertise string into an array
  const expertiseString = teacherData?.expertise || '';
  const expertiseArray = expertiseString.split(',').map((item) => item.trim());

  // Education data
  const educations = teacherData?.educations || [];

  // citification data
  const certifications = teacherData?.certificates || [];

  return (
    <div>
      <PageBanner title={teacherData?.name} subtitle='Our Mentors' />
      <div className='pb-[60px] pt-[60px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-7 md:gap-10'>
            <div className='md:col-span-4'>
              <div className="bg-[url('/image/Teachers/candidate-bg.jpg')] bg-cover rounded-[15px] bg-center flex justify-center items-center px-8 py-12">
                <div>
                  <div className='border-[7px] border-[#f3f4f6] w-[200px] h-[200px] mx-auto rounded-[15px] overflow-hidden bg-white'>
                    <Image
                      width={200}
                      height={200}
                      className='rounded-[10px] object-cover object-center'
                      src={imageUrl}
                      alt={teacherData?.name}
                    />
                  </div>
                  <div className='text-center mt-4 relative'>
                    <h4 className='text-[20px] text-white capitalize leading-7 font-semibold mb-[3px]'>
                      {teacherData?.name
                        ? teacherData.name
                        : 'Name not available'}
                    </h4>
                    <p className='text-[15px] leading-6 text-white font-medium opacity-90'>
                      {teacherData?.designation
                        ? teacherData.designation
                        : 'Designation not available'}
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <h2 className='mb-5 text-2xl font-bold capitalize leading-[30px] text-[#17171d]'>
                  About Me
                </h2>
                <p className='text-gray-500 text-[15px] mb-4 font-medium'>
                  {teacherData?.short_bio
                    ? teacherData.short_bio
                    : 'About me not available'}
                </p>
              </div>
              <div className='mt-10'>
                <h2 className='mb-5 text-2xl font-bold capitalize leading-[30px] text-[#17171d]'>
                  Specialized Area
                </h2>
                <div className='border border-[#ddd] rounded-[10px] p-8'>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
                    <div>
                      <div className='flex items-center gap-3'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Corporate & Brand Design
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Marketing Material Design
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Packaging Design
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Visual Design
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-3'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Story Boarding
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Packaging & Label Design
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Brand Identity Design
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Marketing & Advertising
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <h2 className='mb-5 text-2xl font-bold capitalize leading-[30px] text-[#17171d]'>
                  Certifications
                </h2>
                <div className='border border-[#ddd] rounded-[10px] p-8'>
                  {certifications.length === 0 && (
                    <p className='text-gray-500 italic'>
                      No certifications information available.
                    </p>
                  )}

                  {certifications.map((cer, index) => (
                    <div
                      key={cer.id || index}
                      className={`flex items-center justify-start gap-4 ${
                        index !== 0 ? 'mt-4' : ''
                      }`}
                    >
                      <div className='flex items-center justify-center bg-[#cbfbf1] w-12 h-12 rounded-lg'>
                        <FaFileWord size={24} className='text-[#009689]' />
                      </div>
                      <div>
                        <h5 className='text-[17px] font-semibold mb-0'>
                          {cer.title || 'Degree info not available'}
                        </h5>
                        <p className='text-gray-700 text-[14px]'>
                          {cer.institute || 'institute info not available'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='mt-10'>
                <h2 className='mb-5 text-2xl font-bold capitalize leading-[30px] text-[#17171d]'>
                  Education Qualification
                </h2>
                <div className='border border-[#ddd] rounded-[10px] p-8'>
                  {educations.length === 0 && (
                    <p className='text-gray-500 italic'>
                      No education information available.
                    </p>
                  )}

                  {educations.map((edu, index) => (
                    <div
                      key={edu.id || index}
                      className={`flex items-center justify-start gap-4 ${
                        index !== 0 ? 'mt-4' : ''
                      }`}
                    >
                      <div className='flex items-center justify-center bg-[#ffe2e2] w-12 h-12 rounded-lg'>
                        <FaUserGraduate size={24} className='text-[#e7000b]' />
                      </div>
                      <div>
                        <h5 className='text-[17px] font-semibold mb-0'>
                          {edu.degree || 'Degree info not available'}
                        </h5>
                        <p className='text-gray-700 text-[14px]'>
                          {edu.year_of_passing
                            ? `Passed in ${edu.year_of_passing}`
                            : ''}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='md:col-span-3'>
              <div>
                <div className='bg-white card-shadow  rounded-xl p-7'>
                  <h2 className='mb-6 text-xl font-bold capitalize leading-[30px] text-[#17171d]'>
                    General Information
                  </h2>
                  <div className='flex items-center justify-start gap-4'>
                    <div className='flex items-center justify-center bg-[#FFF2E7] w-12 h-12 rounded-lg'>
                      <FaTrophy size={24} className='text-[#FD7E14]' />
                    </div>
                    <div>
                      <h5 className='text-[20px] font-bold mb-0'>
                        {teacherData?.total_experience
                          ? teacherData.total_experience
                          : 'Not Available'}
                        +
                      </h5>
                      <p className='text-gray-700 text-[15px]'>
                        Training Experience
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-4'>
                    <div className='flex items-center justify-center bg-[#E9E8F8] w-12 h-12 rounded-lg'>
                      <IoPeopleSharp size={24} className='text-[#6F42C1]' />
                    </div>
                    <div>
                      <h5 className='text-[20px] font-bold mb-0'>
                        {teacherData?.students_trained
                          ? teacherData.students_trained
                          : 'Not Available'}
                        +
                      </h5>
                      <p className='text-gray-700 text-[15px]'>
                        Total Students
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-4'>
                    <div className='flex items-center justify-center bg-[#E8F3EE] w-12 h-12 rounded-lg'>
                      <IoPlay size={24} className='text-[#198754]' />
                    </div>
                    <div>
                      <h5 className='text-[20px] font-bold mb-0'>
                        {teacherData?.total_courses
                          ? teacherData.total_courses
                          : 'Not Available'}
                        +
                      </h5>
                      <p className='text-gray-700 text-[15px]'>Total Courses</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-4'>
                    <div className='flex items-center justify-center bg-[#dff2fe] w-12 h-12 rounded-lg'>
                      <MdEmail size={24} className='text-[#0084d1]' />
                    </div>
                    <div>
                      <h5 className='text-[20px] font-bold mb-0'>Email</h5>
                      <p className='text-gray-700 text-[15px]'>
                        {teacherData?.email ? teacherData.email : 'Not Email'}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-4'>
                    <div className='flex items-center justify-center bg-[#fae8ff] w-12 h-12 rounded-lg'>
                      <MdPhoneInTalk size={24} className='text-[#a800b7]' />
                    </div>
                    <div>
                      <h5 className='text-[20px] font-bold mb-0'>Phone</h5>
                      <p className='text-gray-700 text-[15px]'>
                        {teacherData?.phone ? teacherData.phone : 'Not Phone'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-9'>
                <div className='bg-white card-shadow  rounded-xl p-6'>
                  <h2 className='mb-4 text-xl font-bold capitalize leading-[30px] text-[#17171d]'>
                    Skills
                  </h2>
                  {teacherData?.expertise ? (
                    <div className='flex flex-wrap items-center gap-3'>
                      {teacherData.expertise.split(',').map((skill, index) => (
                        <a
                          key={index}
                          href='#'
                          className='py-[5px] hover:bg-primary hover:text-white px-[15px] capitalize font-semibold inline-block text-primary rounded-[8px] text-[14px] bg-[#f0f6fe] transition-all duration-300 ease-in-out'
                        >
                          {skill.trim()}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className='text-gray-500 italic'>
                      No expertise information available.
                    </p>
                  )}
                </div>
              </div>
              <div className='mt-9'>
                <div className='bg-white card-shadow  rounded-xl p-6'>
                  <h2 className='mb-4 text-xl font-bold capitalize leading-[30px] text-[#17171d]'>
                    Work Place
                  </h2>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-1.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-2.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-3.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-4.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-5.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-6.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;
