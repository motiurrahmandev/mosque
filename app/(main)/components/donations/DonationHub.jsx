'use client';

import React, { useState, useEffect } from 'react'
import homeData from '../../data/homeData.json'
import DynamicIcon from '../ui/DynamicIcon'
// import { createDonation } from '../../actions/donationActions'
import { createDonation, getDonations } from '@/app/actions/donationActions';

function DonationHub({ selectedCampaign }) {
    const { donation } = homeData;

    // State for form fields
    const [selectedType, setSelectedType] = useState(donation.types[0].label);
    const [amount, setAmount] = useState('');
    const [selectedMethod, setSelectedMethod] = useState(donation.methods[2].label); // Default to bKash/Nagad
    const [donorName, setDonorName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');

    // UI State
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Recent Donors History
    const [recentDonors, setRecentDonors] = useState([]);

    useEffect(() => {
        fetchRecentDonors();
    }, []);

    const fetchRecentDonors = async () => {
        const result = await getDonations();
        if (result.success) {
            setRecentDonors(result.data.slice(0, 3));
        }
    };

    // Sync selected campaign from parent
    useEffect(() => {
        if (selectedCampaign) {
            setSelectedType(selectedCampaign);
        }
    }, [selectedCampaign]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage({ type: '', text: '' });

        // Calculate final amount
        const finalAmount = amount;

        if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
            setMessage({ type: 'error', text: 'অনুগ্রহ করে সঠিক পরিমাণ লিখুন' });
            setIsLoading(false);
            return;
        }

        if (!donorName || !donorEmail) {
            setMessage({ type: 'error', text: 'নাম এবং ইমেইল প্রদান করা আবশ্যক' });
            setIsLoading(false);
            return;
        }

        const formData = {
            name: donorName,
            email: donorEmail,
            category: selectedType,
            amount: finalAmount,
            paymentMethod: selectedMethod
        };

        const result = await createDonation(formData);

        if (result.success) {
            setMessage({ type: 'success', text: result.message });
            fetchRecentDonors(); // Refresh history
            // Reset form
            setDonorName('');
            setDonorEmail('');
            setAmount('');
        } else {
            setMessage({ type: 'error', text: result.message });
        }

        setIsLoading(false);
    };

    return (
        <section id="donate" className="tonal-shift-surface-container-low py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    { /* Donation Form Container */}
                    <div className="lg:col-span-2 bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/10">
                        <h2 className="font-headline text-3xl text-primary mb-8">{donation.title}</h2>

                        <form onSubmit={handleSubmit}>
                            { /* Donation Type Selector */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {donation.types.map((type, index) => (
                                    <button
                                        type="button"
                                        key={index}
                                        onClick={() => setSelectedType(type.label)}
                                        className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${selectedType === type.label ? 'border-2 border-secondary bg-secondary-fixed/10 text-on-secondary-fixed-variant' : 'border-2 border-transparent bg-surface-container hover:bg-surface-container-high text-on-surface-variant'}`}
                                    >
                                        <DynamicIcon name={type.icon} className="w-8 h-8 mb-2" />
                                        <span className="font-bold">{type.label}</span>
                                    </button>
                                ))}
                                
                                {selectedType && !donation.types.some(t => t.label === selectedType) && (
                                    <button
                                        type="button"
                                        className="col-span-2 flex items-center justify-center p-4 rounded-2xl border-2 border-secondary bg-secondary-fixed/10 text-on-secondary-fixed-variant transition-all duration-300"
                                    >
                                        <DynamicIcon name="campaign" className="w-6 h-6 mr-3" />
                                        <span className="font-bold">ক্যাম্পেইন: {selectedType}</span>
                                    </button>
                                )}
                            </div>

                            { /* Donor Info */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block label-md uppercase tracking-widest text-on-surface-variant mb-2 font-semibold">আপনার নাম</label>
                                    <input
                                        type="text"
                                        value={donorName}
                                        onChange={(e) => setDonorName(e.target.value)}
                                        placeholder="উদা: আব্দুল্লাহ"
                                        className="w-full bg-surface-container p-4 rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block label-md uppercase tracking-widest text-on-surface-variant mb-2 font-semibold">আপনার ইমেইল</label>
                                    <input
                                        type="email"
                                        value={donorEmail}
                                        onChange={(e) => setDonorEmail(e.target.value)}
                                        placeholder="email@example.com"
                                        className="w-full bg-surface-container p-4 rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        required
                                    />
                                </div>
                            </div>

                            { /* Amount Input */}
                            <div className="mb-8">
                                <label className="block label-md uppercase tracking-widest text-on-surface-variant mb-4 font-semibold">{donation.amountLabel}</label>
                                <div className="relative group">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-primary group-focus-within:scale-110 transition-transform">৳</div>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="টাকার পরিমাণ লিখুন"
                                        className="w-full bg-surface-container pl-12 pr-6 py-5 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-surface-container-high transition-all text-2xl font-bold text-on-surface focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            { /* Payment Method */}
                            <div className="mb-10">
                                <p className="label-md uppercase tracking-widest text-on-surface-variant mb-4 font-semibold">{donation.methodLabel}</p>
                                <div className="flex flex-wrap gap-4">
                                    {donation.methods.map((method, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedMethod(method.label)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 cursor-pointer ${selectedMethod === method.label ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant hover:bg-surface-container text-on-surface-variant'}`}
                                        >
                                            <DynamicIcon name={method.icon} className="w-5 h-5" />
                                            <span className="font-medium">{method.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            { /* Feedback Message */}
                            {message.text && (
                                <div className={`mb-6 p-4 rounded-xl text-center font-medium animate-in zoom-in duration-300 ${message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                                    {message.text}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-2xl text-xl font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group transition-all duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-[0.99]'}`}
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        {donation.buttonText}
                                        <DynamicIcon name={donation.buttonIcon} className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    { /* History Summary */}
                    <div className="bg-surface-container-high/50 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
                        <h3 className="font-headline text-2xl text-primary mb-6">{donation.historyTitle}</h3>
                        <div className="space-y-6">
                            {recentDonors.length > 0 ? (
                                recentDonors.map((item, index) => (
                                    <div key={item._id} className="flex gap-4 items-start animate-in fade-in slide-in-from-right-4 duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                                        <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                                            <DynamicIcon name="history" className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-on-surface">{item.name}</p>
                                            <p className="text-sm text-on-surface-variant line-clamp-2">
                                                {item.category} খাতে ৳{item.amount.toLocaleString()} দান করেছেন
                                            </p>
                                            <p className="text-xs text-outline mt-1">
                                                {new Date(item.createdAt).toLocaleDateString('bn-BD', { day: 'numeric', month: 'long' })}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-on-surface-variant italic">কোনো সাম্প্রতিক অবদান পাওয়া যায়নি</p>
                            )}
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