import React from 'react'
import homeData from '../../data/homeData.json'
import DynamicIcon from '../ui/DynamicIcon'

function DonationHub() {
    const { donation } = homeData;

    return (
        <section className="tonal-shift-surface-container-low py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    { /* Donation Type Selector */}
                    <div className="lg:col-span-2 bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/10">
                        <h2 className="font-headline text-3xl text-primary mb-8">{donation.title}</h2>
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {donation.types.map((type, index) => (
                                <button key={index} className={`flex flex-col items-center p-6 rounded-2xl ${type.active ? 'border-2 border-secondary bg-secondary-fixed/10 text-on-secondary-fixed-variant' : 'border-2 border-transparent bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant'}`}>
                                    <DynamicIcon name={type.icon} className="w-8 h-8 mb-2" />
                                    <span className="font-bold">{type.label}</span>
                                </button>
                            ))}
                        </div>
                        <div className="mb-10">
                            <p className="label-md uppercase tracking-widest text-on-surface-variant mb-4 font-semibold">{donation.amountLabel}</p>
                            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                                {donation.amounts.map((amount, index) => (
                                    <button
                                        key={index}
                                        className={`py-3 rounded-xl ${amount === donation.defaultAmount ? 'bg-primary-container text-on-primary-container font-bold' : 'border border-outline-variant text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-colors'}`}
                                    >
                                        {amount}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-10">
                            <p className="label-md uppercase tracking-widest text-on-surface-variant mb-4 font-semibold">{donation.methodLabel}</p>
                            <div className="flex flex-wrap gap-4">
                                {donation.methods.map((method, index) => (
                                    <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-outline-variant cursor-pointer hover:bg-surface-container transition-colors">
                                        <DynamicIcon name={method.icon} className="w-5 h-5 text-on-surface-variant" />
                                        <span>{method.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-2xl text-xl font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
                            {donation.buttonText}
                            <DynamicIcon name={donation.buttonIcon} className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    { /* History Summary */}
                    <div className="bg-surface-container-high/50 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
                        <h3 className="font-headline text-2xl text-primary mb-6">{donation.historyTitle}</h3>
                        <div className="space-y-6">
                            {donation.history.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                                        <DynamicIcon name={item.icon} className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-on-surface">{item.name}</p>
                                        <p className="text-sm text-on-surface-variant">{item.detail}</p>
                                        <p className="text-xs text-outline mt-1">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 p-6 bg-secondary-container rounded-2xl">
                            <p className="font-headline text-lg text-on-secondary-container mb-2">{donation.pledge.title}</p>
                            <p className="text-sm text-on-secondary-container/80 leading-relaxed">
                                {donation.pledge.description}
                            </p>
                            <button className="mt-4 text-sm font-bold underline decoration-primary underline-offset-4">{donation.pledge.linkText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonationHub