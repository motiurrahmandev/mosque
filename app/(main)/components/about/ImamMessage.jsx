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
                    <span
                        className="material-symbols-outlined text-secondary text-6xl mb-4"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        format_quote
                    </span>
                    <h2 className="text-4xl font-headline text-primary mb-8 italic">
                        "True faith is found not in isolation, but in the service of one
                        another."
                    </h2>
                    <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed mb-8">
                        <p>
                            Welcome to The Sacred Sanctuary. Here, we believe that the
                            mosque is more than just walls and minarets; it is a living
                            heart for the community. Our doors are open to all who seek
                            knowledge, solace, and a connection with the Divine.
                        </p>
                        <p>
                            As we navigate the complexities of the modern world, our mission
                            remains constant: to provide a firm foundation of traditional
                            wisdom that empowers you to lead a life of excellence and
                            integrity.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-primary text-xl">
                            Sheikh Abdur-Rahman
                        </p>
                        <p className="text-secondary font-medium">
                            Head Imam & Spiritual Director
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImamMessage