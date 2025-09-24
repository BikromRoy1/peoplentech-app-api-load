import { API_BASE_URL } from '@/app/lib/config';
import PageBanner from '@/components/PageBanner/PageBanner';
import Link from 'next/link';
import { FaRegCalendarAlt, FaUserLock } from 'react-icons/fa';
import './BlogDetails.css';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // API call to get single blog
  const res = await fetch(`${API_BASE_URL}/post/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return {
      title: 'Blog Not Found',
      description: 'The blog you are looking for does not exist.',
    };
  }

  const data = await res.json();
  const post = data?.data;

  return {
    title: post?.meta_title || post?.title,
    description: post?.meta_description || post?.description?.slice(0, 150),
    keywords: post?.meta_keywords || 'blog, article, learning, education',
    openGraph: {
      title: post?.meta_title || post?.title,
      description: post?.meta_description || post?.description?.slice(0, 150),
      url: `https://erp.peoplentech.com.bd/blog/${post?.slug}`,
      images: [
        {
          url: post?.image,
          width: 800,
          height: 600,
          alt: post?.title,
        },
      ],
    },
  };
}

const BlogDetails = async ({ params }) => {
  const { slug } = await params;

  // API call
  const res = await fetch(`${API_BASE_URL}/post/${slug}`, {
    cache: 'no-store', // always fresh data
  });

  if (!res.ok) {
    return <div>Failed to load blog details.</div>;
  }

  const data = await res.json();
  const post = data?.data;

  const resArticle = await fetch(`${API_BASE_URL}/posts`, {
    cache: 'no-store', // always fresh data
  });
  const dataArticle = await resArticle.json();
  const posts = dataArticle?.data || [];

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
                  src={post?.image || '/image/blogs/blog-1.jpg'}
                  alt={post?.title}
                />
                <div className='flex items-center gap-4 mt-[20px]'>
                  <div className='flex items-center gap-1.5'>
                    <FaRegCalendarAlt className='text-[#6C706F]' />
                    <span className='text-[#6C706F] text-[15px] font-medium capitalize'>
                      {post?.published_at}
                    </span>
                  </div>
                  <div className='flex items-center gap-1.5 '>
                    <FaUserLock className='text-[#6C706F]' />
                    <span className='text-[#6C706F] text-[15px] font-medium'>
                      {post?.author || 'Admin'}
                    </span>
                  </div>
                </div>
                <div className='mt-7 mb-3'>
                  <h4 className='font-bold text-2xl'>{post?.title}</h4>
                </div>
                <div
                  className='blogs-content'
                  dangerouslySetInnerHTML={{ __html: post?.description }}
                ></div>
              </div>
            </div>
            <div className='md:col-span-3'>
              <div className='Article-bg p-6 rounded-[10px]'>
                <h4 className='capitalize text-[21px] font-semibold pl-[10px] border-l-[3px] border-primary mb-6'>
                  Recent Article
                </h4>
                <div>
                  {posts.slice(0, 6).map((post) => (
                    <div
                      key={post?.id}
                      className='mb-5 flex items-center gap-4 last:mb-0'
                    >
                      <div className='flex-shrink-0'>
                        <Link href={`/blog/${post.slug}`}>
                          <img
                            className='w-[140px] object-cover rounded-[8px] h-[90px]'
                            src={post?.image || '/image/blogs/blog-1.jpg'}
                            alt={post?.title}
                          />
                        </Link>
                      </div>
                      <div>
                        <h5 className='text-primary font-medium text-[15px] mb-1'>
                          {post?.published_at}
                        </h5>
                        <p className='font-semibold text-[16px]'>
                          <Link href={`/blog/${post.slug}`}>
                            {post?.title || 'No Title'}
                          </Link>
                        </p>
                      </div>
                    </div>
                  ))}
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
