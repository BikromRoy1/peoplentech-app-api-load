import Link from 'next/link';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import './Blogs.css';

export default function BlogCard({ post }) {
  return (
    <div className='blog-post bg-white rounded-[10px] p-[20px] mb-[30px] mt-[20px]'>
      <div className='wt-post-media mb-[40px] overflow-hidden mt-[-40px] rounded-[10px]'>
        <Link href={`/blog/${post.slug}`}>
          <img
            className='w-full'
            src={post?.image || '/image/blogs/blog-1.jpg'}
            alt={post?.title}
          />
        </Link>
      </div>
      <div className='relative z-10'>
        <div className='wt-post-meta relative mb-[20px]'>
          <ul className='list-none mb-0'>
            <li className='post-date'>{post?.published_at}</li>
            <li className='post-author'>
              By{' '}
              <span className='text-primary'> {post?.author || 'Admin'}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='mb-[15px] capitalize text-lg font-semibold text-[#17171d] hover:text-primary'>
            <Link href={`/blog/${post.slug}`}>{post?.title || 'No Title'}</Link>
          </h4>
        </div>
        <div>
          <p className='mb-3 text-base text-gray-500 font-normal line-clamp-3'>
            {post.description.replace(/<[^>]+>/g, '')}
          </p>
        </div>
        <div className='pb-1'>
          <Link
            className='text-primary flex items-center gap-1.5 text-[15px] font-semibold hover:text-[#17171d] '
            href={`/blog/${post.slug}`}
          >
            Read More <MdKeyboardDoubleArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
