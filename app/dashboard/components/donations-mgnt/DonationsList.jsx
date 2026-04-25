function DonationsList() {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold font-headline text-primary">
          ডোনেশন লেজার
        </h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-surface-container-low">
            <span className="material-symbols-outlined text-[18px]">filter_list</span> ফিল্টার
          </button>
          <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-surface-container-low">
            <span className="material-symbols-outlined text-[18px]">download</span> এক্সপোর্ট
          </button>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  দাতার নাম
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  ক্যাম্পেইন
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  তারিখ
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  পরিমাণ
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  পদ্ধতি
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  স্ট্যাটাস
                </th>
                <th className="px-6 py-4 border-b border-outline-variant/10" />
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              <tr className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs">
                      MA
                    </div>
                    <span className="text-sm font-semibold">
                      মোহাম্মদ আল-ফায়েদ
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  মসজিদ সম্প্রসারণ
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  ২৪ অক্টো, ২০২৩
                </td>
                <td className="px-6 py-4 text-sm font-bold text-primary">
                  $1,500.00
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">credit_card</span> কার্ড
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase">
                    সম্পন্ন
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant font-bold text-xs">
                      A
                    </div>
                    <span className="text-sm font-semibold italic">
                      অজ্ঞাত
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  এতিম সহায়তা
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  ২৩ অক্টো, ২০২৩
                </td>
                <td className="px-6 py-4 text-sm font-bold text-primary">
                  $250.00
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">account_balance</span> ব্যাংক
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-[10px] font-black uppercase">
                    অপেক্ষমাণ
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs">
                      SK
                    </div>
                    <span className="text-sm font-semibold">সারাহ খান</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  রমজান ত্রাণ
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  ২২ অক্টো, ২০২৩
                </td>
                <td className="px-6 py-4 text-sm font-bold text-primary">
                  $50.00
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">smartphone</span> জি-পে
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase">
                    সম্পন্ন
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs">
                      AB
                    </div>
                    <span className="text-sm font-semibold">
                      আহমেদ বিন-সাঈদ
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  মসজিদ সম্প্রসারণ
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  ২১ অক্টো, ২০২৩
                </td>
                <td className="px-6 py-4 text-sm font-bold text-primary">
                  $5,000.00
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">credit_card</span> কার্ড
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase">
                    সম্পন্ন
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant/10 flex justify-between items-center text-xs text-on-surface-variant font-medium">
          <span>২,৪৫০ টি ফলাফলের মধ্যে ৪ টি দেখানো হচ্ছে</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-outline-variant/20 rounded hover:bg-surface-container-low transition-colors">
              পূর্ববর্তী
            </button>
            <button className="px-3 py-1 border border-outline-variant/20 rounded hover:bg-surface-container-low transition-colors bg-surface-container-low">
              1
            </button>
            <button className="px-3 py-1 border border-outline-variant/20 rounded hover:bg-surface-container-low transition-colors">
              2
            </button>
            <button className="px-3 py-1 border border-outline-variant/20 rounded hover:bg-surface-container-low transition-colors">
              পরবর্তী
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationsList;
