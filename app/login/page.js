"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Authentication failed.");
      }

      setStatus({ type: 'success', message: `Welcome back, ${data.user.name}! Redirecting to dashboard...` });
      
      // Temporary storage simulation so the application remembers who is logged in
      localStorage.setItem("solu_user", JSON.stringify(data.user));
      
      // Soon we will redirect them to their actual app dashboard file here!
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
          Sign In to Solu Study
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Track your China university scholarship application progress.
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
                {loading ? 'Verifying...' : 'Sign In'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account yet?{' '}
            <Link href="/register" className="font-medium text-amber-700 hover:text-amber-600 transition">
              Create one here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}