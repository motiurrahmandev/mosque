import React from 'react'

function AboutHero() {
    return (
        <section className="relative h-[614px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    className="w-full h-full object-cover"
                    data-alt="Interior view of a majestic mosque with sunlight streaming through stained glass onto marble floors and intricate geometric patterns"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxK1ytZOm4tcTidbq_wzew0wLeCx5NqwskwBLfdYQ4fBb5Cu6bbZ-mxrPs_Efl9XesD2F7M7IPIOb1LitgOKhMqv6xFVVE7TnCkMv4icVNq_6B4vusdQrFz5Kx3LMg9nmowSBru_2Pee5JUZilMGWhDyXS38WwhqHSqkSRpZNMwwh-xstjHxTcDwwoQT2YrSOxF7ePPlnW-SjmurTf3knOeLcwk9ZF-2Xmljy8CGDLREg7hc22CZVX6usoYrK-jbs7kjuBcL6rgh4"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-8">
                <span className="inline-block text-secondary-fixed bg-primary-container px-4 py-1 rounded-full text-sm font-bold tracking-widest mb-4 uppercase">
                    স্থাপিত ১৯২৪
                </span>
                <h1 className="text-6xl md:text-8xl font-headline text-white leading-tight max-w-3xl">
                    আধ্যাত্মিক কৃপার <br />
                    <span className="italic text-secondary-fixed">এক অনন্য ঐতিহ্য</span>
                </h1>
            </div>
        </section>
    )
}

export default AboutHero