'use client';

import { API_BASE_URL } from '@/app/lib/config';
import { useState } from 'react';

const SeminarRegistrationForm = ({ seminarId, courseId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState('');

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,14}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10-14 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' }); // remove error on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageText('');

    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/seminar-registration`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seminar_id: seminarId,
          course: courseId,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message || null,
        }),
      });

      if (!res.ok) throw new Error('Registration failed!');

      setMessageText('✅ রেজিস্ট্রেশন সফল হয়েছে!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setMessageText('❌ রেজিস্ট্রেশন ব্যর্থ হয়েছে!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='border border-[#dee2e6] rounded-xl px-6 py-8'>
      <div className='mb-6'>
        <h1 className='text-2xl/tight mb-3 font-semibold font-siliguri capitalize'>
          সম্পূর্ণ ফ্রি-তে রেজিস্ট্রেশন করুন
        </h1>
      </div>
      <form onSubmit={handleSubmit} className='space-y-5'>
        <div>
          <label htmlFor='name' className='font-medium text-sm block mb-2'>
            Full name
          </label>
          <input
            id='name'
            type='text'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter Your Name'
            className={`text-gray-500 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:ring-0 focus:outline-none focus:border-primary text-sm rounded-lg py-2.5 px-4 w-full`}
          />
          {errors.name && (
            <p className='text-red-500 text-xs mt-1'>{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor='email' className='font-medium text-sm block mb-2'>
            Email Address
          </label>
          <input
            id='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Your Email'
            className={`text-gray-500 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:ring-0 focus:outline-none focus:border-primary text-sm rounded-lg py-2.5 px-4 w-full`}
          />
          {errors.email && (
            <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor='phone' className='font-medium text-sm block mb-2'>
            Phone Number
          </label>
          <input
            id='phone'
            type='text'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Enter Your Phone'
            className={`text-gray-500 border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:ring-0 focus:outline-none focus:border-primary text-sm rounded-lg py-2.5 px-4 w-full`}
          />
          {errors.phone && (
            <p className='text-red-500 text-xs mt-1'>{errors.phone}</p>
          )}
        </div>
        <button
          type='submit'
          disabled={loading}
          className='w-full font-siliguri px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide bg-primary text-white cursor-pointer disabled:opacity-50'
        >
          {loading ? 'Submitting...' : 'রেজিস্ট্রেশন করুন'}
        </button>
      </form>
      {messageText && <p className='mt-4 text-center text-sm'>{messageText}</p>}
    </div>
  );
};

export default SeminarRegistrationForm;
