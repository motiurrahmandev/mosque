import React from 'react'

function Campaigns() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-24">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="font-headline text-4xl text-primary mb-2">চলমান ফান্ডরেইজিং</h2>
                    <p className="text-on-surface-variant">আমাদের সম্প্রদায়ের উন্নয়নের কৌশলগত ভিত্তিপ্রস্তর।</p>
                </div>
                <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                    সকল কার্যক্রম দেখুন
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                { /* Campaign 1 */}
                <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10">
                    <div className="h-48 overflow-hidden relative">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="construction workers renovating a historic building with architectural precision and care" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1rY_KkYP6pAx8P4jCslD0UG6dbEW9bgzEqQtZZ10IM1kZHFjNUwJJIPDYLmbT9PArR9gYttsnCEbUQydYVMEljqHMLr6A2AllGsI_BbNNdyJdc72n9ZAFJQa8RgubtN9SPmak4hzWVRxxzM0L_1mGoEHboNrODaNgob4xMXOrPWX66mcIAgg4WoO7e5Al9jQ0W6eThAsxzPQCp0xpBRz-7VeyB1ALWOlAThVgwjRq_-j4bY963YOOfyyf5zdA5A3yUPR3Rzq7k4A" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded-full">জরুরী</div>
                    </div>
                    <div className="p-8">
                        <h3 className="font-headline text-xl text-primary mb-3">মসজিদ সংস্কার কাজ</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">শীতের প্রতিকূল আবহাওয়া থেকে আমাদের পবিত্র স্থানকে রক্ষা করতে মূল গম্বুজ এবং ছাদ মেরামতের কাজ চলছে।</p>
                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="font-semibold text-on-surface">£৪৫,০০০ / £৬০,০০০</span>
                                <span className="text-secondary font-bold">৭৫%</span>
                            </div>
                            <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                                <div className="h-full bg-secondary w-3/4 rounded-full" />
                            </div>
                        </div>
                        <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-colors">অনুদান দিন</button>
                    </div>
                </div>
                { /* Campaign 2 */}
                <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10">
                    <div className="h-48 overflow-hidden relative">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="diverse group of young students sitting in a modern classroom with laptops and books in a bright light setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSVERH_xJ9JOjDnoDh3v3uBni7W_MqXHh5Rp677Zc2enhMeSoE8owQBnaYfACn2IbICvO_iV4nAbqCdjIqtr62xGrDfTkVjvgRlx_FBgZSUswp3wb59hbRENJ-6VZdI5OVyUJ7cig0jn9rP46gn7MLP7593xiT1y5xk1WEOG5kjcwPPfrm7otk1B-fDgLSDQmKwzhoPdRFfrGNj2MihQq-f3HZWcUVzESyy-c0VywqbwTnU10kFADgH-pTo_7x3geKle7xuHdlt2c" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-secondary text-on-secondary text-xs font-bold rounded-full">ক্ষমতায়ন</div>
                    </div>
                    <div className="p-8">
                        <h3 className="font-headline text-xl text-primary mb-3">পরবর্তী প্রজন্মের শিক্ষা</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">সাপ্তাহিক মাদরাসার ছাত্রদের জন্য শিক্ষাবৃত্তি এবং ডিজিটাল উপকরণের ব্যবস্থা করা হচ্ছে।</p>
                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="font-semibold text-on-surface">£১২,৩০০ / £২৫,০০০</span>
                                <span className="text-secondary font-bold">৪৯%</span>
                            </div>
                            <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                                <div className="h-full bg-secondary w-[49%] rounded-full" />
                            </div>
                        </div>
                        <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-colors">অনুদান দিন</button>
                    </div>
                </div>
                { /* Campaign 3 */}
                <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10">
                    <div className="h-48 overflow-hidden relative">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="volunteers handing out food boxes and essential supplies to people in need at a community center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOcWMBPwOgZxgzi1BNxyWjcRq2xrzhh3ln6cXU2rz0_VhXjJi5lmKVUmwGT7Av-RTniFZrIc8eYlBpcqNAbRP2ZHPscUBqFy0BzP9LfubtyciYuAt1IA2JDjYT1r1RZD_yOvHx5s3g8ma8qS1WoVOj5bRq0d8u5SAPekitg9kRdjyZ8vBs94dlW8fhAAJkCqPZ2tDlml7h9sEAbqCfZruXZe1d02vlWfrv-c9vOKH2majxFmugQxCg2980NClmk300lz3hxBbc13M" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-tertiary text-on-tertiary text-xs font-bold rounded-full">জনকল্যাণ</div>
                    </div>
                    <div className="p-8">
                        <h3 className="font-headline text-xl text-primary mb-3">কমিউনিটি ফুড ব্যাংক</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">গৃহহীন ও অসহায় মানুষদের জন্য আমাদের সাপ্তাহিক গরম খাবারের কার্যক্রমে অর্থায়ন করুন।</p>
                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="font-semibold text-on-surface">£৮,৯০০ / £১০,০০০</span>
                                <span className="text-secondary font-bold">৮৯%</span>
                            </div>
                            <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                                <div className="h-full bg-secondary w-[89%] rounded-full" />
                            </div>
                        </div>
                        <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-colors">অনুদান দিন</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Campaigns