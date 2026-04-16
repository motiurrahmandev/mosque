import React from 'react'

function PrayerHero() {
    return (
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="label-md uppercase tracking-[0.1em] text-secondary font-bold mb-4">Current Prayer Cycle</span>
                <h1 className="font-headline text-5xl lg:text-7xl text-primary font-bold mb-6 leading-tight">
                    Finding Peace in <br />Every Moment.
                </h1>
                <p className="text-on-surface-variant max-w-lg text-lg mb-8">
                    Guided by the divine rhythm, we offer a sanctuary for your daily spiritual practice. Join our community for congregational prayers.
                </p>
                <div className="flex gap-4">
                    <button className="prayer-gradient text-primary px-8 py-4 border-1 border-primary rounded-xl font-bold ambient-shadow transition-transform hover:scale-[1.02]">
                        View Full Schedule
                    </button>
                    <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold transition-transform hover:scale-[1.02]">
                        Zakat Calculator
                    </button>
                </div>
            </div>
            <div className="lg:col-span-5 relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden ambient-shadow rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img className="w-full h-full object-cover" data-alt="Intricate Islamic architecture featuring a sunlit courtyard with marble floors and arched colonnades in soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvZL4cw7KnSS7j5hGqiLa7OEjVH1QAXnPctjlW9sO64BcMwzCBohxa5Az88jP-zGPm_E5u5edBPNJka5RngBD8U66VsiqLwgBOJNkZ5J_X3kbQ4NFXbHZTIn3Up2dgVeMGeKirYNkrZrcKUa7379hK1Ih0-vnb4s8-DnnHcZYYdK01qnFTwxU8PIpI0D6EtvVmbdgPGMakb0d9GyZ9kKj-kh77L7ewkit2M_HUr55wAHOxHjhVlMoK5SvaSSM4SUJZvQDgUd6JdSg" />
                </div>
                { /* Prayer Time Floating Widget */}
                <div className="backdrop-blur-xl absolute -bottom-6 -left-6 lg:-left-12 p-8 rounded-2xl border border-white/20 ambient-shadow max-w-xs">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-secondary font-bold text-sm tracking-widest uppercase">Next Prayer</span>
                        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-primary font-headline text-4xl font-bold">Asr</h3>
                        <p className="text-on-surface-variant font-medium">Begins in 42 minutes</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">3:45 PM</div>
                </div>
            </div>
        </header>
    )
}

export default PrayerHero