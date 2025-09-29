'use client';

import { useState } from 'react';

const VideosModal = ({ video_url, video_title }) => {
  const [videoSrc, setVideoSrc] = useState(video_url || '');

  const handleClose = () => {
    setVideoSrc(''); // modal close -> video বন্ধ
  };

  const handleOpen = () => {
    setVideoSrc(video_url); // modal open -> আবার set করো
  };

  return (
    <div>
      {/* Modal toggle */}
      <input
        type='checkbox'
        id='video_modal'
        className='modal-toggle'
        onChange={(e) => {
          if (e.target.checked) {
            handleOpen();
          } else {
            handleClose();
          }
        }}
      />

      {/* Modal */}
      <div className='modal'>
        <div className='modal-box relative max-w-2xl bg-white rounded-2xl'>
          {/* Close button */}
          <label
            htmlFor='video_modal'
            className='btn btn-sm btn-circle absolute right-2 top-2 bg-secondary text-white border-0'
          >
            ✕
          </label>

          {/* Title */}
          <h3 className='text-base font-semibold mb-2'>{video_title}</h3>
          <hr className='border-t-2 border-gray-300 mb-2' />

          {/* Video */}
          <div className='pt-3'>
            {videoSrc ? (
              <iframe
                width='100%'
                height='315'
                src={videoSrc}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
                className='rounded-lg'
              ></iframe>
            ) : (
              <p className='text-center text-gray-500'>No video available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosModal;
