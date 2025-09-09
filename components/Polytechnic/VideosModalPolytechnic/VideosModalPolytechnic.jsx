'use client';

const VideosModalPolytechnic = ({ video_url, video_title }) => {
  return (
    <div>
      {/* Modal toggle (hidden checkbox) */}
      <input type='checkbox' id='video_modal_poly' className='modal-toggle' />

      {/* Modal */}
      <div className='modal'>
        <div className='modal-box relative max-w-2xl bg-white rounded-2xl'>
          {/* Close button at top-right */}
          <label
            htmlFor='video_modal_poly'
            className='btn btn-sm btn-circle absolute right-2 top-2 bg-primary border-0'
          >
            ✕
          </label>

          {/* Title */}
          <h3 className='text-base font-semibold mb-2'>{video_title}</h3>
          <hr className='border-t-2 border-gray-300 mb-2' />

          {/* Video */}
          <div className='pt-3'>
            {video_url ? (
              <iframe
                width='100%'
                height='315'
                src={video_url}
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

export default VideosModalPolytechnic;
