import Image from 'next/image';
import { FaBolt } from 'react-icons/fa';
import './Certification.css';

const Certification = () => {
  return (
    <section className='pb-[110px] pt-[90px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-5 md:items-center md:gap-8'>
          <div className='md:col-span-2'>
            <div className='max-w-lg md:max-w-none'>
              <div className='section-heading'>
                <h4 className='bg-white text-[#162726] text-[15px] font-medium inline-flex items-center gap-2.5 mb-4 relative border border-[#E0E5EB] rounded-full section-padding'>
                  <span className='background-color-section text-primary text-[14px] w-7 h-7 rounded-full flex items-center justify-center'>
                    <FaBolt />
                  </span>
                  Certification And Membership
                </h4>
                <h2 className='text-[20px] sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px] font-semibold leading-tight mb-5'>
                  Accreditation & Certification Or Membership
                </h2>
                <p className='text-[15px] text-[#6C706F] mb-6'>
                  We Are Legal Members Of Well Known Associations. At
                  PeopleNTech Institute of IT , we uphold the highest standards
                  of excellence, validated by our key accreditations and
                  distinguished memberships
                </p>
              </div>
            </div>
          </div>

          <div className='md:col-span-3'>
            <div className='relative !mt-[60px]'>
              <div className='absolute hidden xl:block lg:block md:block Certification-background'>
                <img
                  className='w-full'
                  src='/image/background/blurry.png'
                  alt='blurry'
                />
              </div>
              <div className='flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]'>
                <div className='md:w-6/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !self-end xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]'>
                  <div className='card bg-[#ffffffec] border border-[#fff3] !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]'>
                    <div className='card-body flex-[1_1_auto] p-[20px] text-center justify-center'>
                      <div className='text-center'>
                        <Image
                          width={100}
                          height={100}
                          className='text-center mx-auto blurred-image'
                          src='/image/certificate/Certification-1.png'
                          alt='certification'
                        />
                        <p className='mt-2 text-[#6C706F] text-[14px] font-normal'>
                          Standard to demonstrate the ability to consistently
                          provide products and services that meet customer and
                          regulatory requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !self-end xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]'>
                  <div className='card bg-[#ffffffec] border border-[#fff3] !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]'>
                    <div className='card-body flex-[1_1_auto] p-[20px]'>
                      <div className='text-center'>
                        <Image
                          width={130}
                          height={130}
                          className='text-center mx-auto blurred-image'
                          src='/image/certificate/Certification-2.png'
                          alt='certification'
                        />
                        <p className='mt-2 text-[#6C706F] text-[14px] font-normal'>
                          Member of the national association of Software,
                          information and communication technologies companies
                          in Bangladesh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='md:w-6/12 lg:w-6/12 xl:w-5/12 flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]'>
                  <div className='card bg-[#ffffffec] border border-[#fff3] !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]'>
                    <div className='card-body flex-[1_1_auto] p-[20px]'>
                      <div className='text-center'>
                        <Image
                          width={100}
                          height={100}
                          className='text-center mx-auto blurred-image'
                          src='/image/certificate/Certification-3.png'
                          alt='certification'
                        />
                        <p className='mt-2 text-[#6C706F] text-[14px] font-normal'>
                          Member of the national association of Software,
                          information and communication technologies companies
                          in Bangladesh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !self-start xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]'>
                  <div className='card bg-[#ffffffec] border border-[#fff3] !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]'>
                    <div className='card-body flex-[1_1_auto] p-[25px]'>
                      <div className='text-center'>
                        <Image
                          width={260}
                          height={200}
                          className='text-center mx-auto blurred-image'
                          src='/image/certificate/membership.png'
                          alt='certification'
                        />
                        <p className='mt-2 text-[#6C706F] text-[14px] font-normal'>
                          Requirements for secure ISMS implementation,
                          maintenance and improvement to protect organizational
                          information assets.
                        </p>
                      </div>
                    </div>
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

export default Certification;
