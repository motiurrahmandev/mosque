import React from 'react'

function MissionVision() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-7 bg-surface-container-low p-12 rounded-xl relative overflow-hidden group">
                    <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
                        Our Foundation
                    </span>
                    <h2 className="text-4xl font-headline text-primary mb-6">
                        Our Mission
                    </h2>
                    <p className="text-lg text-on-surface-variant leading-relaxed">
                        To provide a sanctuary for spiritual growth, intellectual
                        enrichment, and community service rooted in the timeless
                        principles of faith, compassion, and social justice. We strive to
                        be a beacon of guidance for all who seek peace.
                    </p>
                </div>
                <div className="md:col-span-5 bg-primary-container p-12 rounded-xl text-on-primary-container">
                    <span className="text-secondary-fixed font-bold tracking-widest text-xs uppercase mb-4 block">
                        Future Forward
                    </span>
                    <h2 className="text-4xl font-headline mb-6 text-white">
                        Our Vision
                    </h2>
                    <p className="text-lg leading-relaxed opacity-90">
                        To cultivate an inclusive and vibrant community that inspires
                        generations to live with purpose, excel in character, and
                        contribute to the flourishing of humanity.
                    </p>
                </div>
                <div className="md:col-span-12 bg-surface-container-highest p-12 rounded-xl flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-headline text-primary mb-6">
                            Centuries of History
                        </h2>
                        <div className="space-y-6 text-on-surface-variant">
                            <p>
                                Founded at the turn of the century, The Sacred Sanctuary began
                                as a modest prayer hall for local families. Through decades of
                                dedication, it has evolved into a regional center for
                                spiritual excellence.
                            </p>
                            <p>
                                Our architecture reflects a synthesis of classical Ottoman
                                aesthetics and contemporary sustainable design, symbolizing
                                our bridge between heritage and the future.
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