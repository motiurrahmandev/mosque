import React from 'react'
import homeData from '../../data/homeData.json'
import DynamicIcon from '../ui/DynamicIcon'

function ServicesSection() {
    const { services } = homeData;

    return (
        <section className="py-24 bg-surface" id="services">
            <div className="container mx-auto px-8">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-serif text-primary mb-4">
                        {services.title}
                    </h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">
                        {services.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {services.items.map((service, index) => {
                        if (service.size === 'large') {
                            return (
                                <div key={index} className="md:col-span-2 lg:col-span-3 bg-primary-container p-10 rounded-[2.5rem] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 asymmetric-pattern w-48 h-48 opacity-10 bg-white" />
                                    <div className="relative z-10 flex flex-col h-full">
                                        <DynamicIcon name={service.icon} className="w-12 h-12 text-secondary-container mb-8" />
                                        <h3 className="text-3xl font-serif text-white mb-4">{service.title}</h3>
                                        <p className="text-on-primary-container/80 mb-8 max-w-sm">{service.description}</p>
                                        <button className="mt-auto self-start text-secondary-container font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                                            {service.linkText} {service.linkIcon && <DynamicIcon name={service.linkIcon} className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>
                            )
                        } else if (service.size === 'medium') {
                            return (
                                <div key={index} className="md:col-span-2 lg:col-span-3 bg-surface-container-low p-10 rounded-[2.5rem] border border-outline-variant/10">
                                    <div className="flex flex-col h-full">
                                        <DynamicIcon name={service.icon} className="w-12 h-12 text-primary mb-8" />
                                        <h3 className="text-3xl font-serif text-primary mb-4">{service.title}</h3>
                                        <p className="text-stone-600 mb-8 max-w-sm">{service.description}</p>
                                        <button className="mt-auto self-start text-primary font-bold flex items-center gap-2">
                                            {service.linkText} {service.linkIcon && <DynamicIcon name={service.linkIcon} className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>
                            )
                        } else {
                            const isSecondaryTheme = service.theme === 'secondary';
                            const bgColorClass = isSecondaryTheme ? 'bg-secondary-container' : 'bg-surface-container-low border border-outline-variant/10';
                            const textColorClass = isSecondaryTheme ? 'text-on-secondary-container' : 'text-primary';
                            const pColorClass = isSecondaryTheme ? 'text-on-secondary-container/70' : 'text-stone-500';

                            return (
                                <div key={index} className={`lg:col-span-2 p-8 rounded-[2rem] ${bgColorClass}`}>
                                    <DynamicIcon name={service.icon} className={`w-10 h-10 mb-6 ${textColorClass}`} />
                                    <h4 className={`text-xl font-bold mb-2 ${textColorClass}`}>{service.title}</h4>
                                    <p className={`text-sm ${pColorClass}`}>{service.description}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
