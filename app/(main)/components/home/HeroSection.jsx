import React from 'react'
import homeData from '../../data/homeData.json'
import DynamicIcon from '../ui/DynamicIcon'

function HeroSection() {
    const { hero } = homeData;

    return (
        <section className="relative h-[870px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img className="w-full h-full object-cover brightness-[0.7]" data-alt="magnificent mosque architecture with towering white minarets and intricate marble domes under a soft golden sunset sky" src={hero.bgImage} />
            </div>
            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-3xl">
                    <span className="inline-block text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4">{hero.subtitle}</span>
                    <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight mb-6">{hero.title}</h1>
                    <p className="text-xl md:text-2xl text-stone-200 font-body max-w-2xl leading-relaxed mb-8">
                        {hero.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {hero.buttons.map((btn, index) => (
                            btn.primary ? (
                                <a key={index} className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold text-lg hover:scale-95 transition-transform flex items-center gap-2" href={btn.url}>
                                    {btn.label} {btn.icon && <DynamicIcon name={btn.icon} className="w-6 h-6" />}
                                </a>
                            ) : (
                                <button key={index} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                                    {btn.label}
                                </button>
                            )
                        ))}
                    </div>
                </div>
            </div>
            { /* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
            </div>
        </section>
    )
}

export default HeroSection