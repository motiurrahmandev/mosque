import React from 'react'

function ImamMessage() {
    return (
        <section className="bg-surface-container-low py-24">
            <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-2/5 relative">
                    <div className="absolute -inset-4 bg-secondary/10 rounded-xl -rotate-3" />
                    <img
                        className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover"
                        data-alt="Portrait of a dignified elder man with a grey beard wearing traditional academic robes in a library setting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXJU2WJpngiufzcQ-t3DqpJe6rSMKhSKE6mDP12aWliN2uypHJwWUWeafxQZM17S6nT-vngZ40gbNd2ktcd2oJUD3N4p3pB9jFEHySjaLkY_zeXzHNlHQ-vh-XAr-MX1a0EyZPznr1SzZ399WGiEq73SlmzLwvje30ga3u8LCti0kXncTqXkFUP51nqf234SxP6_QTSfoKPPUiUPjLr0z4MhaIr5wWHpUMu-nS8y6itxmj9qMny-okQQPj1MQTXD1oaiEeCT-N81U"
                    />
                </div>
                <div className="lg:w-3/5">
                    <span className="material-symbols-outlined !text-[64px] text-secondary mb-4 fill-secondary">format_quote</span>
                    <h2 className="text-4xl font-headline text-primary mb-8 italic">
                        "প্রকৃত বিশ্বাস একাকীত্বে নয়, বরং একে অপরের সেবায় পাওয়া যায়।"
                    </h2>
                    <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed mb-8">
                        <p>
                            পবিত্র আশ্রয়স্থলে আপনাকে স্বাগতম। আমরা বিশ্বাস করি যে মসজিদ কেবল দেয়াল ও মিনারে সীমাবদ্ধ নয়; এটি সমাজের একটি জীবন্ত হৃদয়। জ্ঞান, প্রশান্তি এবং মহান আল্লাহর সাথে সম্পর্ক স্থাপনের জন্য আমাদের দরজা সবার জন্য উন্মুক্ত।
                        </p>
                        <p>
                            আধুনিক বিশ্বের নানা জটিলতার মাঝেও আমাদের লক্ষ্য অপরিবর্তিত: আস্থার এমন এক মজবুত ভিত্তি প্রদান করা যা আপনাকে সততা ও উৎকর্ষের সাথে জীবনযাপনে সাহায্য করে।
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-primary text-xl">
                            শায়খ আবদুর রহমান
                        </p>
                        <p className="text-secondary font-medium">
                            প্রধান ইমাম এবং আধ্যাত্মিক পরিচালক
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImamMessage