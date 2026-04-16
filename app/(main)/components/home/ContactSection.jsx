import React from 'react'
import homeData from '../../data/homeData.json'
import DynamicIcon from '../ui/DynamicIcon'

function ContactSection() {
    const { contact } = homeData;

    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl font-serif text-primary mb-12">{contact.title}</h2>
                        <div className="space-y-10">
                            {contact.methods.map((method, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center text-primary">
                                        <DynamicIcon name={method.icon} className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">{method.title}</h4>
                                        <p className="text-stone-500">{method.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 rounded-[2.5rem] overflow-hidden grayscale contrast-125 h-80">
                            <img className="w-full h-full object-cover" data-alt="minimal aesthetic satellite map view showing clean urban layout in soft tones" src={contact.mapImage} />
                        </div>
                    </div>
                    <div className="bg-surface-container-low p-12 rounded-[3rem]">
                        <h3 className="text-3xl font-serif text-primary mb-8">{contact.form.title}</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase text-stone-400">Full Name</label>
                                    <input className="bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 p-4 font-medium" placeholder="Your name" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase text-stone-400">Email Address</label>
                                    <input className="bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 p-4 font-medium" placeholder="Your email" type="email" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase text-stone-400">Subject</label>
                                <select className="bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 p-4 font-medium appearance-none">
                                    {contact.form.subjects.map((subject, index) => (
                                        <option key={index}>{subject}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase text-stone-400">Message</label>
                                <textarea className="bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 p-4 font-medium resize-none" placeholder="How can we help you?" rows={5} />
                            </div>
                            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:scale-95 transition-transform flex items-center gap-2 group">
                                {contact.form.buttonText} 
                                <DynamicIcon name={contact.form.buttonIcon} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection