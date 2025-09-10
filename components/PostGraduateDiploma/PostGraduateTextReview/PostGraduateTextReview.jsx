'use client';
import DepartmentSectionTitle from '@/components/DepartmentSectionTitle/DepartmentSectionTitle';
import { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';
import './PostGraduateTextReview.css';

const PostGraduateTextReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          'https://erp.peoplentech.com.bd/api/v1/pgd/student-review'
        );
        const data = await res.json();
        setReviews(data?.data || []);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const highlightIndexes = [1, 4, 7, 10];

  return (
    <section className='pb-[80px] pt-[30px] testimonials'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <DepartmentSectionTitle
          title='আমাদের  ডিপ্লোমা'
          subtitle='ট্রেনিং সাফল্য'
          text='আমাদের কোর্সগুলি থেকে যারা শিক্ষা গ্রহণ করেছেন এবং বিভিন্ন জায়গায় চাকরি/ইন্টার্নশিপ পেয়েছেন তাদের কিছু ব্যক্তির প্রোফাইল নীচে দেওয়া হল।'
        />

        {loading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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
          <div className='testimonial-masonry'>
            {reviews.map((review, index) => {
              const isHighlight = highlightIndexes.includes(index);

              return (
                <div
                  key={review.id || index}
                  className={`testimonial-item ${
                    isHighlight ? 'highlight' : ''
                  }`}
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                >
                  <div className='testimonial-content'>
                    <div className='quote-pattern'>
                      <FaQuoteLeft className='text-primary' />
                    </div>
                    <p className='font-siliguri'>{review?.review}</p>
                    <div className='client-info'>
                      <div className='client-image'>
                        <img
                          src={review?.image || '/image/icons/user-14.jpg'}
                          alt={review?.name}
                        />
                      </div>
                      <div className='client-details'>
                        <h3>{review?.name || 'Anonymous'}</h3>
                        <span className='position'>
                          {review?.job_title || 'No Job'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* <div className='testimonial-masonry'>
          <div className='testimonial-item' data-aos='fade-up'>
            <div className='testimonial-content'>
              <div className='quote-pattern'>
                <FaQuoteLeft className='text-primary' />
              </div>
              <p className='font-siliguri'>
                এই কোর্সের মাধ্যমে আমি প্রফেশনাল স্কিলগুলো গভীরভাবে শিখেছি এবং
                ইন্টারভিউর জন্য সম্পূর্ণ প্রস্তুত হয়েছি। লাইভ সেশন,
                প্র্যাকটিক্যাল ক্লাস এবং রিয়েল-লাইফ প্রজেক্টগুলো আমাকে বাস্তব
                অভিজ্ঞতা দিতে সাহায্য করেছে। কোর্সের গাইডলাইন এবং সাপোর্ট টিম
                সবসময় পাশে ছিল, যা আমাকে আত্মবিশ্বাসী করে চাকরির বাজারে এগিয়ে
                যেতে সাহায্য করেছে।
              </p>
              <div className='client-info'>
                <div className='client-image'>
                  <img src='/image/icons/user-14.jpg' alt='Client' />
                </div>
                <div className='client-details'>
                  <h3>Arif Hossain</h3>
                  <span className='position'>
                    Software Engineer at TechSolutions
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className='testimonial-item highlight'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <div className='testimonial-content'>
              <div className='quote-pattern'>
                <FaQuoteLeft className='text-primary' />
              </div>
              <p className='font-siliguri'>
                শেখার প্রক্রিয়াটি এতই সহজ, structured এবং ইন্টারঅ্যাকটিভ যে
                প্রতিদিনের কাজের জন্য প্রাসঙ্গিক দক্ষতা অর্জন করা সম্ভব হয়েছে।
                লাইভ ক্লাসের মাধ্যমে সরাসরি প্রশ্ন করার সুযোগ, এবং
                প্র্যাকটিক্যাল অ্যাসাইনমেন্টগুলো আমাকে বাস্তব জীবনের পরিস্থিতিতে
                প্রস্তুত করেছে। কোর্সের সাপোর্ট টিম সবসময় সাহায্য করেছে, যা
                অভিজ্ঞতাকে আরও সমৃদ্ধ করেছে।
              </p>
              <div className='client-info'>
                <div className='client-image'>
                  <img src='/image/icons/user-13.jpg' alt='Client' />
                </div>
                <div className='client-details'>
                  <h3>Nusrat Jahan</h3>
                  <span className='position'>HR Executive at GlobalCorp</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className='testimonial-item'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <div className='testimonial-content'>
              <div className='quote-pattern'>
                <FaQuoteLeft className='text-primary' />
              </div>
              <p className='font-siliguri'>
                প্রজেক্ট ভিত্তিক শেখার কারণে আমি বাস্তব অভিজ্ঞতা পেয়েছি এবং
                নতুন টেকনোলজির সাথে পরিচিত হয়েছি। কোর্সের প্রতিটি ধাপ অত্যন্ত
                সুসংগঠিত এবং শিক্ষণ পদ্ধতি অত্যন্ত কার্যকর। কোর্স শেষ করার পর
                আমি আত্মবিশ্বাসের সঙ্গে চাকরির বাজারে প্রবেশ করতে পারলাম এবং
                সফলভাবে প্রথম কাজ শুরু করেছি।
              </p>
              <div className='client-info'>
                <div className='client-image'>
                  <img src='/image/icons/user-06.webp' alt='Client' />
                </div>
                <div className='client-details'>
                  <h3>Emma Thompson</h3>
                  <span className='position'>
                    Frontend Developer at CreativeSoft
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className='testimonial-item'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='testimonial-content'>
              <div className='quote-pattern'>
                <FaQuoteLeft className='text-primary' />
              </div>
              <p className='font-siliguri'>
                এই কোর্সের মাধ্যমে আমি ডেটা অ্যানালিসিস এবং প্র্যাকটিক্যাল
                টুলগুলো গভীরভাবে শিখেছি। লাইভ ক্লাস, প্রজেক্ট এবং এক্সপার্ট
                গাইডলাইন আমাকে আত্মবিশ্বাসী করে তুলেছে। কোর্সের সাপোর্ট টিম
                সবসময় আমার প্রশ্নের উত্তর দিয়েছে, যা শেখার অভিজ্ঞতাকে আরও উন্নত
                করেছে।
              </p>
              <div className='client-info'>
                <div className='client-image'>
                  <img src='/image/icons/user-12.jpg' alt='Client' />
                </div>
                <div className='client-details'>
                  <h3>Sabina Akter</h3>
                  <span className='position'>Data Analyst at InfoTech Ltd</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className='testimonial-item highlight'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <div className='testimonial-content'>
              <div className='quote-pattern'>
                <FaQuoteLeft className='text-primary' />
              </div>
              <p className='font-siliguri'>
                প্রজেক্ট ভিত্তিক শেখার মাধ্যমে আমি বাস্তব জীবনের চ্যালেঞ্জ
                মোকাবিলায় প্রস্তুত হয়েছি। কোর্সের মডিউলগুলো সুসংগঠিত এবং
                লজিক্যাল। লাইভ সেশনগুলোতে সরাসরি প্রশ্ন করার সুযোগ এবং অভিজ্ঞ
                প্রশিক্ষকরা আমাকে প্রতিটি সমস্যার সমাধান দেখিয়েছেন। এই কোর্স
                আমার ক্যারিয়ারকে নতুন মাত্রা দিয়েছে।
              </p>
              <div className='client-info'>
                <div className='client-image'>
                  <img src='/image/icons/pic4.jpg' alt='Client' />
                </div>
                <div className='client-details'>
                  <h3>Olivia Carter</h3>
                  <span className='position'>
                    Full Stack Developer at CodeCrafters
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className='testimonial-item'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            <div className='testimonial-content'>
              <div className='quote-pattern'>
                <FaQuoteLeft className='text-primary' />
              </div>
              <p className='font-siliguri'>
                এই কোর্সের প্র্যাকটিক্যাল অ্যাপ্রোচ এবং রিয়েল-লাইফ কেস স্টাডি
                আমাকে হিউম্যান রিসোর্স ম্যানেজমেন্টের বাস্তব অভিজ্ঞতা দিয়েছে।
                কোর্সের লাইভ সেশন, সাপোর্ট এবং নির্দেশনা আমাকে প্রফেশনাল দক্ষতা
                অর্জনে সাহায্য করেছে। আমি এখন আত্মবিশ্বাসের সঙ্গে নতুন
                চ্যালেঞ্জের মুখোমুখি হতে পারি।
              </p>
              <div className='client-info'>
                <div className='client-image'>
                  <img src='/image/icons/pic8.jpg' alt='Client' />
                </div>
                <div className='client-details'>
                  <h3>Nathan Brooks</h3>
                  <span className='position'>
                    HR Coordinator at GlobalReach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PostGraduateTextReview;
