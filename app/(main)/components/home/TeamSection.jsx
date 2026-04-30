import React from 'react'
import homeData from '../../data/homeData.json'
import DynamicIcon from '../ui/DynamicIcon'
import { getMembers } from '@/app/actions/teamActions'

async function TeamSection() {
    const { team } = homeData;
    const result = await getMembers();
    const dynamicMembers = result.success ? result.data : [];

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
                    {dynamicMembers.map((member) => (
                        <div key={member._id} className="bg-surface p-6 rounded-[2rem] text-center shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-primary/5">
                                <img
                                    className="w-full h-full object-cover"
                                    src={member.image || "https://placehold.co/400x400?text=No+Image"}
                                    alt={member.name}
                                />
                            </div>
                            <h5 className="text-lg font-bold text-primary mb-1">
                                {member.name}
                            </h5>
                            <p className="text-secondary font-medium text-sm mb-4">
                                {member.role}
                            </p>
                            <div className="flex justify-center gap-3 h-5">
                                {member.contactInfo && (
                                    <span className="text-xs text-stone-500 font-medium">
                                        {member.contactInfo}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                    {dynamicMembers.length === 0 && (
                        <div className="col-span-full text-center text-stone-500 py-12">
                            কোনো দলের সদস্য পাওয়া যায়নি (No team members found).
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
