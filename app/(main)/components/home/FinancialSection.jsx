import React from 'react'
import homeData from '../../data/homeData.json'

function FinancialSection() {
    const { financial } = homeData;

    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-5xl font-serif text-primary mb-8 leading-tight">{financial.title}</h2>
                        <p className="text-stone-600 mb-10 leading-relaxed">{financial.description}</p>
                        <div className="grid grid-cols-2 gap-6 mb-12">
                            {financial.stats.map((stat, index) => (
                                <div key={index} className="bg-surface-container p-6 rounded-2xl">
                                    <span className="text-xs uppercase font-bold text-stone-500 mb-2 block">{stat.label}</span>
                                    <div className={`text-3xl font-serif text-${stat.color}`}>{stat.value}</div>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-6">
                            {financial.bars.map((bar, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-primary">{bar.label}</span>
                                        <span className="text-stone-500">{bar.percentage}%</span>
                                    </div>
                                    <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
                                        <div className={`h-full bg-${bar.color} rounded-full`} style={{ width: `${bar.percentage}%` }} />
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-around items-end h-[400px] bg-surface-container-low rounded-[3rem] p-12">
                        { /* Vertical Pillars representing income/expense */}
                        {financial.quarters.map((quarter, index) => (
                            <div key={index} className="flex flex-col items-center gap-4 group">
                                <div className="w-16 bg-primary-container/20 rounded-full h-64 relative overflow-hidden flex flex-col justify-end">
                                    <div className="w-full bg-primary rounded-full group-hover:bg-secondary transition-colors duration-500" style={{ height: `${quarter.percentage}%` }} />
                                </div>
                                <span className="text-xs font-bold text-stone-500 uppercase tracking-tighter">{quarter.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinancialSection