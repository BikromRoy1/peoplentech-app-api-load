'use client';
import { useState } from 'react';
import { FaRegFileLines } from 'react-icons/fa6';
import { GrDocumentStore } from 'react-icons/gr';
import { MdOutlineRequestQuote } from 'react-icons/md';

import './CourseModules.css';

const CourseModules = ({ course }) => {
  const [showAll, setShowAll] = useState(false);
  const modules = course?.courseModules || [];

  const visibleModules = showAll ? modules : modules.slice(0, 5);

  return (
    <div className='mt-10 relative'>
      <div className='border border-[#dee2e6] rounded-xl p-6'>
        <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
          Course Modules
        </h2>

        {modules.length === 0 ? (
          <p className='text-center text-gray-500'>No modules available</p>
        ) : (
          visibleModules.map((module, index) => (
            <div
              key={module?.id}
              className={`collapse collapse-plus bg-base-100 border border-[#e2e8ec] rounded-lg ${
                index === visibleModules.length - 1 ? 'mb-0' : 'mb-4'
              }`}
            >
              <input
                type='radio'
                name='course-modules-accordion'
                defaultChecked={index === 0}
              />
              <div className='collapse-title font-semibold'>
                Module-{index + 1} : {module.module_name}
                <div>
                  <div className='flex items-center gap-4 mt-[5px]'>
                    <div className='flex items-center gap-1.5'>
                      <FaRegFileLines className='text-orange-600' />
                      <span className='text-orange-600 text-[14px] font-medium'>
                        Class - {module.class || '0'}
                      </span>
                    </div>
                    <div className='flex items-center gap-1.5'>
                      <MdOutlineRequestQuote className='text-orange-600' />
                      <span className='text-orange-600 text-[14px] font-medium'>
                        Quiz - {module.quiz || '0'}
                      </span>
                    </div>
                    <div className='flex items-center gap-1.5'>
                      <GrDocumentStore className='text-orange-600' />
                      <span className='text-orange-600 text-[14px] font-medium'>
                        Assignment - {module.assignment || '0'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='collapse-content text-sm'>
                {module?.topic ? (
                  <div
                    className='whitespace-pre-line text-[15px] text-neutral-700 leading-relaxed course-module-topic'
                    dangerouslySetInnerHTML={{ __html: module.topic }}
                  ></div>
                ) : (
                  <p className='text-gray-500'>No topic details available</p>
                )}
              </div>
            </div>
          ))
        )}

        {/* Button - 5   modules show */}
        {modules.length > 5 && (
          <div className='text-center absolute -bottom-4 left-1/2 flex translate-x-[-50%] items-center'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='font-medium text-sm text-gray-500 bg-white hover:bg-primary hover:text-white px-5 py-[6px] rounded-full transition shadow-[0px_0px_17.0361px_#E7EAF7] cursor-pointer'
            >
              {showAll ? 'Summarize' : 'Read More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseModules;
