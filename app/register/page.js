"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', whatsapp: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({ type: 'success', message: 'Account created successfully! You can now track your application.' });
      setFormData({ name: '', email: '', password: '', whatsapp: '' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto w-full max-w-md">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-950">
          Create Your Scholar Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Start your journey toward studies and scholarships in China.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto w-full max-w-md">
        <div className="bg-white py-8 px-4 border border-gray-200 sm:rounded-xl sm:px-10 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {status.message && (
              <div className={`p-4 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {status.message}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name (As shown on passport)</label>
              <input
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-sm text-gray-900"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-sm text-gray-900"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">WhatsApp Number (With Country Code)</label>
              <input
                type="text"
                placeholder="+231..."
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-sm text-gray-900"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-sm text-gray-900"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-950 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-150 disabled:bg-gray-400"
              >
                {loading ? 'Processing...' : 'Register as Applicant'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            By registering, you acknowledge your core process service tracking fee breakdown ($350 total split quarterly).
          </div>
        </div>
      </div>
    </div>
  );
}