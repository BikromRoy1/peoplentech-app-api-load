'use client';

import { useState } from 'react';

const DetailsAbout = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <div className='relative'>
      <div className='border border-[#dee2e6] rounded-xl p-6'>
        <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
          Details About the course
        </h2>

        {/* Always visible content */}
        <div>
          <p className='text-gray-700 text-[15px] mb-4 font-medium'>
            This Oracle Database Administration course provides students with
            the knowledge and skills to capitalize on their skills and
            experience as a DBA to manage an Oracle Server system.
          </p>
          <p className='text-gray-700 text-[15px] mb-4 font-medium'>
            This Oracle DBA training course is an intensive hands-on course
            designed to provide Oracle professionals with an in-depth
            understanding of the DBA features of Oracle, specific Oracle
            concepts and knowledge required for the OCP exam, and tips and
            techniques for passing the Oracle OCP exam on your first attempt.
          </p>
          <p className='text-gray-700 text-[15px] mb-4 font-medium'>
            Broad in scope, this course covers all of the Oracle Database
            Administration topics including SGA instance management, file &
            tablespace management, user administration & security, and table &
            index management.
          </p>
          <p className='text-gray-700 text-[15px] mb-4 font-medium'>
            Hands-on exercises are used to demonstrate each feature, and the
            student will gain first-hand experience with the key Oracle DBA
            concepts required to pass the Oracle OCP exam. In addition, this
            course provides sample OCP exam questions and an opportunity to
            assess your overall knowledge of Oracle DBA concepts.
          </p>
        </div>
        {/* Hidden content - show only if showFull is true */}
        {showFull && (
          <div>
            <p className='text-gray-700 text-[15px] mb-4 font-medium'>
              This course is intended for those who want to work as Database
              Administrators. This course covers Oracle Database Administration
              DBA 12C/19C.
            </p>
            <p className='text-gray-700 text-[15px] mb-4 font-medium'>
              Oracle Database Administration (DBA) is the management and
              maintenance of Oracle database systems. DBAs use Oracles database
              software to store and organize data and ensure that it is secure
              and accessible. You’ll develop your skills by learning all of
              these from our best oracle database administration course in
              Bangladesh
            </p>
          </div>
        )}
        <div className='text-center absolute bottom-[-17px] left-1/2 flex translate-x-[-50%] items-center'>
          <button
            onClick={() => setShowFull(!showFull)}
            className='font-medium text-sm text-gray-500 bg-white hover:bg-primary hover:text-white px-5 py-[6px] rounded-full transition shadow-[0px_0px_17.0361px_#E7EAF7] cursor-pointer'
          >
            {showFull ? 'Summarize' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsAbout;
