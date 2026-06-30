import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-gray-900 font-sans antialiased">
      
      {/* 1. HERO SECTION & TRUST ANCHOR */}
      <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase bg-amber-100 text-amber-900 rounded-full">
              Founded by a Liberian Student in China
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-950 mb-6">
              Your Gateway to 50% – 100% Scholarships in China
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Navigating international admissions alone is hard. I stood exactly where you are standing today. 
              I built this platform to ensure talented Liberian students can secure life-changing scholarships 
              and build a better tomorrow, completely stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gray-950 text-white font-medium tracking-wide rounded-lg hover:bg-gray-800 transition duration-200 text-center">
                Create Account & Apply
              </button>
              <a href="#pricing" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 font-medium tracking-wide rounded-lg hover:bg-gray-50 transition duration-200 text-center">
                View Pricing & Process
              </a>
            </div>
          </div>
          
          {/* Personal Bio Card (Trust Anchor) */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-6 mx-auto md:mx-0 flex items-center justify-center text-gray-400 font-medium">
              [Your Photo]
            </div>
            <blockquote className="text-gray-700 italic border-l-2 border-amber-500 pl-4 mb-4">
              "I’m currently studying in China and fully willing to help bring my brothers and sisters here to pursue their dreams. We handle the hard parts so you can focus on your future."
            </blockquote>
            <p className="font-semibold text-gray-950">— Jamel, Founder of Solu Study</p>
          </div>
        </div>
      </section>

      {/* 2. THE SCHOLARSHIP OPPORTUNITIES */}
      <section className="px-6 py-20 max-w-7xl mx-auto border-b border-gray-200">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Available Scholarships</h2>
          <p className="mt-4 text-lg text-gray-600">We align your credentials with competitive options matching your academic background.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-gray-200 rounded-xl">
            <h3 className="text-xl font-bold text-gray-950 mb-2">100% Full Scholarships</h3>
            <p className="text-gray-600 mb-4">Complete financial freedom. Covers 100% tuition, free university accommodation, and a monthly living stipend.</p>
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Highly Competitive</span>
          </div>
          <div className="p-8 bg-white border border-gray-200 rounded-xl">
            <h3 className="text-xl font-bold text-gray-950 mb-2">50% – 80% Partial Scholarships</h3>
            <p className="text-gray-600 mb-4">Substantial support. Covers a massive portion of tuition and provides highly subsidized campus housing rates.</p>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">High Acceptance Rate</span>
          </div>
        </div>
      </section>

      {/* 3. THE SEPARATE CSCA TEST MODULE */}
      <section className="px-6 py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-amber-700">Separate Track Assistance</span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 mt-2 mb-6">CSCA Exam Registration & Prep</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The CSCA exam is a vital step for your successful migration and study processing. We don't just leave you to figure it out. For a flat **$30 registration fee**, we unlock your complete pathway to success.
            </p>
            <ul className="space-y-4 text-gray-700 mb-6">
              <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span> Step-by-step registration and voucher handling.</li>
              <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span> Comprehensive exam study guides and resources.</li>
              <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span> **Testing Location Recommendation:** We route you to verified partner testing centers in Liberia equipped with secure **Starlink Internet and uninterrupted computer access**. Just walk in and focus entirely on your exam.</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">CSCA Support Fee</p>
            <p className="text-5xl font-bold text-gray-950 my-4">$30</p>
            <p className="text-sm text-gray-600">Paid separately from core processing fees. Covers portal registration, guides, and testing hub scheduling.</p>
          </div>
        </div>
      </section>

      {/* 4. TRANSPARENT QUARTERLY PRICING */}
      <section id="pricing" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Transparent Milestone Pricing</h2>
          <p className="mt-4 text-lg text-gray-600">To build total confidence, our core **$350 processing fee** is split evenly across four quarters based on real progress.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-gray-200 rounded-xl relative">
            <span className="absolute top-4 right-4 font-mono font-bold text-gray-300 text-xl">Q1</span>
            <h4 className="font-bold text-gray-950 mb-1">Quarter 1</h4>
            <p className="text-xs text-gray-500 mb-4">Onboarding & Audit</p>
            <p className="text-2xl font-bold text-gray-950 mb-2">$87.50</p>
            <p className="text-sm text-gray-600">Paid upon creating account. Profile assessment and secure document collection/verification.</p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl relative">
            <span className="absolute top-4 right-4 font-mono font-bold text-gray-300 text-xl">Q2</span>
            <h4 className="font-bold text-gray-950 mb-1">Quarter 2</h4>
            <p className="text-xs text-gray-500 mb-4">University Submission</p>
            <p className="text-2xl font-bold text-gray-950 mb-2">$87.50</p>
            <p className="text-sm text-gray-600">Paid once documents are approved. Matching with universities and official application submittal.</p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl relative">
            <span className="absolute top-4 right-4 font-mono font-bold text-gray-300 text-xl">Q3</span>
            <h4 className="font-bold text-gray-950 mb-1">Quarter 3</h4>
            <p className="text-xs text-gray-500 mb-4">Admission Tracking</p>
            <p className="text-2xl font-bold text-gray-950 mb-2">$87.50</p>
            <p className="text-sm text-gray-600">Paid upon official selection. Processing and securing your Chinese JW202 visa/admission forms.</p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl relative">
            <span className="absolute top-4 right-4 font-mono font-bold text-gray-300 text-xl">Q4</span>
            <h4 className="font-bold text-gray-950 mb-1">Quarter 4</h4>
            <p className="text-xs text-gray-500 mb-4">Visa & Pre-Departure</p>
            <p className="text-2xl font-bold text-gray-950 mb-2">$87.50</p>
            <p className="text-sm text-gray-600">Paid after admission notice arrives. Embassy visa processing prep and departure orientation.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 bg-white">
        © 2026 Solu Study. Built to empower Liberian scholars.
      </footer>
    </div>
  );
}