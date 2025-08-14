'use client';

import Lottie from 'lottie-react';
import { useState } from 'react';

export default function EmptyState({ animationData, message }) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className='text-center'>
      <div className='w-96 h-56 mx-auto'>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={isPlaying}
        />
      </div>
      <p className='text-gray-500 mt-4'>{message}</p>
    </div>
  );
}
