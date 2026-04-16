import React from 'react'
import homeData from '../../data/homeData.json'
import DynamicIcon from '../ui/DynamicIcon'

function TeamSection() {
    const { team } = homeData;

    return (
        <section className="py-24 bg-surface-container-low">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl font-serif text-primary mb-4">
                            {team.title}
                        </h2>
                        <p className="text-stone-500">
                            {team.description}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {team.members.map((member, index) => (
                        <div key={index} className="bg-surface p-6 rounded-[2rem] text-center shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-primary/5">
                                <img
                                    className="w-full h-full object-cover"
                                    src={member.image}
                                    alt={member.name}
                                />
                            </div>
                            <h5 className="text-lg font-bold text-primary mb-1">
                                {member.name}
                            </h5>
                            <p className="text-secondary font-medium text-sm mb-4">
                                {member.role}
                            </p>
                            <div className="flex justify-center gap-3">
                                {member.contacts.map((contact, cIndex) => (
                                    <DynamicIcon key={cIndex} name={contact.icon} className="text-stone-400 w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
