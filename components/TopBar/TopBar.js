import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io5';
import { RiTwitterXLine, RiWechatFill } from 'react-icons/ri';

const TopBar = () => {
  return (
    <div className='bg-[#1F2C30] py-3'>
      <div className='px-4 md:px-24 lg:px-14 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex items-center gap-1 sm:gap-5 flex-wrap justify-center'>
            <div className='text-white flex items-center gap-2.5'>
              <FaPhoneVolume />
              <a className='font-medium text-[15px]' href='tel:09613337448'>
                +880961-333-7448 / 01799-446655
              </a>
            </div>
            <div className='text-white flex items-center gap-2.5'>
              <RiWechatFill />
              <a
                className='font-medium text-[15px]'
                href='mailto:info@peoplentech.com.bd'
              >
                info@peoplentech.com.bd
              </a>
            </div>
          </div>
          <div className='text-white hidden sm:flex items-center gap-5'>
            <span className='font-medium'>Follow us:</span>
            <div className='flex items-center gap-2.5'>
              <a
                target='_blank'
                href='https://www.facebook.com/peoplentechbd'
                className='text-white hover:text-primary'
              >
                <FaFacebook />
              </a>
              <a
                target='_blank'
                href='https://x.com/peoplentech1?lang=en'
                className='text-white hover:text-primary'
              >
                <RiTwitterXLine />
              </a>
              <a
                target='_blank'
                href='https://www.linkedin.com/company/peoplentech-institute/'
                className='text-white hover:text-primary'
              >
                <FaLinkedin />
              </a>
              <a
                target='_blank'
                href='https://www.youtube.com/@PeopleNTechBangladesh'
                className='text-white hover:text-primary'
              >
                <IoLogoYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
