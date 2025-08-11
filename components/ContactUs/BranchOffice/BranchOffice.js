import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaFax } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';
import { TbDeviceLandlinePhone } from 'react-icons/tb';
import { TfiMapAlt } from 'react-icons/tfi';

const BranchOffice = () => {
  return (
    <section className='pb-[40px] pt-[100px] bg-linear-to-t from-white/55 to-transparent'>
      <div className='mx-auto px-4 sm:px-6 container'>
        <SectionTitle
          title='Branch office contact information'
          subtitle='Branch Offices'
          text='Check out our branch offices around the world, you can connect with one near you.'
        />
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='relative  overflow-hidden rounded-[10px] '>
            <a
              target='_blank'
              href='https://www.google.com/maps?ll=23.750716,90.386776&z=18&t=m&hl=en-US&gl=BD&mapclient=embed&cid=1018288364242359295'
              className='group'
            >
              <img
                src='/image/location/BD-CITY.png'
                alt='location'
                className='h-full w-full object-cover transition duration-500 group-hover:scale-125'
              />
            </a>
            <a
              target='_blank'
              href='https://www.google.com/maps?ll=23.750716,90.386776&z=18&t=m&hl=en-US&gl=BD&mapclient=embed&cid=1018288364242359295'
            >
              <div className='absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2 px-5 ltr:right-4 rtl:left-4'>
                <button type='button' className='group'>
                  <TfiMapAlt size={18} className='text-[#000000]' />
                </button>
                <span className='text-black capitalize font-medium'>map</span>
              </div>
            </a>
            <div className='absolute inset-x-0 bottom-0 w-full'>
              <div
                className=' p-4 backdrop-blur-2xl'
                style={{
                  backgroundImage:
                    'linear-gradient(358.68deg, #000 6.57%, transparent 100.85%)',
                }}
              >
                <div className='mb-4'>
                  <h5 className='text-[18px] leading-7 font-semibold text-white  transition-all duration-300 ease-in-out mb-1'>
                    Bangladesh Office
                  </h5>
                  <p className='text-sm text-white opacity-85'>
                    151/7, Good Luck Center (7th & 8th) Floor, Green Road, Dhaka
                    - 1205, Bangladesh
                  </p>
                </div>
                <div className='flex items-center gap-3 mt-[15px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5'>
                    <BiSolidPhoneCall className='text-white' />

                    <span className='text-white text-[14px] font-medium'>
                      +880 1799446655
                    </span>
                  </div>
                  <div className='flex items-center gap-1.5 '>
                    <TbDeviceLandlinePhone className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      +880-966-677-9191
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-3 mt-[10px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5'>
                    <FaFax className='text-white' />

                    <span className='text-white text-[14px] font-medium'>
                      (571)766-2629
                    </span>
                  </div>
                  <div className='flex items-center gap-1.5 '>
                    <MdMarkEmailRead className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      info@peoplentech.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative  overflow-hidden rounded-[10px] '>
            <a
              target='_blank'
              href='https://www.google.com/maps?ll=23.750716,90.386776&z=18&t=m&hl=en-US&gl=BD&mapclient=embed&cid=1018288364242359295'
              className='group'
            >
              <img
                src='/image/location/canada.jpg'
                alt='location'
                className='h-full w-full object-cover transition duration-500 group-hover:scale-125'
              />
            </a>
            <a
              target='_blank'
              href='https://www.google.com/maps?ll=23.750716,90.386776&z=18&t=m&hl=en-US&gl=BD&mapclient=embed&cid=1018288364242359295'
            >
              <div className='absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2 px-5 ltr:right-4 rtl:left-4'>
                <button type='button' className='group'>
                  <TfiMapAlt size={18} className='text-[#000000]' />
                </button>
                <span className='text-black capitalize font-medium'>map</span>
              </div>
            </a>
            <div className='absolute inset-x-0 bottom-0 w-full'>
              <div
                className=' p-4 backdrop-blur-2xl'
                style={{
                  backgroundImage:
                    'linear-gradient(358.68deg, #000 6.57%, transparent 100.85%)',
                }}
              >
                <div className='mb-4'>
                  <h5 className='text-[18px] leading-7 font-semibold text-white  transition-all duration-300 ease-in-out mb-1'>
                    Canada Office
                  </h5>
                  <p className='text-sm text-white opacity-85'>
                    502 Zeller Drive Kitchener ON N2A 0B3 Canada
                  </p>
                </div>
                <div className='flex items-center gap-3 mt-[15px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5'>
                    <BiSolidPhoneCall className='text-white' />

                    <span className='text-white text-[14px] font-medium'>
                      703-880-6726
                    </span>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <FaFax className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      (571)766-2629
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-3 mt-[10px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5 '>
                    <MdMarkEmailRead className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      info@peoplentech.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative  overflow-hidden rounded-[10px] '>
            <a
              target='_blank'
              href='https://www.google.com/maps?ll=39.961795,-75.256974&z=16&t=m&hl=en-US&gl=BD&mapclient=embed&q=6796+Market+St+Upper+Darby,+PA+19082+USA'
              className='group'
            >
              <img
                src='/image/location/Pennsylvania.jpg'
                alt='location'
                className='h-full w-full object-cover transition duration-500 group-hover:scale-125'
              />
            </a>
            <a
              target='_blank'
              href='https://www.google.com/maps?ll=39.961795,-75.256974&z=16&t=m&hl=en-US&gl=BD&mapclient=embed&q=6796+Market+St+Upper+Darby,+PA+19082+USA'
            >
              <div className='absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2 px-5 ltr:right-4 rtl:left-4'>
                <button type='button' className='group'>
                  <TfiMapAlt size={18} className='text-[#000000]' />
                </button>
                <span className='text-black capitalize font-medium'>map</span>
              </div>
            </a>
            <div className='absolute inset-x-0 bottom-0 w-full'>
              <div
                className=' p-4 backdrop-blur-2xl'
                style={{
                  backgroundImage:
                    'linear-gradient(358.68deg, #000 6.57%, transparent 100.85%)',
                }}
              >
                <div className='mb-4'>
                  <h5 className='text-[18px] leading-7 font-semibold text-white  transition-all duration-300 ease-in-out mb-1'>
                    Pennsylvania (Upper Darby) Office
                  </h5>
                  <p className='text-sm text-white opacity-85'>
                    6796 Market St, 2nd FL, Upper Darby, PA 19082
                  </p>
                </div>
                <div className='flex items-center gap-3 mt-[15px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5'>
                    <BiSolidPhoneCall className='text-white' />

                    <span className='text-white text-[14px] font-medium'>
                      1-855-562-7448
                    </span>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <FaFax className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      +1 571-766-2629
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-3 mt-[10px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5 '>
                    <MdMarkEmailRead className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      info@peoplentech.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative  overflow-hidden rounded-[10px] '>
            <a
              target='_blank'
              href='https://www.google.com/maps/place/2709+Fairmount+Ave,+Atlantic+City,+NJ+08401/@39.358447,-74.446831,20z/data=!4m5!3m4!1s0x89c0ee60b2e4eb57:0x19520b2a2f0a598a!8m2!3d39.358447!4d-74.446831?hl=en-US'
              className='group'
            >
              <img
                src='/image/location/Jersey.jpg'
                alt='location'
                className='h-full w-full object-cover transition duration-500 group-hover:scale-125'
              />
            </a>
            <a
              target='_blank'
              href='https://www.google.com/maps/place/2709+Fairmount+Ave,+Atlantic+City,+NJ+08401/@39.358447,-74.446831,20z/data=!4m5!3m4!1s0x89c0ee60b2e4eb57:0x19520b2a2f0a598a!8m2!3d39.358447!4d-74.446831?hl=en-US'
            >
              <div className='absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2 px-5 ltr:right-4 rtl:left-4'>
                <button type='button' className='group'>
                  <TfiMapAlt size={18} className='text-[#000000]' />
                </button>
                <span className='text-black capitalize font-medium'>map</span>
              </div>
            </a>
            <div className='absolute inset-x-0 bottom-0 w-full'>
              <div
                className=' p-4 backdrop-blur-2xl'
                style={{
                  backgroundImage:
                    'linear-gradient(358.68deg, #000 6.57%, transparent 100.85%)',
                }}
              >
                <div className='mb-4'>
                  <h5 className='text-[18px] leading-7 font-semibold text-white  transition-all duration-300 ease-in-out mb-1'>
                    New Jersey Office
                  </h5>
                  <p className='text-sm text-white opacity-85'>
                    2709 Fairmount Ave 2nd Floor Atlantic City, NJ 08401
                  </p>
                </div>
                <div className='flex items-center gap-3 mt-[15px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5'>
                    <BiSolidPhoneCall className='text-white' />

                    <span className='text-white text-[14px] font-medium'>
                      1-855-562-7448
                    </span>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <FaFax className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      +1 571-766-2629
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-3 mt-[10px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5 '>
                    <MdMarkEmailRead className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      info@peoplentech.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative  overflow-hidden rounded-[10px] '>
            <a
              target='_blank'
              href='https://www.google.com/maps/place//@40.7608387,-73.923527,18z?hl=en-US&entry=ttu'
              className='group'
            >
              <img
                src='/image/location/York.jpg'
                alt='location'
                className='h-full w-full object-cover transition duration-500 group-hover:scale-125'
              />
            </a>
            <a
              target='_blank'
              href='https://www.google.com/maps/place//@40.7608387,-73.923527,18z?hl=en-US&entry=ttu'
            >
              <div className='absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2 px-5 ltr:right-4 rtl:left-4'>
                <button type='button' className='group'>
                  <TfiMapAlt size={18} className='text-[#000000]' />
                </button>
                <span className='text-black capitalize font-medium'>map</span>
              </div>
            </a>
            <div className='absolute inset-x-0 bottom-0 w-full'>
              <div
                className=' p-4 backdrop-blur-2xl'
                style={{
                  backgroundImage:
                    'linear-gradient(358.68deg, #000 6.57%, transparent 100.85%)',
                }}
              >
                <div className='mb-4'>
                  <h5 className='text-[18px] leading-7 font-semibold text-white  transition-all duration-300 ease-in-out mb-1'>
                    New York Office
                  </h5>
                  <p className='text-sm text-white opacity-85'>
                    31-10 37th Avenue, Suite #300 Long Island City, NY 11101
                  </p>
                </div>
                <div className='flex items-center gap-3 mt-[15px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5'>
                    <BiSolidPhoneCall className='text-white' />

                    <span className='text-white text-[14px] font-medium'>
                      1-855-562-7448
                    </span>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <FaFax className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      +1 571-766-2629
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-3 mt-[10px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5 '>
                    <MdMarkEmailRead className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      info@peoplentech.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative  overflow-hidden rounded-[10px] '>
            <a
              target='_blank'
              href='https://www.google.com/maps/place/PeopleNTech+Institute+of+Information+Technology/@38.926833,-77.247034,16z/data=!4m6!3m5!1s0x89b64a5c31c36521:0xcc6b7fdf606a20ae!8m2!3d38.9151944!4d-77.2273128!16s%2Fg%2F11bv3mnjfq?hl=en-US&entry=ttu'
              className='group'
            >
              <img
                src='/image/location/Virginia.jpg'
                alt='location'
                className='h-full w-full object-cover transition duration-500 group-hover:scale-125'
              />
            </a>
            <a
              target='_blank'
              href='https://www.google.com/maps/place/PeopleNTech+Institute+of+Information+Technology/@38.926833,-77.247034,16z/data=!4m6!3m5!1s0x89b64a5c31c36521:0xcc6b7fdf606a20ae!8m2!3d38.9151944!4d-77.2273128!16s%2Fg%2F11bv3mnjfq?hl=en-US&entry=ttu'
            >
              <div className='absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2 px-5 ltr:right-4 rtl:left-4'>
                <button type='button' className='group'>
                  <TfiMapAlt size={18} className='text-[#000000]' />
                </button>
                <span className='text-black capitalize font-medium'>map</span>
              </div>
            </a>
            <div className='absolute inset-x-0 bottom-0 w-full'>
              <div
                className=' p-4 backdrop-blur-2xl'
                style={{
                  backgroundImage:
                    'linear-gradient(358.68deg, #000 6.57%, transparent 100.85%)',
                }}
              >
                <div className='mb-4'>
                  <h5 className='text-[18px] leading-7 font-semibold text-white  transition-all duration-300 ease-in-out mb-1'>
                    Virginia Office
                  </h5>
                  <p className='text-sm text-white opacity-85'>
                    8133 Leesburg Pike, 2nd floor, Vienna, VA 22182
                  </p>
                </div>
                <div className='flex items-center gap-3 mt-[15px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5'>
                    <BiSolidPhoneCall className='text-white' />

                    <span className='text-white text-[14px] font-medium'>
                      1-855-562-7448
                    </span>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <FaFax className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      +1 571-766-2629
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-3 mt-[10px] justify-between opacity-80'>
                  <div className='flex items-center gap-1.5 '>
                    <MdMarkEmailRead className='text-white' />
                    <span className='text-white text-[14px] font-medium'>
                      info@peoplentech.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchOffice;
