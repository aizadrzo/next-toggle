import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Toggle Solutions",
};

import { Check, Star, User, Mail, ChevronDown } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111827] text-gray-900 dark:text-[#f9fafb] transition-colors duration-300 flex flex-col relative overflow-hidden">
        {/* Background Dots */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 h-full [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background-image:radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <main className="flex-grow relative z-10 pb-24 pt-32 lg:pt-40">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-10 pt-4">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                  Connect with our Marketing Expert
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Please fill the form and we will connect you within 24 hours to
                  schedule a call.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-md border border-blue-500/30 flex items-center justify-center bg-blue-500/5 text-blue-500">
                    <Check className="w-4 h-4 font-bold" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Free No Obligation Consultation Call
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-md border border-blue-500/30 flex items-center justify-center bg-blue-500/5 text-blue-500">
                    <Check className="w-4 h-4 font-bold" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    No Sales Pitches & No Pressure
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-md border border-blue-500/30 flex items-center justify-center bg-blue-500/5 text-blue-500">
                    <Check className="w-4 h-4 font-bold" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Simple Pricing
                  </span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex text-blue-500 mb-3 gap-0.5">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  The marketing strategies Toggle Solutions has developed
                  perfectly reflect our company — We have received a lot of
                  positive feedback about the new campaigns and website design.
                  Toggle Solutions has managed projects well, factoring edit
                  requests into project timelines to ensure deadlines are met.
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Sarah Jenkins
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CMO, TechGrowth Inc.
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                    USA
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 pl-0 lg:pl-10">
              <div className="bg-white dark:bg-[#1f2937] p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <form action="#" className="space-y-6" method="POST">
                  <div className="space-y-1">
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="name"
                    >
                      Name *
                    </label>
                    <div className="relative">
                      <input
                        className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-0 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 transition-colors"
                        id="name"
                        name="name"
                        placeholder=""
                        required
                        type="text"
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <div className="w-6 h-6 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
                          <User className="text-teal-500 w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="email"
                    >
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-0 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 transition-colors"
                        id="email"
                        name="email"
                        placeholder=""
                        required
                        type="email"
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <div className="w-6 h-6 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
                          <Mail className="text-teal-500 w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="website"
                    >
                      Website URL *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-0 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 transition-colors"
                      id="website"
                      name="website"
                      placeholder=""
                      required
                      type="url"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="budget"
                    >
                      What's the budget for your website? *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-0 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 transition-colors"
                      id="budget"
                      name="budget"
                      placeholder=""
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="timeline"
                    >
                      When do you need this project completed? *
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-0 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 transition-colors appearance-none"
                        id="timeline"
                        name="timeline"
                        defaultValue=""
                      >
                        <option disabled value="">
                          Select one...
                        </option>
                        <option>Within 1 month</option>
                        <option>1-3 months</option>
                        <option>3+ months</option>
                        <option>No rush</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <ChevronDown className="text-gray-400 w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="requirements"
                    >
                      Share your website requirements *
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-md bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-0 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 transition-colors resize-none"
                      id="requirements"
                      name="requirements"
                      placeholder="Share your website requirements"
                      required
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    className="w-full flex justify-center py-3.5 px-6 border border-transparent rounded-md text-base font-medium text-white bg-[#1a1b2e] hover:bg-[#2e3052] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-300 shadow-md mt-2 cursor-pointer"
                    type="submit"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
