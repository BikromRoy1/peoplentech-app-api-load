import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className='pb-[100px] pt-[100px] from-bg'>
      <div className='mx-auto px-4 sm:px-6 container'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center'>
          <div>
            <div className='flex flex-col justify-between'>
              <img
                src='/image/location/contact.svg'
                alt='image'
                className='h-[600px]'
              />
            </div>
          </div>
          <div>
            <div className='border border-[#dee2e6] rounded-xl px-6 py-8'>
              <div className='mb-10'>
                <h1 className='text-2xl/tight mb-3 font-semibold capitalize'>
                  We will answer all your questions
                </h1>
                <p className='text-base font-normal leading-7'>
                  We provide free career counseling support so that you can make
                  the right career decision. Get answers to your various career
                  related questions from experienced career counselors.
                </p>
              </div>
              <form className='space-y-5'>
                <div>
                  <label
                    htmlFor='name'
                    className='font-medium text-sm block mb-2'
                  >
                    Full name
                  </label>
                  <input
                    id='name'
                    type='text'
                    placeholder='Enter Your Name'
                    className='text-gray-500 border border-gray-300 focus:ring-0 focus:outline-none focus:border-primary text-sm rounded-lg py-2.5 px-4 w-full'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='font-medium text-sm block mb-2'
                  >
                    Email Address
                  </label>
                  <input
                    id='email'
                    type='email'
                    placeholder='Enter Your Email'
                    className='text-gray-500 border border-gray-300 focus:ring-0 focus:outline-none focus:border-primary text-sm rounded-lg py-2.5 px-4 w-full'
                  />
                </div>
                <div>
                  <label
                    htmlFor='phone'
                    className='font-medium text-sm block mb-2'
                  >
                    Phone Number
                  </label>
                  <input
                    id='phone'
                    type='text'
                    placeholder='Enter Your Phone'
                    className='text-gray-500 border border-gray-300 focus:ring-0 focus:outline-none focus:border-primary text-sm rounded-lg py-2.5 px-4 w-full'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='font-medium text-sm block mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows='3'
                    className='text-gray-500 border border-gray-300 focus:ring-0 focus:outline-none focus:border-primary text-sm rounded-lg py-2.5 px-4 w-full'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide bg-primary text-white cursor-pointer'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
