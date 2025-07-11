import React from "react";

export const LandingPage = () => {
  return (
    <div id="webcrumbs">
      <div className="min-h-screen w-full bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <header className="mb-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500">
                <span className="material-symbols-outlined text-xl text-white">
                  favorite
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Hitched</h1>
            </div>
            <nav className="hidden space-x-8 md:flex">
              <a
                href="#features"
                className="text-gray-600 transition-colors hover:text-rose-500"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-600 transition-colors hover:text-rose-500"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 transition-colors hover:text-rose-500"
              >
                Contact
              </a>
            </nav>
          </header>

          <main className="mb-20 grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-rose-100 px-4 py-2">
                  <span className="material-symbols-outlined mr-2 text-rose-500">
                    auto_awesome
                  </span>
                  <span className="font-medium text-rose-700">
                    AI-Powered Wedding Planning
                  </span>
                </div>
                <h2 className="text-5xl leading-tight font-bold text-gray-900 lg:text-6xl">
                  Your Perfect Wedding,
                  <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                    {" "}
                    Planned by AI
                  </span>
                </h2>
                <p className="text-xl leading-relaxed text-gray-600">
                  Hitched transforms wedding planning with intelligent AI that
                  learns your style, manages your budget, and coordinates every
                  detail for your dream day.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                  Join the Waitlist
                </h3>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-rose-500">
                      <option>Wedding Date (Optional)</option>
                      <option>Next 6 months</option>
                      <option>6-12 months</option>
                      <option>1-2 years</option>
                      <option>2+ years</option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute top-3 right-3 text-gray-400">
                      expand_more
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full transform rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-rose-600 hover:to-pink-600 hover:shadow-xl"
                  >
                    Get Early Access
                  </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-500">
                  Be among the first 1,000 couples to experience AI-powered
                  wedding planning
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Beautiful wedding ceremony with couple exchanging vows"
                  className="h-96 w-full rounded-2xl object-cover shadow-2xl lg:h-[500px]"
                />
              </div>
              <div className="absolute -top-4 -right-4 h-24 w-24 animate-pulse rounded-full bg-gradient-to-br from-rose-400 to-pink-400 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-20"></div>
            </div>
          </main>

          <section className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:scale-105 hover:transform hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-pink-500">
                <span className="material-symbols-outlined text-white">
                  psychology
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Smart Recommendations
              </h3>
              <p className="text-gray-600">
                AI analyzes your preferences to suggest venues, vendors, and
                themes that match your vision perfectly.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:scale-105 hover:transform hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-pink-500">
                <span className="material-symbols-outlined text-white">
                  account_balance_wallet
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Budget Optimization
              </h3>
              <p className="text-gray-600">
                Intelligent budget tracking and cost optimization to maximize
                your wedding impact within your means.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:scale-105 hover:transform hover:shadow-xl md:col-span-2 lg:col-span-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-pink-500">
                <span className="material-symbols-outlined text-white">
                  schedule
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Timeline Management
              </h3>
              <p className="text-gray-600">
                Automated scheduling and reminders ensure nothing falls through
                the cracks in your planning journey.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-center text-white lg:p-12">
            <h3 className="mb-4 text-3xl font-bold lg:text-4xl">
              Ready to Start Planning?
            </h3>
            <p className="mb-8 text-xl opacity-90">
              Join thousands of couples who are already using AI to plan their
              perfect wedding.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-rose-500 bg-white"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-rose-500 bg-white"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-rose-500 bg-white"></div>
                </div>
                <span className="text-sm">2,847 couples waiting</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined">star</span>
                <span className="text-sm">Early access launching soon</span>
              </div>
            </div>
          </section>

          <footer className="mt-20 border-t border-gray-200 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-4 flex items-center space-x-3 md:mb-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500">
                  <span className="material-symbols-outlined text-sm text-white">
                    favorite
                  </span>
                </div>
                <span className="font-semibold text-gray-900">Hitched</span>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-600 transition-colors hover:text-rose-500"
                >
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors hover:text-rose-500"
                >
                  <i className="fa-brands fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors hover:text-rose-500"
                >
                  <i className="fa-brands fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>
                &copy; 2025 Hitched. All rights reserved. Made with 💕 for couples
                everywhere.
              </p>
            </div>
          </footer>
        </div>
        {/* Next: "Add testimonial section with real couple stories" */}
        {/* Next: "Add interactive demo preview of the AI planning interface" */}
        {/* Next: "Add pricing tiers and early bird discount section" */}
      </div>
    </div>
  );
};
