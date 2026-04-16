import React from 'react'

function DonationsSection() {
  return (
   <section className="py-24 bg-primary relative overflow-hidden" id="donate">
          <div className="absolute inset-0 asymmetric-pattern opacity-5" />
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-5xl mx-auto bg-surface rounded-[3rem] p-12 lg:p-20 shadow-2xl overflow-hidden flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-5xl font-serif text-primary mb-8">Sacred Giving</h2>
                <p className="text-stone-600 mb-8">Your Zakat and Sadaqah are the lifeblood of this sanctuary. Choose a fund to support today.</p>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <label className="p-6 rounded-2xl border-2 border-primary bg-primary-fixed/10 flex justify-between items-center cursor-pointer">
                    <div>
                      <h5 className="font-bold text-primary">Sadaqah Jariyah</h5>
                      <p className="text-xs text-stone-500">Ongoing charity for mosque maintenance</p>
                    </div>
                    <span className="material-symbols-outlined text-primary" data-weight="fill">radio_button_checked</span>
                  </label>
                  <label className="p-6 rounded-2xl border border-outline-variant hover:bg-surface-container-low flex justify-between items-center cursor-pointer">
                    <div>
                      <h5 className="font-bold text-stone-800">Zakat Fund</h5>
                      <p className="text-xs text-stone-500">Dedicated distribution to those in need</p>
                    </div>
                    <span className="material-symbols-outlined text-stone-300">radio_button_unchecked</span>
                  </label>
                </div>
              </div>
              <div className="lg:w-1/2 bg-surface-container-low p-10 rounded-[2.5rem]">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase text-stone-400 mb-2 block">Choose Amount</span>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="py-3 rounded-xl border border-outline-variant font-bold hover:bg-white transition-colors">$50</button>
                    <button className="py-3 rounded-xl border-2 border-primary bg-white text-primary font-bold">$100</button>
                    <button className="py-3 rounded-xl border border-outline-variant font-bold hover:bg-white transition-colors">$500</button>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase text-stone-400 mb-2 block">Custom Amount</span>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold">$</span>
                    <input className="w-full bg-white border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 pl-10 py-4 text-xl font-bold" placeholder="0.00" type="number" />
                  </div>
                </div>
                <button className="w-full bg-primary bg-gradient-to-r from-primary to-primary-container text-white py-6 rounded-2xl font-bold text-xl shadow-lg hover:opacity-90 transition-opacity">
                  Complete Donation
                </button>
                <p className="text-center text-xs text-stone-400 mt-6 flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm">lock</span> Secure payment processed via Sanctuary Pay
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default DonationsSection