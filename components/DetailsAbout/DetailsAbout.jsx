'use client';

import { useState } from 'react';
import './DetailsAbout.css';

const DetailsAbout = ({ course }) => {
  const [showFull, setShowFull] = useState(false);

  const description = course?.description;

  return (
    <div className='relative'>
      <div className='border border-[#dee2e6] rounded-xl p-6'>
        <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
          Details About the course
        </h2>

        {description ? (
          <div className='relative'>
            {/* Show only part of description if showFull is false */}
            <div
              className={`text-gray-700 description-p text-[15px] mb-4 font-medium ${
                !showFull ? 'line-clamp-6' : ''
              }`}
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {/* Read More / Summarize button */}
            <div className='text-center absolute bottom-[-52px] left-1/2 flex translate-x-[-50%] items-center'>
              <button
                onClick={() => setShowFull(!showFull)}
                className='font-medium text-sm text-gray-500 bg-white hover:bg-primary hover:text-white px-5 py-[6px] rounded-full transition shadow-[0px_0px_17.0361px_#E7EAF7] cursor-pointer'
              >
                {showFull ? 'Summarize' : 'Read More'}
              </button>
            </div>
          </div>
        ) : (
          <p className='text-center text-gray-500 italic bg-gray-50 border border-gray-200 rounded-lg p-4'>
            No description available
          </p>
        )}
      </div>
    </div>
  );
};

export default DetailsAbout;
