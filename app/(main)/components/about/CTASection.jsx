import React from 'react'

function CTASection() {
    return (
        <section className="max-w-7xl mx-auto px-8 mb-24">
            <div className="bg-primary rounded-xl p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 geometric-pattern bg-white opacity-5" />
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-headline text-white mb-8">
                        Join Our Growing Community
                    </h2>
                    <p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-10">
                        Experience the tranquility of faith and the warmth of brotherhood.
                        Our doors are always open.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all">
                            Support Our Vision
                        </button>
                        <button className="border border-outline-variant text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                            Visit Us Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection