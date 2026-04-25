

function PrayerList({ prayerTimes, onEdit, onDelete, isLoading }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-12">
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-surface-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h3 className="text-xl font-serif text-primary">নামাজের সময়সূচী তালিকা</h3>
        <div className="relative w-full sm:w-auto">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
          <input
            className="pl-10 pr-4 py-2 rounded-lg bg-surface border-none focus:ring-2 focus:ring-secondary/30 text-sm w-full sm:w-56"
            placeholder="খুঁজুন..."
            type="text"
          />
        </div>
      </div>

      {/* === MOBILE: Card Layout (hidden on md+) === */}
      <div className="md:hidden divide-y divide-surface-variant/10">
        {isLoading ? (
          <div className="p-8 text-center text-on-surface-variant animate-pulse">
            সময়সূচী লোড হচ্ছে...
          </div>
        ) : prayerTimes?.length === 0 ? (
          <div className="p-8 text-center text-on-surface-variant text-sm">
            কোনো নামাজের সময় নির্ধারণ করা হয়নি।
          </div>
        ) : (
          prayerTimes?.map((prayer) => (
            <div key={prayer.id} className="p-4 flex items-center justify-between gap-3 hover:bg-surface-container-low transition-colors">
              {/* Left: Name + Type */}
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${prayer.color || "bg-surface-variant"}`} />
                <div className="min-w-0">
                  <p className="font-bold text-on-surface truncate">{prayer.name}</p>
                  <p className="text-xs text-on-surface-variant capitalize">{prayer.type || "Daily"}</p>
                </div>
              </div>
              {/* Center: Azan + Iqamah times only */}
              <div className="flex-1 flex flex-col items-center gap-0.5 text-center">
                <p className="font-mono text-sm text-on-surface">{prayer.adhan || "—"}</p>
                <p className="font-mono text-sm font-bold text-primary">{prayer.iqamah}</p>
              </div>
              {/* Right: Action Buttons — always visible on mobile */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => onEdit(prayer)}
                  className="flex items-center gap-1.5 px-3 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-colors text-xs font-bold"
                >
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  <span className="hidden xs:inline">সম্পাদনা</span>
                </button>
                <button
                  onClick={() => onDelete(prayer.id)}
                  className="flex items-center gap-1.5 px-3 py-2 bg-error/10 text-error hover:bg-error/20 rounded-lg transition-colors text-xs font-bold"
                >
                  <span className="material-symbols-outlined text-[16px]">delete</span>
                  <span className="hidden xs:inline">মুছুন</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* === DESKTOP: Table Layout (hidden on mobile) === */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant text-xs font-bold uppercase tracking-widest">
              <th className="px-8 py-4">নামাজের নাম</th>
              <th className="px-8 py-4">ধরন</th>
              <th className="px-8 py-4">আজানের সময়</th>
              <th className="px-8 py-4">ইকামাতের সময়</th>
              <th className="px-8 py-4 text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-variant/10">
            {isLoading ? (
              <tr>
                <td colSpan="5" className="px-8 py-8 text-center text-on-surface-variant">
                  সময়সূচী লোড হচ্ছে...
                </td>
              </tr>
            ) : prayerTimes?.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-8 py-8 text-center text-on-surface-variant">
                  কোনো নামাজের সময় নির্ধারণ করা হয়নি। নতুন সময় যোগ করতে &quot;সময়সূচী যোগ করুন&quot; এ ক্লিক করুন।
                </td>
              </tr>
            ) : (
              prayerTimes?.map((prayer) => (
                <tr key={prayer.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${prayer.color || "bg-surface-variant"}`} />
                      <span className="font-bold text-on-surface">{prayer.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm capitalize">{prayer.type || "Daily"}</td>
                  <td className="px-8 py-6 font-mono text-sm">{prayer.adhan || "-"}</td>
                  <td className="px-8 py-6 font-mono text-sm">{prayer.iqamah}</td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-2 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => onEdit(prayer)}
                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button
                        onClick={() => onDelete(prayer.id)}
                        className="p-2 text-error hover:bg-error/10 rounded-lg transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-4 md:p-6 bg-surface-container-low/50 text-center">
        <button className="text-secondary font-bold text-sm flex items-center justify-center gap-2 mx-auto hover:underline decoration-2 underline-offset-4">
          <span className="material-symbols-outlined text-[20px]">calendar_month</span>
          মাসিক সময়সূচী পরিবর্তন পরিচালনা করুন
        </button>
      </div>
    </div>
  );
}

export default PrayerList;
