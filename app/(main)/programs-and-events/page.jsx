import React from 'react'

function ProgramsAndEvents() {
  return (
    <main className="pt-32 pb-12">
      { /* Hero Section: Editorial Asymmetry */}
      <section className="max-w-7xl mx-auto px-8 mb-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <span className="label-md uppercase tracking-[0.1em] text-secondary font-bold mb-4 block">Nurturing Souls</span>
          <h1 className="text-6xl md:text-7xl font-headline font-bold text-primary leading-tight mb-8">Sacred Knowledge <br />& Community Spirit</h1>
          <p className="text-xl text-on-surface-variant max-w-lg mb-12">Join our diverse programs designed to elevate the mind, nourish the heart, and strengthen our collective bond in the light of the Quran.</p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold shadow-ambient transition-transform hover:scale-105">Browse All Classes</button>
            <button className="text-primary font-bold px-8 py-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">Event Calendar</button>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 translate-x-4">
            <img className="w-full h-full object-cover" data-alt="interior of a modern minimalist mosque with sunlight streaming through geometric windows onto a clean carpeted floor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2yeXTzCPn57e5t83TNz2Zdyjm82sdkVK8I7Iwr226UJhCOjgdiOLg04M_m0xM2Zol1R7-tg6dCGTFd0lh-epiPuiOdksyBHXXirEW0vTBk4RjDGK_301Q1B_HpocFt7zUdHV7f2_-pX53cKFbC0idxSypk5hxfjv3BrPfkJ493gRD5K9O1o3oLXIe751IXNOcuruHjmwSW8yMSqLT6Jr0-Ib9kt29DY4KbwXjaidjN3ztOgl5cyEvhz8yvwT-l7czBsS-dgoh_5A" />
          </div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary-container rounded-3xl -z-0 pattern-overlay opacity-20" />
        </div>
      </section>
      { /* Friday Khutbah Spotlight: Glassmorphism */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="bg-primary-container rounded-[2rem] overflow-hidden relative shadow-ambient">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-90" />
          <div className="relative z-10 p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 text-secondary-container mb-6">
                <span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                <span className="font-bold tracking-widest uppercase text-sm">Friday Khutbah • This Week</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline text-on-primary font-bold mb-6">Patience as a Path to Divine Proximity</h2>
              <p className="text-on-primary-container text-lg mb-8 leading-relaxed">Join us this Friday as Imam Yusuf explores the spiritual depths of Sabr and its transformative power in the modern era.</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" data-icon="person">person</span>
                  </div>
                  <div className="text-on-primary">
                    <p className="font-bold">Imam Yusuf Al-Amin</p>
                    <p className="text-sm opacity-80">Resident Scholar</p>
                  </div>
                </div>
                <div className="h-12 w-px bg-on-primary-container/30" />
                <div className="text-on-primary">
                  <p className="font-bold">1:30 PM</p>
                  <p className="text-sm opacity-80">First Jama'ah</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="glass p-8 rounded-3xl border border-white/20 w-full max-w-xs text-primary">
                <h3 className="font-headline text-2xl font-bold mb-4">Live Stream</h3>
                <p className="text-sm mb-6 opacity-80">Can't join us in person? Access the spiritual benefits from anywhere.</p>
                <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined" data-icon="play_circle">play_circle</span> Watch Live
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      { /* Learning Streams: Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="label-md uppercase tracking-[0.1em] text-secondary font-bold mb-2 block">Learning Streams</span>
            <h2 className="text-4xl font-headline font-bold text-primary">Nurturing Generations</h2>
          </div>
          <p className="text-on-surface-variant max-w-xs text-sm italic">"The best of you are those who learn the Quran and teach it."</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          { /* Children's Learning */}
          <div className="md:col-span-2 lg:col-span-3 bg-surface-container-low rounded-[2rem] p-8 flex flex-col justify-between group hover:bg-white hover:shadow-ambient transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined" data-icon="child_care">child_care</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-4">Children's Madrasah</h3>
              <p className="text-on-surface-variant mb-8">Foundational Islamic education for ages 5-13, focusing on character (Akhlaq) and Quranic recitation in a fun environment.</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary">Enrolling Now</span>
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
          { /* Quran Classes */}
          <div className="md:col-span-2 lg:col-span-3 bg-primary text-on-primary rounded-[2rem] p-8 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-4">Adult Quran Studies</h3>
              <p className="text-on-primary-container/80 mb-8">Tajweed mastery and Tafseer sessions designed for busy professionals. Evening and weekend cohorts available.</p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold">Beginner</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold">Intermediate</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold">Advanced</span>
              </div>
            </div>
          </div>
          { /* Community Education */}
          <div className="md:col-span-4 lg:col-span-4 bg-surface-container-highest rounded-[2rem] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-headline font-bold mb-4">Community Seminars</h3>
              <p className="text-on-surface-variant mb-6">Monthly workshops covering contemporary issues, financial literacy (Zakat & Shariah finance), and mental well-being.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
                  Guest Lecturers
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
                  Interactive Q&A
                </li>
              </ul>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover" data-alt="a diverse group of adults sitting in a circle in a sunlit room, engaged in a discussion with a sense of community and focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq-4K6MYSZFsH2dnECkpSFQFJVb3dLUe8ypMwgj7GfAY5oiHhS-mqvbwCadowZkMyU8Hm-Gq1QKbvim-OstI5gTfsKekdSeBKs2pmKMtsKzRSQGAmftUCY8pFpE5ek5gWmXLoSK99E-BURWSU-IWPXBpipbERgl2dUI_WLIXcod7HzKX_gzAyLopnoZicXD9CJcRAr_pqO4PDuRmfIGUqSE6syAn-K2v4MtiHRf06uMjTY5OfLQOi2xJFW-36I40UiV4XOXtsTiys" />
            </div>
          </div>
          { /* Quick Action Stats */}
          <div className="md:col-span-2 lg:col-span-2 bg-secondary-container rounded-[2rem] p-8 flex flex-col justify-center text-on-secondary-container text-center">
            <span className="text-4xl font-headline font-bold mb-2">450+</span>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70 mb-6">Active Students</p>
            <div className="h-px bg-on-secondary-container/20 w-full mb-6" />
            <span className="text-4xl font-headline font-bold mb-2">12</span>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Dedicated Instructors</p>
          </div>
        </div>
      </section>
      { /* Upcoming Events: Clean Horizontal Cards */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="mb-12">
          <span className="label-md uppercase tracking-[0.1em] text-secondary font-bold mb-2 block">Mark Your Calendar</span>
          <h2 className="text-4xl font-headline font-bold text-primary">Upcoming Community Events</h2>
        </div>
        <div className="space-y-6">
          { /* Event 1 */}
          <div className="bg-surface-container-low rounded-3xl p-6 flex flex-col md:flex-row gap-8 items-center hover:bg-surface-container-high transition-colors group cursor-pointer">
            <div className="w-full md:w-32 h-32 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm">
              <span className="text-3xl font-headline font-bold text-primary">15</span>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">October</span>
            </div>
            <div className="flex-grow">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">Youth Social</span>
              <h3 className="text-xl font-headline font-bold mb-1">Youth Soccer & Spiritual Circle</h3>
              <p className="text-on-surface-variant text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
                Community Sports Center • 4:00 PM - 7:00 PM
              </p>
            </div>
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-white text-primary px-6 py-3 rounded-xl font-bold border border-outline-variant group-hover:bg-primary group-hover:text-white transition-all">Register</button>
            </div>
          </div>
          { /* Event 2 */}
          <div className="bg-surface-container-low rounded-3xl p-6 flex flex-col md:flex-row gap-8 items-center hover:bg-surface-container-high transition-colors group cursor-pointer">
            <div className="w-full md:w-32 h-32 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm">
              <span className="text-3xl font-headline font-bold text-primary">22</span>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">October</span>
            </div>
            <div className="flex-grow">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">Community Kitchen</span>
              <h3 className="text-xl font-headline font-bold mb-1">Serving Our Neighbors Meal Drive</h3>
              <p className="text-on-surface-variant text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
                Sanctuary Kitchen • 10:00 AM onwards
              </p>
            </div>
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-white text-primary px-6 py-3 rounded-xl font-bold border border-outline-variant group-hover:bg-primary group-hover:text-white transition-all">Volunteer</button>
            </div>
          </div>
          { /* Event 3 */}
          <div className="bg-surface-container-low rounded-3xl p-6 flex flex-col md:flex-row gap-8 items-center hover:bg-surface-container-high transition-colors group cursor-pointer">
            <div className="w-full md:w-32 h-32 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm">
              <span className="text-3xl font-headline font-bold text-primary">02</span>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">November</span>
            </div>
            <div className="flex-grow">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">Sisters Network</span>
              <h3 className="text-xl font-headline font-bold mb-1">Quranic Arabic for Beginners Workshop</h3>
              <p className="text-on-surface-variant text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
                Seminar Room A • 6:30 PM - 8:30 PM
              </p>
            </div>
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-white text-primary px-6 py-3 rounded-xl font-bold border border-outline-variant group-hover:bg-primary group-hover:text-white transition-all">Book Spot</button>
            </div>
          </div>
        </div>
      </section>
      { /* Newsletter / CTA */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="bg-stone-100 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-[0.03]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Stay Connected with the Sanctuary</h2>
            <p className="text-on-surface-variant mb-8 italic">Receive weekly updates on classes, events, and community news directly in your inbox.</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input className="flex-grow px-6 py-4 rounded-xl border-none bg-white focus:ring-2 focus:ring-secondary text-on-surface" placeholder="Your email address" type="email" />
              <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity" type="submit">Join Mailing List</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProgramsAndEvents