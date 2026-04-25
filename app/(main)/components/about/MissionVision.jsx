import React from 'react'

function MissionVision() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-7 bg-surface-container-low p-12 rounded-xl relative overflow-hidden group">
                    <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
                        আমাদের ভিত্তি
                    </span>
                    <h2 className="text-4xl font-headline text-primary mb-6">
                        আমাদের লক্ষ্য
                    </h2>
                    <p className="text-lg text-on-surface-variant leading-relaxed">
                        বিশ্বাস, সমবেদনা এবং সামাজিক ন্যায়বিচারের অমর নীতির উপর ভিত্তি করে আধ্যাত্মিক বিকাশ, বুদ্ধিবৃত্তিক সমৃদ্ধি এবং সমাজ সেবার জন্য একটি আশ্রয়স্থল গড়ে তোলা। যারা শান্তি খোঁজে তাদের জন্য আমরা একটি আলোকবর্তিকা হতে চাই।
                    </p>
                </div>
                <div className="md:col-span-5 bg-primary-container p-12 rounded-xl text-on-primary-container">
                    <span className="text-secondary-fixed font-bold tracking-widest text-xs uppercase mb-4 block">
                        ভবিষ্যতের পথে
                    </span>
                    <h2 className="text-4xl font-headline mb-6 text-white">
                        আমাদের ভিশন
                    </h2>
                    <p className="text-lg leading-relaxed opacity-90">
                        এমন একটি অন্তর্ভুক্তিমূলক এবং প্রাণবন্ত সমাজ গঠন করা যা প্রজন্ম থেকে প্রজন্মকে উদ্দেশ্যপূর্ণ জীবনযাপন, উন্নত চরিত্র গঠন এবং মানবতার কল্যাণে অবদান রাখতে অনুপ্রাণিত করবে।
                    </p>
                </div>
                <div className="md:col-span-12 bg-surface-container-highest p-12 rounded-xl flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-headline text-primary mb-6">
                            শতবর্ষের ইতিহাস
                        </h2>
                        <div className="space-y-6 text-on-surface-variant">
                            <p>
                                শতাব্দীর শুরুতে স্থাপিত, পবিত্র আশ্রয়স্থলটি স্থানীয় পরিবারের জন্য একটি সাধারণ নামাযের ঘর হিসেবে যাত্রা শুরু করে। কয়েক দশকের আত্মত্যাগের মাধ্যমে এটি আজ আধ্যাত্মিক উৎকর্ষের একটি আঞ্চলিক কেন্দ্রে পরিণত হয়েছে।
                            </p>
                            <p>
                                আমাদের স্থাপত্যে ধ্রুপদী উসমানীয় নান্দনিকতা এবং সমসাময়িক টেকসই ডিজাইনের অপূর্ব সমন্বয় ঘটেছে, যা আমাদের সমৃদ্ধ ঐতিহ্য ও ভবিষ্যতের মেলবন্ধনের প্রতীক।
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <img
                            className="rounded-xl aspect-square object-cover"
                            data-alt="Black and white archival photo of a small community mosque building from the early 20th century"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVXe03ALm0tnDhN19A2HBBEKQFlS-7qROIptspKL3EMQGWK0TTpUnBNHhovvYvJluM2wxzU5Zcf9Gjn941matFksg7i9e06Bwh8662fqJ9m9DbYU1N9kSe_NJ50OlQGDbJHC1LE0SsZIQKo2QQ2GvAUUpR2YlQfg2hAAqCSrmjteN_XWMVhG6sudE4SQ4pdshR8ttkxxp52ZPAalvXME4aYLODHyB4otWw3mOdqDSs1bARRgPzRGYB6-tNUpi70xXnpa5IJiZWCCg"
                        />
                        <img
                            className="rounded-xl aspect-square object-cover mt-8"
                            data-alt="Modern day architectural detail of the mosque dome during a clear blue sky"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5ve2f7cszREwv-fsh8KDbkfj4hP3Ff5MSU-oyaFcX23SCUJ-Am31HnOf7SiUAvkq08fjjpO67qRT3BQFnQHaQDlgaUzs5SYB-QU7lvzAyTxx_q__kuusXCRaBvcORuN36Y1N-ilV3psLcn9Seq5MJuiSv05oEuLlQ4n1dzkpoZPQulQUKCVoQZTll3QfW3YcQySvY0rQqLBqLHWJbnUfeV6O2zwXtSC4Xg3WFfD4FJGAeZPR6nlPSilJTDX3JeAuSrbWQfOfRxTE"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVision