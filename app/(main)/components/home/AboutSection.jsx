import React from 'react'
import homeData from '../../data/homeData.json'
import DynamicIcon from '../ui/DynamicIcon'

function AboutSection() {
    const { about } = homeData;

    return (
        <section className="py-24 bg-surface-container-low">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
                            <img className="w-full h-full object-cover" data-alt="interior view of a modern mosque with soft natural light streaming onto ornate prayer rugs and arched calligraphy details" src={about.image} />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary-container rounded-full z-0 flex items-center justify-center p-8 opacity-90">
                            <p className="text-on-secondary-container font-serif italic text-lg text-center leading-snug">{about.quote}</p>
                        </div>
                    </div>
                    <div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 block">{about.overline}</span>
                        <h2 className="text-5xl font-serif text-primary mb-8 leading-tight">{about.title}</h2>
                        <div className="space-y-8">
                            {about.features.map((feature, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white">
                                        <DynamicIcon name={feature.icon} className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-primary mb-2">{feature.title}</h4>
                                        <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection