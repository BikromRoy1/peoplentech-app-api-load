'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { FaFacebookF, FaQuoteRight } from 'react-icons/fa';
import { FaLinkedinIn, FaRegClone, FaRegFileLines } from 'react-icons/fa6';
import { LiaCertificateSolid, LiaToolsSolid } from 'react-icons/lia';
import { LuBookAudio } from 'react-icons/lu';
import {
  MdOutlineOndemandVideo,
  MdOutlineSlowMotionVideo,
} from 'react-icons/md';
import { PiVideo } from 'react-icons/pi';
import { RiTimerFlashLine, RiTimerLine } from 'react-icons/ri';
import { SiReaddotcv } from 'react-icons/si';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import './CourseDetails.css';

const CourseDetails = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <section>
      <section className='pb-[90px] pt-[90px] page-banner-bg bg-[#020617] relative'>
        <div
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(4,169,255,0.35), transparent)`,
          }}
        />
        <div className='mx-auto px-4 sm:px-6 container lg:px-8 relative'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-7 md:items-center md:gap-9'>
            <div className='md:col-span-5'>
              <div>
                <ul className='mx-auto text-gray-500 text-sm lg:text-sm'>
                  <li className='inline-flex items-center'>
                    <Link
                      className='hover:text-primary text-[#ced4df] font-medium'
                      href='/'
                    >
                      Home
                    </Link>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='h-5 w-auto text-gray-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </li>
                  <li className='inline-flex items-center'>
                    <Link
                      className='hover:text-primary text-[#ced4df] font-medium'
                      href='/'
                    >
                      Course
                    </Link>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='h-5 w-auto text-gray-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </li>
                  <li className='inline-flex items-center text-gray-400'>
                    <span className='capitalize'>
                      Adobe Premiere Pro Masterclass - Video Editing
                    </span>
                  </li>
                </ul>
                <h4 className='text-2xl lg:text-4xl font-semibold mt-4 capitalize text-white'>
                  Adobe Premiere Pro Masterclass - Video Editing
                </h4>
                <p className='text-gray-300 mt-4 text-[16px] leading-7 font-medium'>
                  Are you passionate about software testing and quality
                  assurance? Our course on software testing & quality assurance
                  can be your best choice. The Software Testing and Quality
                  Assurance training course at PeopleNTech provides participants
                  with comprehensive insights into the principles and practices
                  of software testing. Covering a range of topics from testing
                  methodologies to quality assurance processes, this course
                  equips individuals with the skills needed to ensure the
                  delivery of high-quality software products.
                </p>
                <div className='flex items-center gap-4 mt-6 flex-wrap'>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <FaRegFileLines className='text-primary' />
                    <span className='text-white font-semibold text-[15px]'>
                      Class - 50
                    </span>
                  </div>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <RiTimerLine className='text-primary' />
                    <span className='text-white font-semibold text-[15px]'>
                      Duration - 6 Month
                    </span>
                  </div>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <FaRegClone className='text-primary' />
                    <span className='text-white font-semibold text-[15px]'>
                      Projects - 04+
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-2 text-white'>
              <div className='border-[7px] border-[#f3f4f6] rounded-[15px] overflow-hidden bg-white'>
                <img
                  className='w-full rounded-[10px]'
                  src='/image/course-details.jpg'
                  alt='image'
                />
                <div className='p-4'>
                  <h3 className='mt-1 mb-3'>
                    <span className='text-secondary font-bold text-[23px]'>
                      ৳ 30,000
                    </span>
                    <del className='ml-3 font-semibold text-[17px] text-neutral-600'>
                      ৳ 40,000
                    </del>
                  </h3>
                  <button className='bg-primary rounded-md cursor-pointer px-8 py-2 whitespace-nowrap md:w-full text-white flex items-center justify-center text-md font-semibold capitalize'>
                    Register for Discount
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More details */}
      <div className='pb-[60px] pt-[60px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-7 md:gap-9'>
            <div className='md:col-span-5'>
              <div className='relative'>
                <div className='border border-[#dee2e6] rounded-xl p-6'>
                  <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
                    Details About the course
                  </h2>

                  {/* Always visible content */}
                  <div>
                    <p className='text-gray-700 text-[15px] mb-4 font-medium'>
                      This Oracle Database Administration course provides
                      students with the knowledge and skills to capitalize on
                      their skills and experience as a DBA to manage an Oracle
                      Server system.
                    </p>
                    <p className='text-gray-700 text-[15px] mb-4 font-medium'>
                      This Oracle DBA training course is an intensive hands-on
                      course designed to provide Oracle professionals with an
                      in-depth understanding of the DBA features of Oracle,
                      specific Oracle concepts and knowledge required for the
                      OCP exam, and tips and techniques for passing the Oracle
                      OCP exam on your first attempt.
                    </p>
                    <p className='text-gray-700 text-[15px] mb-4 font-medium'>
                      Broad in scope, this course covers all of the Oracle
                      Database Administration topics including SGA instance
                      management, file & tablespace management, user
                      administration & security, and table & index management.
                    </p>
                    <p className='text-gray-700 text-[15px] mb-4 font-medium'>
                      Hands-on exercises are used to demonstrate each feature,
                      and the student will gain first-hand experience with the
                      key Oracle DBA concepts required to pass the Oracle OCP
                      exam. In addition, this course provides sample OCP exam
                      questions and an opportunity to assess your overall
                      knowledge of Oracle DBA concepts.
                    </p>
                  </div>
                  {/* Hidden content - show only if showFull is true */}
                  {showFull && (
                    <div>
                      <p className='text-gray-700 text-[15px] mb-4 font-medium'>
                        This course is intended for those who want to work as
                        Database Administrators. This course covers Oracle
                        Database Administration DBA 12C/19C.
                      </p>
                      <p className='text-gray-700 text-[15px] mb-4 font-medium'>
                        Oracle Database Administration (DBA) is the management
                        and maintenance of Oracle database systems. DBAs use
                        Oracles database software to store and organize data and
                        ensure that it is secure and accessible. You’ll develop
                        your skills by learning all of these from our best
                        oracle database administration course in Bangladesh
                      </p>
                    </div>
                  )}
                  <div className='text-center absolute bottom-[-17px] left-1/2 flex translate-x-[-50%] items-center'>
                    <button
                      onClick={() => setShowFull(!showFull)}
                      className='font-medium text-sm text-gray-500 bg-white hover:bg-primary hover:text-white px-5 py-[6px] rounded-full transition shadow-[0px_0px_17.0361px_#E7EAF7] cursor-pointer'
                    >
                      {showFull ? 'Summarize' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <div className='border border-[#dee2e6] rounded-xl p-6'>
                  <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
                    Course Modules
                  </h2>
                  <div className='collapse collapse-plus bg-base-100 border border-[#e2e8ec] rounded-lg'>
                    <input type='radio' name='my-accordion-3' defaultChecked />
                    <div className='collapse-title font-semibold'>
                      Module-01 : Introduction to Website Development?
                    </div>
                    <div className='collapse-content text-sm'>
                      <ul>
                        <li className='border-b border-b-[#e5e8ef] border-dashed pb-3'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <div>
                                <PiVideo className='w-[22px] h-[22px] text-neutral-600' />
                              </div>
                              <p className='text-[16px] font-medium text-neutral-600'>
                                What is web development?
                              </p>
                            </div>
                            <div className='w-[30px] h-[30px] bg-[#f1f4f9] text-[#00305c] rounded-full flex items-center justify-center'>
                              <BsFillShieldLockFill className='text-[#00305c] opacity-70 text-[18px]' />
                            </div>
                          </div>
                        </li>
                        <li className='border-b border-b-[#e5e8ef] border-dashed py-3'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <div>
                                <PiVideo className='w-[22px] h-[22px] text-neutral-600' />
                              </div>
                              <p className='text-[16px] font-medium text-neutral-600'>
                                How to connect web application with database on
                                the web
                              </p>
                            </div>
                            <div className='w-[30px] h-[30px] bg-[#f1f4f9] text-[#00305c] rounded-full flex items-center justify-center'>
                              <BsFillShieldLockFill className='text-[#00305c] opacity-70 text-[18px]' />
                            </div>
                          </div>
                        </li>
                        <li className='py-3'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <div>
                                <PiVideo className='w-[22px] h-[22px] text-neutral-600' />
                              </div>
                              <p className='text-[16px] font-medium text-neutral-600'>
                                Basics of Web Development
                              </p>
                            </div>
                            <div className='w-[30px] h-[30px] bg-[#f1f4f9] text-[#00305c] rounded-full flex items-center justify-center'>
                              <BsFillShieldLockFill className='text-[#00305c] opacity-70 text-[18px]' />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='collapse collapse-plus bg-base-100 border border-[#e2e8ec] rounded-lg mt-4'>
                    <input type='radio' name='my-accordion-3' />
                    <div className='collapse-title font-semibold'>
                      Module-02 : Let&apos;s Dive into MySQL Database?
                    </div>
                    <div className='collapse-content text-sm'>
                      <ul>
                        <li className='border-b border-b-[#e5e8ef] border-dashed pb-3'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <div>
                                <PiVideo className='w-[22px] h-[22px] text-neutral-600' />
                              </div>
                              <p className='text-[16px] font-medium text-neutral-600'>
                                MySQL Intro – How, when and where to use
                              </p>
                            </div>
                            <div className='w-[30px] h-[30px] bg-[#f1f4f9] text-[#00305c] rounded-full flex items-center justify-center'>
                              <BsFillShieldLockFill className='text-[#00305c] opacity-70 text-[18px]' />
                            </div>
                          </div>
                        </li>
                        <li className='border-b border-b-[#e5e8ef] border-dashed py-3'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <div>
                                <PiVideo className='w-[22px] h-[22px] text-neutral-600' />
                              </div>
                              <p className='text-[16px] font-medium text-neutral-600'>
                                MySQL Connect – How to get connected
                              </p>
                            </div>
                            <div className='w-[30px] h-[30px] bg-[#f1f4f9] text-[#00305c] rounded-full flex items-center justify-center'>
                              <BsFillShieldLockFill className='text-[#00305c] opacity-70 text-[18px]' />
                            </div>
                          </div>
                        </li>
                        <li className='py-3'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <div>
                                <PiVideo className='w-[22px] h-[22px] text-neutral-600' />
                              </div>
                              <p className='text-[16px] font-medium text-neutral-600'>
                                CREATE Database – How to Create Database
                              </p>
                            </div>
                            <div className='w-[30px] h-[30px] bg-[#f1f4f9] text-[#00305c] rounded-full flex items-center justify-center'>
                              <BsFillShieldLockFill className='text-[#00305c] opacity-70 text-[18px]' />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='collapse collapse-plus bg-base-100 border border-[#e2e8ec] rounded-lg mt-4'>
                    <input type='radio' name='my-accordion-3' />
                    <div className='collapse-title font-semibold'>
                      Module-01 : Basics of PHP
                    </div>
                    <div className='collapse-content text-sm'>
                      <ul>
                        <li className='border-b border-b-[#e5e8ef] border-dashed pb-3'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <div>
                                <PiVideo className='w-[22px] h-[22px] text-neutral-600' />
                              </div>
                              <p className='text-[16px] font-medium text-neutral-600'>
                                Syntax, Print / Echo – Basic concepts on PHP
                              </p>
                            </div>
                            <div className='w-[30px] h-[30px] bg-[#f1f4f9] text-[#00305c] rounded-full flex items-center justify-center'>
                              <BsFillShieldLockFill className='text-[#00305c] opacity-70 text-[18px]' />
                            </div>
                          </div>
                        </li>
                        <li className='border-b border-b-[#e5e8ef] border-dashed py-3'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <div>
                                <PiVideo className='w-[22px] h-[22px] text-neutral-600' />
                              </div>
                              <p className='text-[16px] font-medium text-neutral-600'>
                                Variables, Data Types, Constants – Data Types
                                and Variables in PHP
                              </p>
                            </div>
                            <div className='w-[30px] h-[30px] bg-[#f1f4f9] text-[#00305c] rounded-full flex items-center justify-center'>
                              <BsFillShieldLockFill className='text-[#00305c] opacity-70 text-[18px]' />
                            </div>
                          </div>
                        </li>
                        <li className='py-3'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <div>
                                <PiVideo className='w-[22px] h-[22px] text-neutral-600' />
                              </div>
                              <p className='text-[16px] font-medium text-neutral-600'>
                                Operators – Operators in PHP Programming
                              </p>
                            </div>
                            <div className='w-[30px] h-[30px] bg-[#f1f4f9] text-[#00305c] rounded-full flex items-center justify-center'>
                              <BsFillShieldLockFill className='text-[#00305c] opacity-70 text-[18px]' />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <div className='border border-[#dee2e6] rounded-xl p-6'>
                  <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
                    What you will learn
                  </h2>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[50px] h-[50px] mx-auto flex items-center justify-center'>
                        <Image
                          width={40}
                          height={40}
                          className='object-cover'
                          src='/image/icons/Analytics.png'
                          alt='icons'
                        />
                      </div>
                      <h4 className='font-semibold mt-2 pb-1 text-[15px]'>
                        Google Analytics 4
                      </h4>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[50px] h-[50px] mx-auto flex items-center justify-center'>
                        <Image
                          width={40}
                          height={40}
                          className='object-cover'
                          src='/image/icons/chatGPT.png'
                          alt='icons'
                        />
                      </div>
                      <h4 className='font-semibold mt-2 pb-1 text-[15px]'>
                        ChatGPT
                      </h4>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[50px] h-[50px] mx-auto flex items-center justify-center'>
                        <Image
                          width={40}
                          height={40}
                          className='object-cover'
                          src='/image/icons/Manager.png'
                          alt='icons'
                        />
                      </div>
                      <h4 className='font-semibold mt-2 pb-1 text-[15px]'>
                        Google Tag Manager
                      </h4>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[50px] h-[50px] mx-auto flex items-center justify-center'>
                        <Image
                          width={40}
                          height={40}
                          className='object-cover'
                          src='/image/icons/linkdin.png'
                          alt='icons'
                        />
                      </div>
                      <h4 className='font-semibold mt-2 pb-1 text-[15px]'>
                        Linkedin Ads
                      </h4>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[50px] h-[50px] mx-auto flex items-center justify-center'>
                        <Image
                          width={40}
                          height={40}
                          className='object-cover'
                          src='/image/icons/vscode.png'
                          alt='icons'
                        />
                      </div>
                      <h4 className='font-semibold mt-2 pb-1 text-[15px]'>
                        VS Code
                      </h4>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[50px] h-[50px] mx-auto flex items-center justify-center'>
                        <Image
                          width={40}
                          height={40}
                          className='object-cover'
                          src='/image/icons/DATA-Studio.png'
                          alt='icons'
                        />
                      </div>
                      <h4 className='font-semibold mt-2 pb-1 text-[15px]'>
                        Google Data Studio
                      </h4>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[50px] h-[50px] mx-auto flex items-center justify-center'>
                        <Image
                          width={40}
                          height={40}
                          className='object-cover'
                          src='/image/icons/server.png'
                          alt='icons'
                        />
                      </div>
                      <h4 className='font-semibold mt-2 pb-1 text-[15px]'>
                        Window Server
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <div className='border border-[#dee2e6] rounded-xl p-6'>
                  <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
                    Course Instructor
                  </h2>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                    <div>
                      <div className='flex items-center gap-3'>
                        <div className='w-[70px] h-[70] rounded-[10px]'>
                          <Image
                            width={70}
                            height={70}
                            className='object-cover rounded-[10px]'
                            src='/image/icons/pic4.jpg'
                            alt='Instructor'
                          />
                        </div>
                        <div>
                          <h4 className='text-[17px] font-semibold text-[#162726] mb-1'>
                            Yeasin Arafat
                          </h4>
                          <p className='text-[14px] text-primary font-medium'>
                            Lead Instructor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-3'>
                        <div className='w-[70px] h-[70] rounded-[10px]'>
                          <Image
                            width={70}
                            height={70}
                            className='object-cover rounded-[10px]'
                            src='/image/icons/pic3.jpg'
                            alt='Instructor'
                          />
                        </div>
                        <div>
                          <h4 className='text-[17px]  font-semibold text-[#162726] mb-1'>
                            Al Rabby Siemens
                          </h4>
                          <p className='text-[14px] text-primary font-medium'>
                            Lead Instructor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-3'>
                        <div className='w-[70px] h-[70] rounded-[10px]'>
                          <Image
                            width={70}
                            height={70}
                            className='object-cover rounded-[10px]'
                            src='/image/icons/pic2.jpg'
                            alt='Instructor'
                          />
                        </div>
                        <div>
                          <h4 className='text-[17px] capitalize font-semibold text-[#162726] mb-1'>
                            Jafar Imam
                          </h4>
                          <p className='text-[14px] text-primary font-medium'>
                            Support Instructor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-3'>
                        <div className='w-[70px] h-[70] rounded-[10px]'>
                          <Image
                            width={70}
                            height={70}
                            className='object-cover rounded-[10px]'
                            src='/image/icons/pic8.jpg'
                            alt='Instructor'
                          />
                        </div>
                        <div>
                          <h4 className='text-[17px] capitalize font-semibold text-[#162726] mb-1'>
                            Jannatul Bushra
                          </h4>
                          <p className='text-[14px] text-primary font-medium'>
                            Support Instructor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-3'>
                        <div className='w-[70px] h-[70] rounded-[10px]'>
                          <Image
                            width={70}
                            height={70}
                            className='object-cover rounded-[10px]'
                            src='/image/icons/pic9.jpg'
                            alt='Instructor'
                          />
                        </div>
                        <div>
                          <h4 className='text-[17px] capitalize font-semibold text-[#162726] mb-1'>
                            Kathleen Moreno
                          </h4>
                          <p className='text-[14px] text-primary font-medium'>
                            Support Instructor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <div className='border border-[#dee2e6] rounded-xl p-6'>
                  <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
                    Student Feedback
                  </h2>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
                    <div className='rounded-[10px] p-[25px] relative border border-[#E0E5EB]'>
                      <div className='mb-5'>
                        <p className='text-neutral-700 font-siliguri text-base'>
                          &quot;এই কোর্সটি আমার জীবনে এক বিশাল পরিবর্তন এনেছে।
                          প্রতিটি লেকচার পরিষ্কারভাবে উপস্থাপন করা হয়েছে এবং
                          প্র্যাকটিক্যাল প্রজেক্টগুলো শেখাকে আরও সহজ করে তুলেছে।
                          কোর্সটি শেষ করার পর আমি ফ্রিল্যান্সিং শুরু করেছি এবং
                          ইতিমধ্যে কয়েকটি প্রজেক্ট পেয়েছি। শিক্ষকদের সাপোর্টও
                          দারুণ ছিল। আমি সবাইকে এই কোর্সটি পরামর্শ &quot;
                        </p>
                      </div>
                      <div className='flex items-center gap-3'>
                        <Image
                          width={50}
                          height={50}
                          className='object-cover rounded-full'
                          src='/image/icons/user-06.webp'
                          alt='users'
                        />
                        <div>
                          <h4 className='text-[15px] leading-7 font-semibold text-[#162726]'>
                            Tahiya Faiza
                          </h4>
                          <p className='text-[13px] text-primary font-medium'>
                            MERN Stack Web Development
                          </p>
                        </div>
                      </div>
                      <div>
                        <FaQuoteRight className='text-[#2490eb] text-[54px] leading-[62px] absolute right-[30px] bottom-[30px] opacity-[0.1]' />
                      </div>
                    </div>
                    <div className='rounded-[10px] p-[25px] relative border border-[#E0E5EB]'>
                      <div className='mb-5'>
                        <p className='text-neutral-700 font-siliguri text-base'>
                          &quot;অনেক দিন ধরেই এমন একটি কোর্স খুঁজছিলাম যেটা
                          আমাকে শূন্য থেকে শুরু করে একদম প্রফেশনাল লেভেল পর্যন্ত
                          নিয়ে যাবে—এটাই সেই কোর্স! প্রতিটি মডিউল সুন্দরভাবে
                          সাজানো, ভিডিও কোয়ালিটি চমৎকার, আর ইনস্ট্রাক্টরের
                          এক্সপ্লেনেশন ছিল অত্যন্ত পরিষ্কার। আমি এখন নিজের একটা
                          প্রজেক্টে কাজ করছি, যেটা এক মাস আগেও অসম্ভব মনে
                          হতো।&quot;
                        </p>
                      </div>
                      <div className='flex items-center gap-3'>
                        <Image
                          width={50}
                          height={50}
                          className='object-cover rounded-full'
                          src='/image/icons/user-14.jpg'
                          alt='users'
                        />
                        <div>
                          <h4 className='text-[15px] leading-7 font-semibold text-[#162726]'>
                            Miftahul Jannat
                          </h4>
                          <p className='text-[13px] text-primary font-medium'>
                            Professional Graphic Design
                          </p>
                        </div>
                      </div>
                      <div>
                        <FaQuoteRight className='text-[#2490eb] text-[54px] leading-[62px] absolute right-[30px] bottom-[30px] opacity-[0.1]' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <div className='border border-[#dee2e6] rounded-xl p-6'>
                  <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
                    Frequently Asked Questions
                  </h2>
                  <div className='collapse collapse-plus bg-base-100 border border-[#e2e8ec] rounded-lg'>
                    <input type='radio' name='my-accordion-3' defaultChecked />
                    <div className='collapse-title font-semibold font-siliguri'>
                      প্রশ্ন-০১ : কেমন সময় দেয়া লাগবে এ প্রোগ্রামে?
                    </div>
                    <div className='collapse-content text-sm font-siliguri'>
                      এটা তো আসলে ব্যক্তিবিশেষে আলাদা – কারো কম সময় লাগবে, কারো
                      বেশি সময় লাগবে! তবে আশা করা যায়ঃ প্রতি সপ্তাহে গড়ে ১০-১৫
                      ঘণ্টা করে সময় দিলে আপনি পুরো সিলেবাস শিখে ফেলতে পারবেন।
                    </div>
                  </div>
                  <div className='collapse collapse-plus bg-base-100 border border-[#e2e8ec] rounded-lg mt-4'>
                    <input type='radio' name='my-accordion-3' />
                    <div className='collapse-title font-semibold font-siliguri'>
                      প্রশ্ন-০২ : সবগুলো প্রজেক্ট কি ৬ মাসেই শেষ করতে হবে?
                    </div>
                    <div className='collapse-content text-sm font-siliguri'>
                      হ্যাঁ, ৬ মাসেই শেষ করতে হবে। তা না হলে আমাদের পক্ষে
                      প্রজেক্ট রিভিউ ও স্কোর করা সম্ভব হবে না। অর্থাৎ
                      সার্টিফিকেটও দেওয়া হবে না ৬ মাস পর। তবে আপনি চাইলে নিজ
                      উদ্যোগে ৬ মাস পরও প্রজেক্ট প্র্যাকটিস করতে পারেন।
                    </div>
                  </div>
                  <div className='collapse collapse-plus bg-base-100 border border-[#e2e8ec] rounded-lg mt-4'>
                    <input type='radio' name='my-accordion-3' />
                    <div className='collapse-title font-semibold font-siliguri'>
                      প্রশ্ন-০৩ : সার্টিফিকেট পাওয়া যাবে?
                    </div>
                    <div className='collapse-content text-sm font-siliguri'>
                      হ্যাঁ, অবশ্যই। কোর্স শেষে সার্টিফিকেট তো থাকছেই। তবে এজন্য
                      ৬ মাসের ভেতর কোর্স শেষ করতে হবে। কারণ প্রজেক্ট রিভিউর মতো
                      ব্যাপারগুলো এ ৬ মাস পর থাকবে না।
                    </div>
                  </div>
                  <div className='collapse collapse-plus bg-base-100 border border-[#e2e8ec] rounded-lg mt-4'>
                    <input type='radio' name='my-accordion-3' />
                    <div className='collapse-title font-semibold font-siliguri'>
                      প্রশ্ন-০৪ : কোর্স কোন সময় করবো? নির্দিষ্ট কোনো সময়ে ক্লাস
                      হবে কি না?
                    </div>
                    <div className='collapse-content text-sm font-siliguri'>
                      আমাদের প্রতিটা কোর্সের আপকামিং সিডিউল দেওয়া আছে। আপকামিং
                      সিডিউল দেখে আপনি ভর্তি কনফার্ম করতে পারেন অথবা আপনার
                      ফ্লেক্সিবিলিটি অনুযায়ী কোর্স করতে পারবেন।
                    </div>
                  </div>
                  <div className='collapse collapse-plus bg-base-100 border border-[#e2e8ec] rounded-lg mt-4'>
                    <input type='radio' name='my-accordion-3' />
                    <div className='collapse-title font-semibold font-siliguri'>
                      প্রশ্ন-০৫ : শিক্ষাগত যোগ্যতা? নন-টেকনিক্যাল
                      ব্যাকগ্রাউন্ডের মানুষ এটি করতে পারবে?
                    </div>
                    <div className='collapse-content text-sm font-siliguri'>
                      নির্দিষ্ট কোনো ডিগ্রি রিকোয়্যারমেন্ট নেই। তবে কমপক্ষে
                      এইচএসসি বা সমমানের যোগ্যতা থাকা উচিত। এছাড়া, STEM
                      (Science, Technology, Engineering, Mathematics)
                      ব্যাকগ্রাউন্ডের শিক্ষার্থীদের জন্য এ কোর্স তুলনামূলকভাবে
                      সহজ হবে। অবশ্য নন-টেকনিক্যাল (যেমন, কমার্স কিংবা আর্টস)
                      ব্যাকগ্রাউন্ডের মানুষরাও এ কোর্স করতে পারবে। পাশাপাশি
                      কয়েকটি বেসিক বিষয় জানতে হবে। যেমন, Basic Algebra সম্পর্কে
                      ভাল ধারণা থাকা। আবার কম্পিউটার চালানো এবং ইন্টারনেট
                      ব্রাউজার ব্যবহারে কমফোর্টেবল হতে হবে। এছাড়া, গুগলে সার্চ
                      করে কোনো টপিক ঘেঁটে দেখার মতো অভ্যাস থাকা উচিত।
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <div className='lg:px-12 p-8 certificate-bg lg:pb-8 lg:p-12 relative rounded-[20px] h-full lg:flex lg:flex-row justify-between bg-cover flex-col gap-5'>
                  <div className='max-w-sm relative z-10'>
                    <h3 className='font-bold text-white text-2xl md:text-3xl mb-3'>
                      Course Certificate
                    </h3>
                    <p className='text-base text-white/70 mb-7'>
                      Get Course Completion and Assessment Certificate at the
                      end of the course
                    </p>
                    <div>
                      <div className='flex items-center gap-3 mb-3'>
                        <div>
                          <div className='p-2 bg-[#4fc3ff] rounded-md shadow'>
                            <SiReaddotcv size={20} className='text-white' />
                          </div>
                        </div>
                        <h4 className='text-[15px] font-semibold text-[#fff]'>
                          Can add to your CV
                        </h4>
                      </div>
                      <div className='flex items-center gap-3 mb-3'>
                        <div>
                          <div className='p-2 bg-[#4fc3ff] rounded-md shadow'>
                            <FaLinkedinIn size={20} className='text-white' />
                          </div>
                        </div>
                        <h4 className='text-[15px] font-semibold text-[#fff]'>
                          You can share directly on your LinkedIn profile
                        </h4>
                      </div>
                      <div className='flex items-center gap-3'>
                        <div>
                          <div className='p-2 bg-[#4fc3ff] rounded-md shadow'>
                            <FaFacebookF size={20} className='text-white' />
                          </div>
                        </div>
                        <h4 className='text-[15px] font-semibold text-[#fff]'>
                          You can share on Facebook with one click
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='border-[7px] border-[#f3f4f6] rounded-[15px] overflow-hidden bg-white hidden lg:block'>
                      <Image
                        width={400}
                        height={400}
                        src='/image/certificate/certification-demo.jpg'
                        className='hidden lg:block relative z-10 rounded-[10px]'
                        alt='certificate'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-10'>
                <div className='border border-[#dee2e6] rounded-xl p-6'>
                  <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
                    Any more query?
                  </h2>
                  <div className='flex w-full items-center justify-start'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='28'
                      height='28'
                      fill='none'
                      viewBox='0 0 29 28'
                      className='w-[17px] h-[17px] md:w-6 md:h-6'
                    >
                      <path
                        stroke='#04a9ff'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.223'
                        d='M17.246 2.917a9.298 9.298 0 018.213 8.204M17.246 7.05a5.164 5.164 0 014.083 4.083'
                      ></path>
                      <path
                        stroke='#04a9ff'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.223'
                        d='M13.37 14.551c4.655 4.653 5.71-.73 8.673 2.231 2.857 2.856 4.5 3.428.88 7.047-.454.364-3.334 4.748-13.457-5.373C-.658 8.335 3.722 5.451 4.086 4.998c3.629-3.628 4.193-1.977 7.05.879 2.961 2.962-2.42 4.022 2.235 8.674z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <h3 className='ml-2 text-md font-medium md:text-lg text-[#04a9ff]'>
                      Call For Any Information Regarding The Course
                      <span className='text-[#04a9ff]'>
                        {' '}
                        +880179-944-6655 (09 AM to 09 PM)
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-2'>
              <div className='relative p-[2px] rounded-xl bg-gradient-to-r from-[#04a9ff] to-[#f1581e]'>
                <div className='bg-white rounded-xl p-6'>
                  <h2 className='mb-4 text-xl font-semibold'>
                    Course Features
                  </h2>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <MdOutlineSlowMotionVideo className='text-[#334155] h-[18px] w-[18px] ' />
                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        Online and Offline Support
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <LiaToolsSolid className='text-[#334155] h-[18px] w-[18px] ' />
                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        Tools, Templates and Book Suggestions
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <LiaCertificateSolid className='text-[#334155] h-[18px] w-[18px] ' />

                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        Assessment and Certificate
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <LuBookAudio className='text-[#334155] h-[18px] w-[18px] ' />
                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        40+ Classes
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <MdOutlineOndemandVideo className='text-[#334155] h-[18px] w-[18px] ' />
                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        40+ Recorded Videos
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <VscWorkspaceTrusted className='text-[#334155] h-[18px] w-[18px] ' />

                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        Job Placement Support
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-1 leading-5'>
                      <RiTimerFlashLine className='text-[#334155] h-[18px] w-[18px] ' />
                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        Total 120 Hours
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <div className='benefits-bg rounded-xl p-6 overflow-hidden'>
                  <div>
                    <img
                      className='w-full h-60 object-contain'
                      src='/image/icons/bn-2.svg'
                      alt='image'
                    />
                  </div>
                  <div className='mt-1'>
                    <h3 className='font-bold max-w-xs text-white text-xl md:text-2xl mb-4'>
                      Download the Guidelines for FREE!
                    </h3>
                    <button className='button-bg rounded-md cursor-pointer px-8 py-2 whitespace-nowrap md:w-full text-white flex items-center justify-center text-md font-semibold capitalize'>
                      Download Course Module
                    </button>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <div className='lg:px-6 p-8 bg-[#2D0B70] lg:pb-0 lg:p-12 relative rounded-xl h-full  bg-cover gap-3'>
                  <div className='max-w-sm relative z-10'>
                    <h3 className='font-bold text-white text-center text-xl md:text-3xl mb-4 font-siliguri'>
                      কোর্সটি সম্পর্কে বিস্তারিত জানতে
                    </h3>
                    <p className='text-base text-white/80 mb-6'>
                      <span className='flex items-center justify-center ml-2 cursor-pointer text-green'>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'></path>
                        </svg>
                        <span className='ml-2 font-siliguri font-medium'>
                          ফোন করুন (0179-944-6655)
                        </span>
                      </span>
                    </p>
                  </div>
                  <div>
                    <img
                      src='/image/icons/bn-3.svg'
                      className='hidden lg:block relative z-10'
                      alt='benefit illustration'
                    />
                  </div>
                  <img
                    src='/image/icons/blur-shape.png'
                    alt='blur shape'
                    className='h-full w-full -z-0 absolute top-0 right-0'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
