import React from 'react';
import { getEvents } from '@/app/actions/eventActions';

export const revalidate = 0;

async function ProgramsAndEvents() {
  const result = await getEvents();
  const events = result.success ? result.data : [];

  return (
    <main className="pt-32 pb-12">
      { /* Hero Section: Editorial Asymmetry */}
      <section className="max-w-7xl mx-auto px-8 mb-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <span className="label-md uppercase tracking-[0.1em] text-secondary font-bold mb-4 block">আত্মার পবিত্রতা</span>
          <h1 className="text-6xl md:text-7xl font-headline font-bold text-primary leading-tight mb-8">পবিত্র জ্ঞান <br />ও সম্প্রীতি</h1>
          <p className="text-xl text-on-surface-variant max-w-lg mb-12">কুরআনের আলোকে মনকে উন্নত করতে, হৃদয়কে আলোকিত করতে এবং আমাদের ঐক্য মজবুত করতে আমাদের বিভিন্ন কার্যক্রমে যোগ দিন।</p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold shadow-ambient transition-transform hover:scale-105">সব ক্লাস দেখুন</button>
            <button className="text-primary font-bold px-8 py-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">ইভেন্ট ক্যালেন্ডার</button>
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
      {/* <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="bg-primary-container rounded-[2rem] overflow-hidden relative shadow-ambient">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-90" />
          <div className="relative z-10 p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 text-secondary-container mb-6">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span className="font-bold tracking-widest uppercase text-sm">জুম্মার খুতবা • এই সপ্তাহ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline text-on-primary font-bold mb-6">সবর: আল্লাহর নৈকট্য লাভের উপায়</h2>
              <p className="text-on-primary-container text-lg mb-8 leading-relaxed">এই শুক্রবার ইমাম ইউসুফের সাথে যোগ দিন এবং আধুনিক যুগে সবরের গভীরতা ও এর আধ্যাত্মিক শক্তি সম্পর্কে জানুন।</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">person</span>
                  </div>
                  <div className="text-on-primary">
                    <p className="font-bold">ইমাম ইউসুফ আল-আমিন</p>
                    <p className="text-sm opacity-80">আবাসিক স্কলার</p>
                  </div>
                </div>
                <div className="h-12 w-px bg-on-primary-container/30" />
                <div className="text-on-primary">
                  <p className="font-bold">০১:৩০ পিএম</p>
                  <p className="text-sm opacity-80">প্রথম জামাত</p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section> */}
      { /* Learning Streams: Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="label-md uppercase tracking-[0.1em] text-secondary font-bold mb-2 block">শিক্ষণ কার্যক্রম</span>
            <h2 className="text-4xl font-headline font-bold text-primary">প্রজন্মের বিকাশ</h2>
          </div>
          <p className="text-on-surface-variant max-w-xs text-sm italic">"তোমাদের মধ্যে সর্বোত্তম সে, যে কুরআন শেখে এবং অন্যকে শেখায়।"</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          { /* Children's Learning */}
          <div className="md:col-span-2 lg:col-span-3 bg-surface-container-low rounded-[2rem] p-8 flex flex-col justify-between group hover:bg-white hover:shadow-ambient transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-[32px]">child_care</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-4">শিশুদের মাদরাসা</h3>
              <p className="text-on-surface-variant mb-8">৫-১৩ বছর বয়সের শিশুদের জন্য আনন্দদায়ক পরিবেশে আখলাক (চরিত্র) এবং কুরআন তিলাওয়াতের মৌলিক ইসলামী শিক্ষা।</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary">ভর্তি চলছে</span>
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
          { /* Quran Classes */}
          <div className="md:col-span-2 lg:col-span-3 bg-primary text-on-primary rounded-[2rem] p-8 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">menu_book</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-4">বড়দের জন্য কুরআন শিক্ষা</h3>
              <p className="text-on-primary-container/80 mb-8">ব্যস্ত পেশাদারদের জন্য তাজবিদ ও তাফসির ক্লাস। সন্ধ্যা ও সাপ্তাহিক ছুটির দিনের ব্যাচ রয়েছে।</p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold">প্রাথমিক</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold">মাধ্যমিক</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold">উচ্চতর</span>
              </div>
            </div>
          </div>
          { /* Community Education */}
          <div className="md:col-span-4 lg:col-span-4 bg-surface-container-highest rounded-[2rem] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-headline font-bold mb-4">সামাজিক সেমিনার</h3>
              <p className="text-on-surface-variant mb-6">সমসাময়িক সমস্যা, যাকাত ও ইসলামী ফাইন্যান্স এবং মানসিক স্বাস্থ্য নিয়ে মাসিক কর্মশালা।</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  আমন্ত্রিত স্কলার
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  প্রশ্নোত্তর পর্ব
                </li>
              </ul>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover" data-alt="a diverse group of adults sitting in a circle in a sunlit room, engaged in a discussion with a sense of community and focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq-4K6MYSZFsH2dnECkpSFQFJVb3dLUe8ypMwgj7GfAY5oiHhS-mqvbwCadowZkMyU8Hm-Gq1QKbvim-OstI5gTfsKekdSeBKs2pmKMtsKzRSQGAmftUCY8pFpE5ek5gWmXLoSK99E-BURWSU-IWPXBpipbERgl2dUI_WLIXcod7HzKX_gzAyLopnoZicXD9CJcRAr_pqO4PDuRmfIGUqSE6syAn-K2v4MtiHRf06uMjTY5OfLQOi2xJFW-36I40UiV4XOXtsTiys" />
            </div>
          </div>
          { /* Quick Action Stats */}
          <div className="md:col-span-2 lg:col-span-2 bg-secondary-container rounded-[2rem] p-8 flex flex-col justify-center text-on-secondary-container text-center">
            <span className="text-4xl font-headline font-bold mb-2">৪৫০+</span>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70 mb-6">সক্রিয় ছাত্র-ছাত্রী</p>
            <div className="h-px bg-on-secondary-container/20 w-full mb-6" />
            <span className="text-4xl font-headline font-bold mb-2">১২</span>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">নিবেদিতপ্রাণ শিক্ষক</p>
          </div>
        </div>
      </section>
      { /* Upcoming Events: Clean Horizontal Cards */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="mb-12">
          <span className="label-md uppercase tracking-[0.1em] text-secondary font-bold mb-2 block">দিনলিপি</span>
          <h2 className="text-4xl font-headline font-bold text-primary">আসন্ন সামাজিক কার্যক্রম</h2>
        </div>
        <div className="space-y-12">
          {events.length === 0 ? (
            <p className="text-on-surface-variant italic text-center py-8">কোনো ইভেন্ট পাওয়া যায়নি।</p>
          ) : (
            events.map((event, index) => {
              const isEven = index % 2 === 0;
              const bgClass = isEven ? "bg-primary-container" : "bg-secondary-container";
              const gradientClass = isEven ? "from-primary" : "from-secondary";

              return (
                <div key={event._id} className={`${bgClass} rounded-[2rem] overflow-hidden relative shadow-ambient`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} to-transparent opacity-90`} />
                  <div className="relative z-10 p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-3 text-white/80 mb-6">
                        <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                        <span className="font-bold tracking-widest uppercase text-sm">{event.category}</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-headline text-white font-bold mb-6">{event.title}</h2>
                      <p className="text-white/90 text-lg mb-8 leading-relaxed line-clamp-4">{event.description}</p>
                      <div className="flex flex-wrap items-center gap-6">
                        {event.author && (
                          <>
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-sm">
                                <span className="material-symbols-outlined text-[24px]">person</span>
                              </div>
                              <div className="text-white">
                                <p className="font-bold">{event.author}</p>
                                <p className="text-sm opacity-80">আয়োজক/বক্তা</p>
                              </div>
                            </div>
                            <div className="h-12 w-px bg-white/30 hidden sm:block" />
                          </>
                        )}
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-[24px]">schedule</span>
                          </div>
                          <div className="text-white">
                            <p className="font-bold">{event.eventTime}</p>
                            <p className="text-sm opacity-80">সময় ও স্থান</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {event.image && (
                      <div className="relative aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl group/img">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
      { /* Newsletter / CTA */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="bg-stone-100 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-[0.03]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">আমাদের সাথে যুক্ত থাকুন</h2>
            <p className="text-on-surface-variant mb-8 italic">প্রতি সপ্তাহে ইমেইলে আমাদের সকল ক্লাস, ইভেন্ট এবং খবর পান।</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input className="flex-grow px-6 py-4 rounded-xl border-none bg-white focus:ring-2 focus:ring-secondary text-on-surface" placeholder="আপনার ইমেইল এড্রেস" type="email" />
              <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity" type="submit">সাবস্ক্রাইব করুন</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProgramsAndEvents