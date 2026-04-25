function CampaignMgnt() {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <span className="label-md uppercase tracking-widest text-on-surface-variant text-xs font-bold">
            চলমান আবেদনসমূহ
          </span>
          <h2 className="text-2xl font-bold font-headline text-primary mt-1">
            ক্যাম্পেইন ব্যবস্থাপনা
          </h2>
        </div>
        <button className="text-secondary font-bold text-sm hover:underline flex items-center gap-1">
          সকল ক্যাম্পেইন দেখুন <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Campaign Card 1 */}
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 hover:shadow-lg transition-shadow">
          <div className="h-32 bg-primary relative overflow-hidden">
            <img
              className="w-full h-full object-cover opacity-60"
              data-alt="spiritual lanterns lit at night in a traditional courtyard setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCltGWxhgzGkfkN2Kxa-z5-qt8aS3yanofC0vflYqncxuNmSUlrmT9xq9pRueXwGvN6iIyglNq1x0WrfJTzVkAdC2kXaRu_JwDbaDly6ONd2gTPuzWtwRZs-D5RY1oHsnrVQG5Kd-f5gwNu1NkjCwS6eA-Cr7hkS5z0L9obI4mskJN9Kos6nxrJkrd_-dn93-PWmwBhBXc2HOOll_f7EHqD_pwrHd4MBl8NKu-CVFMevSALzIX0kVib6pbM9qhxFSzbCcPWiGuCT7o"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-2 py-1 rounded-md text-[10px] font-bold uppercase">
              জরুরি
            </span>
          </div>
          <div className="p-5 space-y-4">
            <h4 className="font-bold text-primary">রমজান ত্রাণ তহবিল</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium text-on-surface-variant">
                <span>$65,000 / $100k</span>
                <span className="text-secondary">65%</span>
              </div>
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary rounded-full"
                  style={{ width: "65%" }}
                />
              </div>
            </div>
            <button className="w-full py-2 bg-surface-container text-on-surface font-bold text-xs rounded-xl hover:bg-primary hover:text-white transition-colors">
              পরিচালনা করুন
            </button>
          </div>
        </div>
        {/* Campaign Card 2 */}
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 hover:shadow-lg transition-shadow">
          <div className="h-32 bg-primary relative overflow-hidden">
            <img
              className="w-full h-full object-cover opacity-60"
              data-alt="architectural rendering of a modern mosque dome with intricate patterns"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhzaVrqZWECl6ZMTO31QPBTVfWpnZ_CDLCR4nExeq0JziOjxR2DEY9qH734ECMjf8cMp-8-xWO6jQohXyM2sI9y-kHluLFqJMqPbL7FcINAs2z10WjmjYfHXk5oSggnKnunjIv2E3WgGBkD2CYaKwSI6yXdWNhlCtpu4se9FvvhgmVGyCybQtaZOr0-I8OOPwRON_SjMWuzfMxbtprO1-o-nzBBa7_0JVcfK3uGs2rvo07x5MhH1XQB0-y1S7bGRqzIGM4qanEVYo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-5 space-y-4">
            <h4 className="font-bold text-primary">মসজিদ সম্প্রসারণ</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium text-on-surface-variant">
                <span>$320,000 / $500k</span>
                <span className="text-secondary">64%</span>
              </div>
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary rounded-full"
                  style={{ width: "64%" }}
                />
              </div>
            </div>
            <button className="w-full py-2 bg-surface-container text-on-surface font-bold text-xs rounded-xl hover:bg-primary hover:text-white transition-colors">
              পরিচালনা করুন
            </button>
          </div>
        </div>
        {/* Campaign Card 3 */}
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 hover:shadow-lg transition-shadow">
          <div className="h-32 bg-primary relative overflow-hidden">
            <img
              className="w-full h-full object-cover opacity-60"
              data-alt="soft focused image of happy children playing in a sunlight filled garden"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArqx0HLCTAlKt6qkVcjl6FT9F7M3PRe9yCoim4qSrrameCHhPsnc3vU6mWBqqAhxz1hY9QF4faHKi1ZEg33TbSKDFyh2RQl608NA5zk4KbLebCYPkICTZfgtnaXwhQgicAlp-EwVmtJ4gJaubcpi4uwZltcLZIloHkqkPw2xEPiWMToflbktdN3Nd-3-VSXFzQoIu4AD2PJ6-krn8bqVFIVEoU7jeyCCX3mSPsANeF7yhZ7dgGR53DQgTRtO8Q5NrNkj3MCxpRJ-E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-5 space-y-4">
            <h4 className="font-bold text-primary">এতিম সহায়তা</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium text-on-surface-variant">
                <span>$12,400 / $20k</span>
                <span className="text-secondary">62%</span>
              </div>
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary rounded-full"
                  style={{ width: "62%" }}
                />
              </div>
            </div>
            <button className="w-full py-2 bg-surface-container text-on-surface font-bold text-xs rounded-xl hover:bg-primary hover:text-white transition-colors">
              পরিচালনা করুন
            </button>
          </div>
        </div>
        {/* Placeholder/Add Card */}
        <button className="border-2 border-dashed border-outline-variant/50 rounded-2xl flex flex-col items-center justify-center p-8 group hover:border-secondary hover:bg-secondary-fixed/5 transition-all">
          <div className="h-12 w-12 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-secondary-container transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-secondary-container text-[24px]">add</span>
          </div>
          <span className="text-sm font-bold text-on-surface-variant group-hover:text-secondary">
            নতুন ক্যাম্পেইন তৈরি করুন
          </span>
        </button>
      </div>
    </section>
  );
}

export default CampaignMgnt;
