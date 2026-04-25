"use client";
import { useDashboard } from "../components/DashboardContext";

function TeamMgnt() {
  const { toggleSidebar } = useDashboard();

  return (
    <main className="flex-1 lg:ml-64 p-4 md:p-10 lg:p-16">
      <header className="mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="flex items-center gap-4">
            <button 
                onClick={toggleSidebar}
                className="lg:hidden p-2 -ml-2 text-stone-500 hover:bg-stone-100 rounded-full"
            >
                <span className="material-symbols-outlined">menu</span>
            </button>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">
                প্রতিষ্ঠান পরিচালনা
              </span>
              <h2 className="text-2xl md:text-4xl font-headline font-bold text-primary">
                কর্মীদল ও সমাজসেবা
              </h2>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-6 py-3 bg-surface-container-high text-primary font-semibold rounded-xl hover:bg-surface-variant transition-all text-sm">
              রিপোর্ট ডাউনলোড
            </button>
            <button className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold rounded-xl shadow-[0px_20px_40px_rgba(21,66,18,0.06)] hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm">
              <span className="material-symbols-outlined text-[16px]">add</span>
              নতুন সদস্য
            </button>
          </div>
        </div>
      </header>
      {/* Team Management Bento Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-headline text-on-surface">
            আধ্যাত্মিক নেতৃত্ব
          </h3>
          <p className="text-sm text-on-surface-variant italic">
            আমাদের কমিউনিটি নেতাদের সম্মাননা
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Team Member Card 1 */}
          <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/10 group">
            <div className="relative mb-6 overflow-hidden rounded-2xl">
              <img
                alt="Imam Portrait"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                data-alt="Dignified man with a short beard wearing traditional headwear, smiling warmly in a bright library"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF-2OCFYsa3f0Bh2PGFv7Txrv-gmZQ037MjPWZ33kD8ZOqVpygGgyc6pt0t0GD5_5eZgRx9lO3Ba3Ry7swfK2KoBTmlQr8KwU0qstq1_1OSSUkXnLJpFvHbdlapk-N-POa6RixEcY73PBVMZ9P7Jost78BaYrc_L-kypFDaECgcD3AypVO_wCAzya_5zWbbnQdoE9O03bjVcHMCCeRNy8jvaKAxl2QMb6m10PMcJCumidQOIf0gNgqxdMzpcE3Io3DEXhKRrYdxLM"
              />
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-on-primary px-4 py-1 rounded-full text-xs font-bold">
                ইমাম
              </div>
            </div>
            <div className="px-2">
              <h4 className="text-xl font-headline font-bold text-primary mb-1">
                শাইখ আব্দুর রহমান
              </h4>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed line-clamp-2">
                দীর্ঘ ১৫ বছর ধরে প্রজ্ঞা ও সহানুভূতির সাথে আমাদের কমিউনিটির আধ্যাত্মিক বৃদ্ধি এবং শিক্ষামূলক কর্মসূচি পরিচালনা করছেন।
              </p>
              <div className="flex gap-2">
                <button className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[20px]">edit</span>
                </button>
                <button className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
                <button className="p-2 text-error hover:bg-error-container rounded-lg transition-colors ml-auto">
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </div>
            </div>
          </div>
          {/* Team Member Card 2 */}
          <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/10 group">
            <div className="relative mb-6 overflow-hidden rounded-2xl">
              <img
                alt="Muazzin Portrait"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                data-alt="Young man with a clean-cut beard wearing a smart casual vest, standing in front of an arched entryway"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFOECXVMWtZPzU15YWFuXlCZMUavHp0vsVWrJv8QgD40zx5htv5tKSxLo-85vYyMjL21Q4iy-GygtUDB6X-TKDBLvzYBtrzAk3NQwDIaCx_d9nne7lN31T_RfssScXHC4Q__T2VIjBQj9Slyc0oQUaAFgIHbDqc-_wCP5UlDySGthKLTR2Ikwp-MR1Kgs7YGlM3DBE4agQlyJGEPveu-7s9IA99a220uJSmYjblKTOdPibqUQQRZfvi_OsNzyN8KauXAMvqFz5NGc"
              />
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-on-primary px-4 py-1 rounded-full text-xs font-bold">
                মুয়াজ্জিন
              </div>
            </div>
            <div className="px-2">
              <h4 className="text-xl font-headline font-bold text-primary mb-1">
                হাসান আল-ফায়েদ
              </h4>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed line-clamp-2">
                তাঁর সুমধুর কণ্ঠস্বর এবং মসজিদের নিয়মিত সময়সূচী ও আধ্যাত্মিক পরিবেশ বজায় রাখার প্রতি নিষ্ঠার জন্য পরিচিত।
              </p>
              <div className="flex gap-2">
                <button className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[20px]">edit</span>
                </button>
                <button className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
                <button className="p-2 text-error hover:bg-error-container rounded-lg transition-colors ml-auto">
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </div>
            </div>
          </div>
          {/* Add New Member Placeholder */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container transition-all">
            <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[40px] text-primary">person_add</span>
            </div>
            <h4 className="text-lg font-bold text-primary">নতুন সদস্য যোগ করুন</h4>
            <p className="text-sm text-on-surface-variant max-w-[180px] mt-2">
              পোর্টালে নতুন প্রশাসক বা ধর্মীয় কর্মী যোগ করুন।
            </p>
          </div>
        </div>
      </section>
      {/* Donation & Campaigns Section */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Left: Donation Records Table */}
        {/* <div className="xl:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-headline text-on-surface">
              Recent Donations
            </h3>
            <div className="flex gap-4">
              <div className="relative">
                <input
                  className="pl-10 pr-4 py-2 rounded-full border-none bg-surface-container-high text-sm focus:ring-2 focus:ring-secondary"
                  placeholder="Search records..."
                  type="text"
                />
                <span className="absolute left-3 top-2 text-on-surface-variant material-symbols-outlined text-[18px]">search</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="py-5 px-8 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Donor
                  </th>
                  <th className="py-5 px-8 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Campaign
                  </th>
                  <th className="py-5 px-8 text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right">
                    Amount
                  </th>
                  <th className="py-5 px-8 text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-xs">
                        MA
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">
                          Mariam Aziz
                        </p>
                        <p className="text-[10px] text-on-surface-variant">
                          2 mins ago
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-8">
                    <span className="text-sm text-on-surface">
                      Ramadan Food Drive
                    </span>
                  </td>
                  <td className="py-5 px-8 text-right font-bold text-primary">
                    $250.00
                  </td>
                  <td className="py-5 px-8 text-right">
                    <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                      Success
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-xs">
                        OS
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">
                          Omar Sharif
                        </p>
                        <p className="text-[10px] text-on-surface-variant">
                          1 hour ago
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-8">
                    <span className="text-sm text-on-surface">
                      Mosque Renovation
                    </span>
                  </td>
                  <td className="py-5 px-8 text-right font-bold text-primary">
                    $1,200.00
                  </td>
                  <td className="py-5 px-8 text-right">
                    <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                      Success
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed flex items-center justify-center font-bold text-xs">
                        ZJ
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">
                          Zayd Jamil
                        </p>
                        <p className="text-[10px] text-on-surface-variant">
                          4 hours ago
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-8">
                    <span className="text-sm text-on-surface">
                      Sadaqah Jariyah
                    </span>
                  </td>
                  <td className="py-5 px-8 text-right font-bold text-primary">
                    $50.00
                  </td>
                  <td className="py-5 px-8 text-right">
                    <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                      Processing
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-6 bg-surface-container-low flex justify-center">
              <button className="text-sm font-bold text-primary hover:underline decoration-secondary underline-offset-4">
                View All Transactions
              </button>
            </div>
          </div>
        </div> */}

        {/* <div className="space-y-8">
          <h3 className="text-2xl font-headline text-on-surface">
            Active Campaigns
          </h3>
        
          <div className="bg-primary text-on-primary rounded-[2rem] p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold">New Minaret Fund</h4>
                  <p className="text-xs text-on-primary/70">Target: $45,000</p>
                </div>
                <span className="material-symbols-outlined text-secondary text-[32px]">mosque</span>
              </div>
              <div className="flex gap-4 h-48 items-end mb-6">
                <div className="flex-1 bg-white/10 rounded-full relative overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full bg-secondary-container"
                    style={{ height: "72%" }}
                  />
                </div>
                <div className="flex-1 bg-white/10 rounded-full relative overflow-hidden opacity-50">
                  <div
                    className="absolute bottom-0 w-full bg-secondary-container"
                    style={{ height: "40%" }}
                  />
                </div>
                <div className="flex-1 bg-white/10 rounded-full relative overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full bg-secondary-container"
                    style={{ height: "85%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-3xl font-headline font-bold text-secondary-container">
                    $32,410
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-primary/60">
                    Raised to Date
                  </p>
                </div>
                <button className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-lg transform hover:scale-110 transition-all">
                  <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                </button>
              </div>
            </div>
            
            <div
              className="absolute top-0 right-0 w-40 h-40 bg-white/5 opacity-10 pointer-events-none"
              style={{
                maskImage:
                  "url('https://www.transparenttextures.com/patterns/islamic-art.png')",
                WebkitMaskImage:
                  "url('https://www.transparenttextures.com/patterns/islamic-art.png')",
              }}
            />
          </div>
        
          <div className="bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant/20">
            <h4 className="text-lg font-bold text-primary mb-6">
              Launch New Campaign
            </h4>
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Campaign Title
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:border-secondary focus:ring-0 text-sm py-2"
                  placeholder="e.g. Winter Relief 2024"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Goal (USD)
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:border-secondary focus:ring-0 text-sm py-2"
                    placeholder="5000"
                    type="number"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Category
                  </label>
                  <select className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:border-secondary focus:ring-0 text-sm py-2 appearance-none">
                    <option>Zakat</option>
                    <option>Sadaqah</option>
                    <option>Waqf</option>
                  </select>
                </div>
              </div>
              <button
                className="w-full py-3 bg-secondary text-on-secondary font-bold rounded-xl mt-4 hover:opacity-90 transition-all shadow-md"
                type="submit"
              >
                Create Campaign
              </button>
            </form>
          </div>
        </div> */}
      </section>
    </main>
  );
}

export default TeamMgnt;
