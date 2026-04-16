import React from 'react'

function AnnualCanalder() {
    return (
        <section className="bg-surface-container-low rounded-[2.5rem] p-8 lg:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                    <h2 className="font-headline text-3xl text-primary font-bold">Annual Timetable</h2>
                    <p className="text-on-surface-variant mt-2">Adjusted for local astronomical calculations.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <div className="relative">
                        <select className="appearance-none bg-surface-container-lowest border-none rounded-xl px-6 py-3 pr-12 text-sm font-bold text-on-surface-variant focus:ring-2 focus:ring-secondary">
                            <option>October 2024</option>
                            <option>November 2024</option>
                            <option>December 2024</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                    </div>
                    <button className="bg-surface-container-lowest p-3 rounded-xl hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                    <button className="bg-surface-container-lowest p-3 rounded-xl hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant">print</span>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-on-surface-variant text-xs font-bold uppercase tracking-[0.15em] border-b border-surface-variant/50">
                            <th className="pb-6 px-4">Date</th>
                            <th className="pb-6 px-4">Day</th>
                            <th className="pb-6 px-4">Fajr</th>
                            <th className="pb-6 px-4">Sunrise</th>
                            <th className="pb-6 px-4">Dhuhr</th>
                            <th className="pb-6 px-4">Asr</th>
                            <th className="pb-6 px-4">Maghrib</th>
                            <th className="pb-6 px-4">Isha</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-variant/20">
                        <tr className="hover:bg-white/50 transition-colors">
                            <td className="py-5 px-4 font-bold">Oct 24</td>
                            <td className="py-5 px-4 text-on-surface-variant">Thu</td>
                            <td className="py-5 px-4">05:12</td>
                            <td className="py-5 px-4">06:45</td>
                            <td className="py-5 px-4">01:05</td>
                            <td className="py-5 px-4">03:45</td>
                            <td className="py-5 px-4">06:02</td>
                            <td className="py-5 px-4">07:30</td>
                        </tr>
                        <tr className="bg-primary/5">
                            <td className="py-5 px-4 font-bold text-primary">Oct 25</td>
                            <td className="py-5 px-4 text-primary font-medium">Fri</td>
                            <td className="py-5 px-4 text-primary font-bold">05:13</td>
                            <td className="py-5 px-4 text-primary font-bold">06:47</td>
                            <td className="py-5 px-4 text-primary font-bold">01:05</td>
                            <td className="py-5 px-4 text-primary font-bold">03:44</td>
                            <td className="py-5 px-4 text-primary font-bold">06:01</td>
                            <td className="py-5 px-4 text-primary font-bold">07:29</td>
                        </tr>
                        <tr className="hover:bg-white/50 transition-colors">
                            <td className="py-5 px-4 font-bold">Oct 26</td>
                            <td className="py-5 px-4 text-on-surface-variant">Sat</td>
                            <td className="py-5 px-4">05:14</td>
                            <td className="py-5 px-4">06:48</td>
                            <td className="py-5 px-4">01:05</td>
                            <td className="py-5 px-4">03:43</td>
                            <td className="py-5 px-4">05:59</td>
                            <td className="py-5 px-4">07:27</td>
                        </tr>
                        <tr className="hover:bg-white/50 transition-colors">
                            <td className="py-5 px-4 font-bold">Oct 27</td>
                            <td className="py-5 px-4 text-on-surface-variant">Sun</td>
                            <td className="py-5 px-4">05:16</td>
                            <td className="py-5 px-4">06:49</td>
                            <td className="py-5 px-4">01:05</td>
                            <td className="py-5 px-4">03:42</td>
                            <td className="py-5 px-4">05:58</td>
                            <td className="py-5 px-4">07:26</td>
                        </tr>
                        <tr className="hover:bg-white/50 transition-colors">
                            <td className="py-5 px-4 font-bold">Oct 28</td>
                            <td className="py-5 px-4 text-on-surface-variant">Mon</td>
                            <td className="py-5 px-4">05:17</td>
                            <td className="py-5 px-4">06:51</td>
                            <td className="py-5 px-4">01:05</td>
                            <td className="py-5 px-4">03:41</td>
                            <td className="py-5 px-4">05:56</td>
                            <td className="py-5 px-4">07:25</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-8 flex justify-center">
                <button className="text-primary font-bold hover:underline underline-offset-4 flex items-center gap-2">
                    Show full month <span className="material-symbols-outlined">expand_more</span>
                </button>
            </div>
        </section>
    )
}

export default AnnualCanalder