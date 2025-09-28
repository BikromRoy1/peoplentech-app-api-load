'use client';

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import './VideoPlayer.css';
import { API_BASE_URL } from '../lib/config';

const VideosPlayingClient = ({ slug, courseName }) => {
  const [modules, setModules] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState('0:00');

  // Fetch API data
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/course-videos/${slug}`);
        const data = await res.json();
        if (data.success) {
          setModules(data.data);
          // Set first available video as current
          const firstVideoModule = data.data.find(
            (mod) => mod.videos.length > 0
          );
          if (firstVideoModule) {
            setCurrentVideo(firstVideoModule.videos[0]);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchVideos();
  }, [slug]);

  const changeVideo = (video) => {
    setCurrentVideo(video);
    setVideoDuration('0:00');
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const durationInSeconds = videoRef.current.duration;
      const minutes = Math.floor(durationInSeconds / 60);
      const seconds = Math.floor(durationInSeconds % 60);
      setVideoDuration(`${minutes}m ${seconds}s`);
    }
  };

  const formatDuration = (durationString) => {
    // durationString example: "13 minute" or "2m 10s"
    const match = durationString.match(/(\d+)/g); // sob number ber kore
    if (!match) return '0m 0s';

    let minutes = 0;
    let seconds = 0;

    if (match.length === 1) {
      minutes = parseInt(match[0], 10);
    } else if (match.length >= 2) {
      minutes = parseInt(match[0], 10);
      seconds = parseInt(match[1], 10);
    }

    return `${minutes}m ${seconds}s`;
  };

  return (
    <section className='videosPlaying-section'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-3 gap-2 transition-all lg:gap-8'>
          <div className='col-span-full w-full space-y-8 transition-all lg:col-span-2'>
            <div className='flex items-center gap-2 lg:gap-4'>
              <h4 className='font-bold text-[#124265] text-[16px] md:text-[20px] leading-[28px] capitalize'>
                {courseName || 'Not Available yet'}
              </h4>
            </div>

            {currentVideo && (
              <MediaPlayer
                autoplay
                crossorigin
                playsinline
                width='100%'
                height='420px'
                ref={videoRef}
                title={currentVideo.title}
                onLoadedMetadata={handleLoadedMetadata}
                src={currentVideo.video_url}
              >
                <MediaProvider />
                <DefaultVideoLayout
                  thumbnails='/videos/thumbnails.vtt'
                  icons={defaultLayoutIcons}
                />
              </MediaPlayer>
            )}

            {currentVideo && (
              <h3 className='font-semibold text-[16px] md:text-[19px] leading-[28px]'>
                Video:{' '}
                <span className='text-[#7b7b8a]'>{currentVideo?.title}</span> -
                Duration:{' '}
                <span className='text-primary'>
                  {' '}
                  {formatDuration(currentVideo?.duration)}
                </span>
              </h3>
            )}
          </div>

          <div className=' shadow-1 col-span-full h-max rounded-md   lg:col-span-1 lg:rounded-lg'>
            <div className='bg-[#e5e7eb] custom-shadow px-4 py-7 rounded-lg'>
              <div className='videos-module'>
                <div className='Course-Content flex items-center justify-between pb-4'>
                  <h4 className='font-semibold text-[16px] md:text-[20px] '>
                    Course Content
                  </h4>
                  <h5 className='font-semibold text-[16px] md:text-[20px] text-primary'>
                    {modules?.reduce((acc, m) => acc + m?.videos?.length, 0)}{' '}
                    Lessons
                  </h5>
                </div>

                {modules.map((mod, index) => (
                  <details
                    key={mod?.id}
                    className='group rounded-lg [&_summary::-webkit-details-marker]:hidden mb-[1rem] bg-white last:mb-0'
                    open={index === 0}
                  >
                    <summary className='flex items-center justify-between cursor-pointer bg-white py-[1rem] px-[1.25rem] rounded-[6px]'>
                      <h2 className='font-bold text-[#124265] text-[14px] md:text-[16px]'>
                        {mod?.module_title}{' '}
                        <span className='font-medium text-[#7b7b8a]'>
                          ({mod?.videos.length} Lectures)
                        </span>
                      </h2>
                    </summary>

                    {mod.videos.length > 0 ? (
                      <div className='mt-[1rem] pl-[1rem] pt-[0.2rem] pr-[0.5rem] pb-[0.7rem]'>
                        {mod.videos.map((video, index) => (
                          <div key={video?.id}>
                            <div className='flex justify-between items-center flex-wrap'>
                              <div className='relative flex items-center videos-name-main flex-wrap'>
                                {video?.type === 'private' ? (
                                  <Link
                                    href='/contact'
                                    className='btn-danger-soft mb-0'
                                  >
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 24 24'
                                      fill='currentColor'
                                      className='size-5 play-icons'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        d='M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z'
                                        clipRule='evenodd'
                                      />
                                    </svg>
                                  </Link>
                                ) : (
                                  <a
                                    href='#'
                                    onClick={() => changeVideo(video)}
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
                                )}
                                <span
                                  className={`inline-block truncate ml-2 mb-0 text-[15px] font-normal w-[270px] cursor-pointer ${
                                    currentVideo?.id === video?.id
                                      ? 'active-video text-[#d6293e] font-semibold text-[15px]'
                                      : ''
                                  }`}
                                  onClick={() =>
                                    video?.type === 'public' &&
                                    changeVideo(video)
                                  }
                                >
                                  {video?.title}
                                </span>
                              </div>
                              <p className='mb-0 text-[#7b7b8a] text-[14px] font-semibold flex items-center gap-2'>
                                {video?.duration}
                              </p>
                            </div>
                            {index !== mod?.videos?.length - 1 && (
                              <hr className='hr-style my-[1rem] text-[#9a9ea4]' />
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className='text-gray-400 text-center text-[14px] font-medium  pb-2'>
                        No videos available
                      </p>
                    )}
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosPlayingClient;
