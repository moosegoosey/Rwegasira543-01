'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [status, setStatus] = useState<string>('');

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        reset();
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="text-white w-full">
      {/* Title */}
      <h2 className="text-7xl font-bold leading-tight">
        LET&apos;S WORK
        <br />
        <span className="text-gray-600">TOGETHER</span>
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-400 text-sm mb-2 block">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              placeholder="Your Name"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="text-gray-400 text-sm mb-2 block">Email</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
              })}
              type="email"
              placeholder="Your@email.com"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="text-gray-400 text-sm mb-2 block">Budget</label>
          <select
            {...register('budget', { required: 'Please select a budget' })}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
          >
            <option value="">Select...</option>
            <option value="<$3k">&lt;$3k</option>
            <option value="$3k-$5k">$3k - $5k</option>
            <option value="$5k-$10k">$5k - $10k</option>
            <option value=">$10k">&gt;$10k</option>
          </select>
          {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="text-gray-400 text-sm mb-2 block">Message</label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            placeholder="Message"
            rows={5}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 resize-y"
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>

        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>
    </section>
  );
};

export default ContactForm;