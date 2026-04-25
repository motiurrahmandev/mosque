import React from 'react'

function Facilities() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
                <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">
                    আমাদের স্থান
                </span>
                <h2 className="text-5xl font-headline text-primary">
                    আমাদের সুবিধাসমূহ
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Facility 1 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            data-alt="A spacious prayer hall with thick emerald green carpets and soft ambient lighting from hanging lanterns"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7fvvoVpJ_cM5qaTv2DaLB-gW26yBG07Z-49oCBf7pfsFBl1AiHiZ2kKOzBG04eGxonVTBaxZtpHwug4db5ZF6fgmCkItFnwJLT0jFQZanr33WurLCMMKGD75uH8n2INmh4bJTsYUbLbjLIAto0xQw2nKDYMuxfBjZUh_gz9t7bO20JR50Iyf2im_ZGBLZC4dB0jKgG0kJOelezK3ryEsCgMi2w8Usi8L7enUQMVC9Ar_OOOmvH9AqxgHhX459Jn4U5VYuyQR_-5g"
                        />
                    </div>
                    <h3 className="text-2xl font-headline text-primary mb-2">
                        মূল নামাজ কক্ষ
                    </h3>
                    <p className="text-on-surface-variant">
                        প্রায় ২,০০০ মুসল্লির ধারণক্ষমতা সম্পন্ন শীতাতপ নিয়ন্ত্রিত এবং উন্নত শব্দব্যবস্থা যুক্ত একটি চমৎকার স্থান।
                    </p>
                </div>
                {/* Facility 2 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            data-alt="A modern library with warm wood shelving and large windows looking out onto a peaceful garden"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwabYxj8wNFV26wQQWvC3o-G37rKe4BrEIlwUOXJ5a7qsvfqi3swgRlZHyTwqPUD2BJJRPVuqqeUEOOVLc6mikMJxPr7vIy3R6HEaB-5CLqfbBg-l6blmB3fVeEsCcJD43nJBjWq0r0-qQDnWQ9FxKJsmFNIz2lBNQQCJT7OJHBvnYW84Wu9pMx4UuSxsIWMh_cm8D2Hu7TMAzuou6rVZsLvZcwWY5ANgZ4X0z1IHaiFwTqPuxjTPtreekUALxTZY39dAcIcK-Z4E"
                        />
                    </div>
                    <h3 className="text-2xl font-headline text-primary mb-2">
                        ঐতিহ্যবাহী পাঠাগার
                    </h3>
                    <p className="text-on-surface-variant">
                        শান্তিপূর্ণ পড়ার জায়গাসহ ১০,০০০-এর বেশি পাণ্ডুলিপি এবং সমসাময়িক বইয়ের এক বিশাল সংগ্রহশালা।
                    </p>
                </div>
                {/* Facility 3 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            data-alt="A minimalist community hall with flexible seating and natural light for seminars and gatherings"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNPY7Hn39jFBk9-n87NqQtFzroYnv9-0LLCN__I4KAqmr6Esk8Xi-838wadZimAH58fAZw-3ZuvaRDDOQEtoIgs8qzK553s0_a3v-gNOlvZ7IgpV6_onvxljobt9wCQHo9UtCXNgMO-po68E4jaOmCzhWWytV8a8i7GMSHNcUig8mrXAcBcgkeHGDzTtNEmt_-wTg1zTbPR9amGtdUIsmvoVszokelA7SoREG2wC_445shzHziNQnxvrxbkjeDz6rznPcfKHCXM08"
                        />
                    </div>
                    <h3 className="text-2xl font-headline text-primary mb-2">
                        কমিউনিটি প্লাজা
                    </h3>
                    <p className="text-on-surface-variant">
                        শিক্ষামূলক সেমিনার, সামাজিক সমাবেশ এবং যুব কার্যক্রমের জন্য একটি বহুমাত্রিক স্থান।
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Facilities