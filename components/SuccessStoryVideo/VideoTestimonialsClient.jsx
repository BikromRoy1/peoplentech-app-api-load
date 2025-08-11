'use client';

import { API_BASE_URL } from '@/app/lib/config';
import { useEffect, useState } from 'react';

function getYouTubeId(url) {
  const match = url.match(/(?:v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
}

export default function VideoTestimonialsClient() {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      try {
        const res = await fetch(`${API_BASE_URL}/video-testimonial`);
        if (!res.ok) throw new Error('Failed to fetch video testimonials');
        const json = await res.json();
        if (mounted) setVideos(json.data || []);
      } catch (err) {
        console.error(err);
        if (mounted) setError('Could not load testimonials');
      }
    }
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  const SkeletonCard = () => (
    <div className='relative successStudents-items animate-pulse'>
      <div
        className='w-full h-48 rounded-[10px]'
        style={{ backgroundColor: '#04a9ff33' }} // হালকা ট্রান্সপারেন্ট primary color
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
  );

  return (
    <>
      {error && <p className='text-red-500 text-center mb-4'>{error}</p>}

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {!videos ? (
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
        ) : videos.length === 0 ? (
          <p className='text-center col-span-full'>
            No video testimonials found.
          </p>
        ) : (
          videos.map((video) => {
            const id = getYouTubeId(video.video_url);
            const thumbnail = id
              ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
              : '/images/default-video-thumb.jpg';
            return (
              <div key={video.id} className='relative successStudents-items'>
                <a
                  href={video.video_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block'
                >
                  <img
                    className='w-full h-full object-cover rounded-[10px] cursor-pointer'
                    src={thumbnail}
                    alt='success story'
                  />
                </a>

                <div className='flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
                  <a
                    href={video.video_url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      className='w-[70px] h-[70px]'
                      src='/image/icons/play_icon_2 1.svg'
                      alt='play icon'
                    />
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
