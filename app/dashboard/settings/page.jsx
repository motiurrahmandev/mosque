"use client";
import { useDashboard } from "../components/DashboardContext";

function SettingsPage() {
  const { toggleSidebar } = useDashboard();

  return (
    <main className="lg:ml-64 p-4 md:p-8 pt-16 min-h-screen">
      <div className="breath-of-infinite max-w-6xl mx-auto">
        {/* Breadcrumbs & Title */}
        <nav className="mb-2 flex items-center gap-4">
          <button 
              onClick={toggleSidebar}
              className="lg:hidden p-2 -ml-2 text-stone-500 hover:bg-stone-100 rounded-full"
          >
              <span className="material-symbols-outlined">menu</span>
          </button>
          <ol className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone-400">
            <li>অ্যাডমিন</li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-secondary font-bold">সেটিংস</span>
            </li>
          </ol>
        </nav>
        <h2 className="text-2xl md:text-4xl font-headline font-bold text-on-surface mb-12">
          প্রোফাইল ও নিরাপত্তা সেটিংস
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section 1: Personal Information */}
          <section className="lg:col-span-7 space-y-12">
            <div className="bg-surface-container-lowest rounded-xl divine-shadow p-8 tonal-shift">
              <div className="flex items-center gap-2 mb-8">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                <h3 className="text-xl font-headline font-semibold">
                  ব্যক্তিগত তথ্য
                </h3>
              </div>
              {/* Profile Image Upload */}
              <div className="flex flex-col sm:flex-row items-center gap-8 mb-10 pb-10 border-b border-stone-100">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-surface-container-low ring-offset-2">
                    <img
                      alt="Sheikh Abdur-Rahman"
                      className="w-full h-full object-cover"
                      data-alt="portrait of an elderly dignified man with white beard and traditional headwear looking kindly into camera"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLVTth47vcZJxARxu45GP1ytCRb-re_rDhrmcwILvqPlGzWBSLzUUTL8oJQH9kBP-oufgdm0KACRVqEVEHDGsVlJJaj8Zk0Dh2vwOnmNhrQ4A8jYs5NwDD4LOVgN3W4TNXh5J9mETGM-Stnyt6XhbINOfplPMeHPTrVNzR7mP1Pbh2ChPqHO_wTdFIGawPKG8FWWuXS2K061qBnqTn89mCGSPouBFRy_x4MPJtGbGflJ_TwkvxnDN8OHIuycPi5BosISA2j5veNO8"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[14px]">edit</span>
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <button className="
                  bg-primary text-on-primary px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">
                    নতুন ছবি আপলোড করুন
                  </button>
                  <button className="text-error font-semibold text-xs uppercase tracking-widest hover:underline px-2">
                    মুছে ফেলুন
                  </button>
                  <p className="text-stone-400 text-[11px] leading-relaxed max-w-[200px]">
                    JPG, GIF বা PNG. সর্বোচ্চ সাইজ 2MB.
                  </p>
                </div>
              </div>
              {/* Form Fields */}
              <div className="space-y-8">
                <div className="relative">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                    পুরো নাম
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:ring-0 focus:border-secondary text-on-surface font-medium py-2 transition-colors"
                    type="text"
                    defaultValue="Sheikh Abdur-Rahman"
                  />
                </div>
                <div className="relative">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                    ইমেইল ঠিকানা
                  </label>
                  <div className="flex items-center justify-between group">
                    <input
                      className="w-full bg-transparent border-0 border-b-2 border-surface-variant text-stone-400 font-medium py-2 focus:ring-0"
                      readOnly
                      type="email"
                      defaultValue="admin@thesacredsanctuary.org"
                    />
                    <a
                      className="absolute right-0 bottom-2 text-secondary font-bold text-xs uppercase tracking-widest hover:underline"
                      href="#"
                    >
                      পরিবর্তন
                    </a>
                  </div>
                </div>
                <div className="relative pb-4">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                    ভূমিকা
                  </label>
                  <div className="flex items-center gap-2 py-2">
                    <span className="material-symbols-outlined text-primary-700 text-[20px]">shield</span>
                    <span className="text-emerald-900 font-bold">
                      প্রধান ইমাম ও আধ্যাত্মিক পরিচালক
                    </span>
                  </div>
                  <div className="h-0.5 w-full bg-surface-variant" />
                </div>
                <div className="pt-4">
                  <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold divine-shadow hover:opacity-90 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">save</span>
                    সেভ করুন
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Section 2: Account Security */}
          <section className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-xl divine-shadow p-8 border border-stone-50">
              <div className="flex items-center gap-2 mb-8">
                <span className="material-symbols-outlined text-secondary text-[20px]">lock</span>
                <h3 className="text-xl font-headline font-semibold">
                  পাসওয়ার্ড পরিবর্তন
                </h3>
              </div>
              <div className="space-y-8">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                    বর্তমান পাসওয়ার্ড
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:ring-0 focus:border-secondary text-on-surface font-medium py-2 transition-colors"
                      placeholder="••••••••••••"
                      type="password"
                    />
                    <button className="absolute right-0 top-2 text-stone-400">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                    নতুন পাসওয়ার্ড
                  </label>
                  <div className="relative mb-3">
                    <input
                      className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:ring-0 focus:border-secondary text-on-surface font-medium py-2 transition-colors"
                      placeholder="••••••••••••"
                      type="password"
                    />
                  </div>
                  {/* Password Strength Meter */}
                  <div className="flex gap-1 h-1.5 mb-2">
                    <div className="flex-1 bg-emerald-600 rounded-full" />
                    <div className="flex-1 bg-emerald-600 rounded-full" />
                    <div className="flex-1 bg-emerald-600 rounded-full" />
                    <div className="flex-1 bg-stone-200 rounded-full" />
                  </div>
                  <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">
                    শক্তিশালী নিরাপত্তা
                  </p>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                    নতুন পাসওয়ার্ড নিশ্চিত করুন
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:ring-0 focus:border-secondary text-on-surface font-medium py-2 transition-colors"
                    placeholder="••••••••••••"
                    type="password"
                  />
                </div>
                <div className="pt-4">
                  <button className="w-full border-2 border-secondary text-on-secondary-container bg-secondary-container/10 px-6 py-4 rounded-xl font-bold hover:bg-secondary-container/20 transition-all">
                    পাসওয়ার্ড আপডেট করুন
                  </button>
                </div>
              </div>
            </div>
            {/* Security Insights - Bento-style addition */}
            <div className="bg-primary-container rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none transition-transform duration-500 group-hover:scale-110">
                <span className="material-symbols-outlined text-on-primary-container text-[128px]">shield</span>
              </div>
              <div className="relative z-10">
                <h4 className="text-on-primary-container font-headline text-lg font-bold mb-2">
                  টু-ফ্যাক্টর অথেনটিকেশন (2FA)
                </h4>
                <p className="text-on-primary-container/80 text-sm leading-relaxed mb-6">
                  আপনার অ্যাকাউন্টে আধ্যাত্মিক এবং ডিজিটাল নিরাপত্তার একটি অতিরিক্ত স্তর যুক্ত করুন।
                </p>
                <button className="bg-surface-container-lowest text-primary px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                  2FA চালু করুন
                </button>
              </div>
            </div>
            {/* Session Info */}
            <div className="p-6 bg-surface-container-low rounded-xl">
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-emerald-800 text-[20px]">devices</span>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-on-surface mb-1">
                    বর্তমান সেশন
                  </h5>
                  <p className="text-xs text-stone-500 mb-2">
                    সর্বশেষ সক্রিয়: ২ মিনিট আগে
                  </p>
                  <p className="text-[11px] font-mono bg-stone-200/50 inline-block px-2 py-0.5 rounded text-stone-600">
                    IP: 192.168.1.104
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default SettingsPage;
