'use client';

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';

import { useRef, useState } from 'react';
import './VideoPlayer.css';

const VideosPlayingClient = ({ slug, courseName }) => {
  const videoData = [
    {
      id: 1,
      title: 'Introduction',
      source: '/image/vidoes/parrot.mp4',
      duration: '2m 10s',
      isPremium: false,
    },
    {
      id: 2,
      title: 'Staying on the Sales Tightrope',
      source: '/image/vidoes/animal.mp4',
      duration: '15m 10s',
      isPremium: false,
    },
    {
      id: 3,
      title: 'First Impressions and Body Language Language Language',
      source: '/image/vidoes/production.mp4',
      duration: '18m 10s',
      isPremium: true,
    },
    {
      id: 4,
      title: 'Scratch Programming Basic',
      source: '/image/vidoes/bird.mp4',
      duration: '25m 10s',
      isPremium: true,
    },
    {
      id: 5,
      title: 'Install and Overview',
      source: '/image/vidoes/Call-of-Duty.mp4',
      duration: '25m 10s',
      isPremium: true,
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeVideoTitle, setActiveVideoTitle] = useState(videoData[0].title);
  const [videoDuration, setVideoDuration] = useState('0:00');
  const videoRef = useRef(null);

  const changeVideoSource = (newIndex) => {
    setCurrentVideoIndex(newIndex);
    setActiveVideoTitle(videoData[newIndex].title);
    setVideoDuration('0:00');
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const durationInSeconds = videoRef.current.duration;
      const formattedDuration = formatVideoDuration(durationInSeconds);
      setVideoDuration(formattedDuration);
    }
  };

  const formatVideoDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}m ${seconds}s`;
  };

  return (
    <section className='videosPlaying-section'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-3 gap-2 transition-all lg:gap-8'>
          <div className='col-span-full w-full space-y-8 transition-all lg:col-span-2'>
            <div className='flex items-center gap-2 lg:gap-4'>
              <h4 className='font-bold text-[#124265] text-[16px] md:text-[20px] leading-[28px]'>
                {courseName}
              </h4>
            </div>

            <MediaPlayer
              autoplay
              crossorigin
              playsinline
              width='100%'
              height='420px'
              ref={videoRef}
              title={activeVideoTitle}
              onLoadedMetadata={handleLoadedMetadata}
              src={videoData[currentVideoIndex].source}
            >
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails='/videos/thumbnails.vtt' // ✅ put inside /public/videos
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>

            <h3 className='font-semibold text-[16px] md:text-[19px] leading-[28px]'>
              Video: {activeVideoTitle} - Duration: {videoDuration}
            </h3>
          </div>

          <div className='border-light-1 shadow-1 col-span-full h-max rounded-md border dark:border-slate-50/[0.06] dark:bg-slate-900 lg:col-span-1 lg:rounded-lg'>
            <div className='bg-[#e5e7eb] custom-shadow px-4 py-7 rounded-lg'>
              <div className='videos-module'>
                <div className='Course-Content flex items-center justify-between pb-4'>
                  <h4 className='font-semibold text-[16px] md:text-[20px] '>
                    Course Content
                  </h4>
                  <h5 className='font-semibold text-[16px] md:text-[20px] text-primary'>
                    {videoData.length + 4} Lessons (8h 15m)
                  </h5>
                </div>

                <details
                  className='group rounded-lg [&_summary::-webkit-details-marker]:hidden mb-[1rem] bg-white'
                  open
                >
                  <summary className='flex items-center justify-between cursor-pointer bg-white py-[1rem] px-[1.25rem] rounded-[6px]'>
                    <h2 className='font-bold text-[#124265] text-[14px] md:text-[16px]'>
                      Oracle Database-SQL: Practice SQL to be confident in Query{' '}
                      <span className='font-medium text-[#7b7b8a]'>
                        ({videoData.length} Lectures)
                      </span>
                    </h2>
                  </summary>

                  <div className='mt-[1rem] pl-[1rem] pt-[0.2rem] pr-[0.5rem] pb-[0.7rem]'>
                    {videoData.map((data, index) => (
                      <div key={data.id}>
                        <div className='flex justify-between items-center flex-wrap'>
                          <div className='relative flex items-center videos-name-main flex-wrap'>
                            <a
                              href='#'
                              onClick={() => changeVideoSource(data.id - 1)}
                              className='btn-danger-soft mb-0'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='23'
                                height='23'
                                fill='currentColor'
                                className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                                viewBox='0 0 16 16'
                              >
                                <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                              </svg>
                            </a>
                            <span className='inline-block truncate ml-2 mb-0 text-[15px] font-normal w-[280px] cursor-pointer'>
                              <span
                                className={`${
                                  currentVideoIndex === index
                                    ? 'active-video text-[#d6293e] font-semibold text-[15px]'
                                    : ''
                                }`}
                                onClick={() => changeVideoSource(data.id - 1)}
                              >
                                {data.title}
                              </span>
                            </span>
                          </div>
                          <p className='mb-0 text-[#7b7b8a] text-[14px] font-semibold flex items-center gap-2'>
                            {videoDuration}
                          </p>
                        </div>
                        {index !== videoData.length - 1 && (
                          <hr className='hr-style my-[1rem] text-[#9a9ea4]' />
                        )}
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosPlayingClient;
