'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function CoursePagination({ courses }) {
  const categories = Array.from(
    new Set(courses.map((c) => c.category).filter(Boolean))
  );
  const types = Array.from(
    new Set(courses.map((c) => c.course_type).filter(Boolean))
  );
  const levels = Array.from(
    new Set(courses.map((c) => c.course_label).filter(Boolean))
  );

  const [categoryFilter, setCategoryFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState([]);
  const [levelFilter, setLevelFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const coursesPerPage = 12;

  // Filtered courses
  const filteredCourses = courses.filter((course) => {
    const categoryMatch = categoryFilter
      ? course.category === categoryFilter
      : true;
    const typeMatch =
      typeFilter.length > 0 ? typeFilter.includes(course.course_type) : true;
    const levelMatch =
      levelFilter.length > 0 ? levelFilter.includes(course.course_label) : true;
    return categoryMatch && typeMatch && levelMatch;
  });

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handleCategoryChange = (value) => {
    setLoading(true);
    setCategoryFilter(categoryFilter === value ? '' : value);
    setCurrentPage(1);
  };

  const handleMultiSelect = (filterArray, setFilterArray, value) => {
    setLoading(true);
    if (filterArray.includes(value)) {
      setFilterArray(filterArray.filter((item) => item !== value));
    } else {
      setFilterArray([...filterArray, value]);
    }
    setCurrentPage(1);
  };

  // Loader timeout simulation
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 300); // 300ms loader
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 300);
  };

  return (
    <div className='md:grid md:grid-cols-12 md:gap-6'>
      {/* Sidebar Filters */}
      <div className='md:col-span-3 mb-6 md:mb-0'>
        <div className='bg-[#F5F7FC] rounded-[8px] p-5 border border-[#E0E5EB]'>
          <h3 className='text-lg font-semibold mb-2'>Course Categories</h3>
          {categories.map((cat) => (
            <div key={cat} className='flex items-center gap-2 p-1.5'>
              <input
                id={`category-${cat}`}
                type='checkbox'
                checked={categoryFilter === cat}
                onChange={() => handleCategoryChange(cat)}
                className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
              />
              <label
                htmlFor={`category-${cat}`}
                className='text-sm cursor-pointer'
              >
                {cat}
              </label>
            </div>
          ))}

          <h3 className='text-lg font-semibold mb-2 mt-4'>Course Types</h3>
          {types.map((type) => (
            <div key={type} className='flex items-center gap-2 p-1.5'>
              <input
                type='checkbox'
                id={`type-${type}`}
                checked={typeFilter.includes(type)}
                onChange={() =>
                  handleMultiSelect(typeFilter, setTypeFilter, type)
                }
                className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
              />
              <label
                htmlFor={`type-${type}`}
                className='text-sm cursor-pointer'
              >
                {type}
              </label>
            </div>
          ))}

          <h3 className='text-lg font-semibold mb-2 mt-4'>Course Levels</h3>
          {levels.map((level) => (
            <div key={level} className='flex items-center gap-2 p-1.5'>
              <input
                type='checkbox'
                id={`level-${level}`}
                checked={levelFilter.includes(level)}
                onChange={() =>
                  handleMultiSelect(levelFilter, setLevelFilter, level)
                }
                className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
              />
              <label
                htmlFor={`level-${level}`}
                className='text-sm cursor-pointer'
              >
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Grid + Loader */}
      <div className='md:col-span-9'>
        {loading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='rounded-[10px] border border-[#E0E5EB] px-5 py-4'>
              <div className='relative successStudents-items animate-pulse'>
                <div
                  className='w-full h-48 rounded-[10px] flex justify-center items-center'
                  style={{ backgroundColor: '#04a9ff33' }}
                >
                  <svg
                    className='w-8 h-8 stroke-[#4fc3ff]'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z'
                      stroke='stroke-current'
                      strokeWidth='1.6'
                      strokeLinecap='round'
                    ></path>
                  </svg>{' '}
                </div>

                <div className='mt-4'>
                  <div
                    className='h-4 rounded w-full mb-2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                  <div className='flex justify-between gap-5 mt-2 items-center'>
                    <div
                      className='h-3 rounded  w-48'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-2 rounded w-32'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                  <div className='flex justify-between gap-5 items-center'>
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='rounded-[10px] border border-[#E0E5EB] px-5 py-4'>
              <div className='relative successStudents-items animate-pulse'>
                <div
                  className='w-full h-48 rounded-[10px] flex justify-center items-center'
                  style={{ backgroundColor: '#04a9ff33' }}
                >
                  <svg
                    className='w-8 h-8 stroke-[#4fc3ff]'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z'
                      stroke='stroke-current'
                      strokeWidth='1.6'
                      strokeLinecap='round'
                    ></path>
                  </svg>{' '}
                </div>

                <div className='mt-4'>
                  <div
                    className='h-4 rounded w-full mb-2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                  <div className='flex justify-between gap-5 mt-2 items-center'>
                    <div
                      className='h-3 rounded  w-48'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-2 rounded w-32'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                  <div className='flex justify-between gap-5 items-center'>
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='rounded-[10px] border border-[#E0E5EB] px-5 py-4'>
              <div className='relative successStudents-items animate-pulse'>
                <div
                  className='w-full h-48 rounded-[10px] flex justify-center items-center'
                  style={{ backgroundColor: '#04a9ff33' }}
                >
                  <svg
                    className='w-8 h-8 stroke-[#4fc3ff]'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z'
                      stroke='stroke-current'
                      strokeWidth='1.6'
                      strokeLinecap='round'
                    ></path>
                  </svg>{' '}
                </div>

                <div className='mt-4'>
                  <div
                    className='h-4 rounded w-full mb-2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                  <div className='flex justify-between gap-5 mt-2 items-center'>
                    <div
                      className='h-3 rounded  w-48'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-2 rounded w-32'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                  <div className='flex justify-between gap-5 items-center'>
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='rounded-[10px] border border-[#E0E5EB] px-5 py-4'>
              <div className='relative successStudents-items animate-pulse'>
                <div
                  className='w-full h-48 rounded-[10px] flex justify-center items-center'
                  style={{ backgroundColor: '#04a9ff33' }}
                >
                  <svg
                    className='w-8 h-8 stroke-[#4fc3ff]'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z'
                      stroke='stroke-current'
                      strokeWidth='1.6'
                      strokeLinecap='round'
                    ></path>
                  </svg>{' '}
                </div>

                <div className='mt-4'>
                  <div
                    className='h-4 rounded w-full mb-2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                  <div className='flex justify-between gap-5 mt-2 items-center'>
                    <div
                      className='h-3 rounded  w-48'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-2 rounded w-32'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                  <div className='flex justify-between gap-5 items-center'>
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='rounded-[10px] border border-[#E0E5EB] px-5 py-4'>
              <div className='relative successStudents-items animate-pulse'>
                <div
                  className='w-full h-48 rounded-[10px] flex justify-center items-center'
                  style={{ backgroundColor: '#04a9ff33' }}
                >
                  <svg
                    className='w-8 h-8 stroke-[#4fc3ff]'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z'
                      stroke='stroke-current'
                      strokeWidth='1.6'
                      strokeLinecap='round'
                    ></path>
                  </svg>{' '}
                </div>

                <div className='mt-4'>
                  <div
                    className='h-4 rounded w-full mb-2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                  <div className='flex justify-between gap-5 mt-2 items-center'>
                    <div
                      className='h-3 rounded  w-48'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-2 rounded w-32'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                  <div className='flex justify-between gap-5 items-center'>
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='rounded-[10px] border border-[#E0E5EB] px-5 py-4'>
              <div className='relative successStudents-items animate-pulse'>
                <div
                  className='w-full h-48 rounded-[10px] flex justify-center items-center'
                  style={{ backgroundColor: '#04a9ff33' }}
                >
                  <svg
                    className='w-8 h-8 stroke-[#4fc3ff]'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z'
                      stroke='stroke-current'
                      strokeWidth='1.6'
                      strokeLinecap='round'
                    ></path>
                  </svg>{' '}
                </div>

                <div className='mt-4'>
                  <div
                    className='h-4 rounded w-full mb-2'
                    style={{ backgroundColor: '#04a9ff33' }}
                  />
                  <div className='flex justify-between gap-5 mt-2 items-center'>
                    <div
                      className='h-3 rounded  w-48'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-2 rounded w-32'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                  <div className='flex justify-between gap-5 items-center'>
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                    <div
                      className='h-8 rounded-full w-2/5 mt-6'
                      style={{ backgroundColor: '#04a9ff33' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
              {currentCourses.map((course) => (
                <div
                  key={course?.id}
                  className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'
                >
                  <div className='px-[20px]'>
                    <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                      <img
                        className=' w-full h-full object-cover'
                        src={course?.image || '/image/Course/default.jpg'}
                        alt={course?.name}
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <Link href={`/course/${course?.slug}`}>
                        {course?.name}
                      </Link>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        {course?.offline_price ? (
                          <h3>
                            <span className='text-primary font-semibold text-[17px]'>
                              ৳{' '}
                              {course?.offline_discount_price ||
                                course?.offline_price}
                            </span>
                            {course?.offline_discount_price && (
                              <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                                ৳ {course?.offline_price}
                              </del>
                            )}
                          </h3>
                        ) : (
                          <h3 className='text-[15px] font-medium text-primary'>
                            ৳ 00
                          </h3>
                        )}
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <FaStar className='text-[#ffc000]' />
                        <span className='text-[#162726] text-[15px] font-medium'>
                          4.5(50)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between px-[20px] pb-[20px]'>
                    <a
                      target='_blank'
                      href={course?.registration_link}
                      className='text-white bg-primary border border-primary font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                    >
                      Registration
                    </a>
                    <Link
                      className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                      href={`/course/${course?.slug}`}
                    >
                      View Details{' '}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className='flex justify-center items-center gap-2 mt-7'>
                {/* Previous */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1 || loading}
                  className='px-3 py-1 rounded border hover:bg-gray-200 disabled:opacity-50 cursor-pointer'
                >
                  Previous
                </button>

                {/* Page Numbers with Ellipsis */}
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(
                    (page) =>
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1) ||
                      page === currentPage - 2 ||
                      page === currentPage + 2
                  )
                  .reduce((acc, page, i, arr) => {
                    if (i > 0 && page - arr[i - 1] > 1) {
                      acc.push('...');
                    }
                    acc.push(page);
                    return acc;
                  }, [])
                  .map((page, index) =>
                    page === '...' ? (
                      <span key={`dots-${index}`} className='px-2'>
                        ...
                      </span>
                    ) : (
                      <button
                        key={`page-${page}`}
                        onClick={() => handlePageChange(page)}
                        disabled={loading}
                        className={`px-3 py-1 rounded border cursor-pointer ${
                          currentPage === page
                            ? 'bg-blue-500 text-white'
                            : 'hover:bg-gray-200'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                {/* Next */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || loading}
                  className='px-3 py-1 rounded border hover:bg-gray-200 disabled:opacity-50 cursor-pointer'
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
