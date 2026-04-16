import React from 'react'

function PrayerList({ prayerTimes }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-12">
      <div className="p-6 border-b border-surface-variant/20 flex justify-between items-center">
        <h3 className="text-xl font-serif text-primary">
          Daily Prayer Schedule
        </h3>
        <div className="flex gap-2">
          <div className="relative">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]"
              data-icon="search"
            >
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 rounded-lg bg-surface border-none focus:ring-2 focus:ring-secondary/30 text-sm w-64"
              placeholder="Search date..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant text-xs font-bold uppercase tracking-widest">
              <th className="px-8 py-4">Prayer Name</th>
              <th className="px-8 py-4">Adhan Time</th>
              <th className="px-8 py-4">Iqamah Time</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-variant/10">
            {prayerTimes?.map((prayer) => (
              <tr key={prayer.id} className="hover:bg-surface-container-low transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${prayer.color || 'bg-surface-variant'}`} />
                    <span className="font-bold text-on-surface">{prayer.name}</span>
                  </div>
                </td>
                <td className="px-8 py-6 font-mono text-sm">{prayer.adhan}</td>
                <td className="px-8 py-6 font-mono text-sm">{prayer.iqamah}</td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${prayer.status === 'In Progress' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>
                    {prayer.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg">
                      <span className="material-symbols-outlined text-[18px]" data-icon="edit">
                        edit
                      </span>
                    </button>
                    <button className="p-2 text-error hover:bg-error/10 rounded-lg">
                      <span className="material-symbols-outlined text-[18px]" data-icon="delete">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 bg-surface-container-low/50 text-center">
        <button className="text-secondary font-bold text-sm flex items-center justify-center gap-2 mx-auto hover:underline decoration-2 underline-offset-4">
          <span
            className="material-symbols-outlined"
            data-icon="calendar_month"
          >
            calendar_month
          </span>
          Manage Monthly Schedule Override
        </button>
      </div>
    </div>
  )
}

export default PrayerList