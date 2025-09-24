import PageBanner from '@/components/PageBanner/PageBanner';
import { API_BASE_URL } from '../lib/config';
import BlogsPagination from './BlogsPagination';

export const metadata = {
  title: 'Blogs - PeopleNTech',
  description:
    'We PeopleNTech is offering professional IT training course &amp; job placement facility for students. We are affiliating with top notch IT company in Bangladesh..',
};

// Fetch initial page server-side
async function getInitialPosts() {
  const res = await fetch(`${API_BASE_URL}/posts?page=1`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data;
}

export default async function BlogsPage() {
  const initialData = await getInitialPosts();
  const posts = initialData.data;
  const pagination = initialData.pagination;

  return (
    <div>
      <PageBanner title='Our All Blogs' subtitle='Blogs' />
      <div className='pb-[80px] pt-[100px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <BlogsPagination initialPage={1} lastPage={pagination.last_page} />
        </div>
      </div>
    </div>
  );
}
