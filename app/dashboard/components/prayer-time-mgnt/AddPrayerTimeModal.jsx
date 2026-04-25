import React, { useState, useEffect } from 'react';

function AddPrayerTimeModal({ isOpen, onClose, onAdd, onUpdate, editingPrayer }) {
    const [name, setName] = useState('');
    const [type, setType] = useState('daily');
    const [adhanTime, setAdhanTime] = useState('');
    const [adhanAMPM, setAdhanAMPM] = useState('AM');
    const [iqamahTime, setIqamahTime] = useState('');
    const [iqamahAMPM, setIqamahAMPM] = useState('AM');

    useEffect(() => {
        if (editingPrayer) {
            setName(editingPrayer.name || '');
            setType(editingPrayer.type || 'daily');
            
            // Parse existing Adhan (e.g. "04:30 AM")
            if (editingPrayer.adhan) {
                const match = editingPrayer.adhan.match(/(.*)\s+(AM|PM)/i);
                if (match) {
                    setAdhanTime(match[1].trim());
                    setAdhanAMPM(match[2].toUpperCase());
                } else {
                    setAdhanTime(editingPrayer.adhan);
                    setAdhanAMPM('AM');
                }
            } else {
                setAdhanTime('');
                setAdhanAMPM('AM');
            }

            // Parse existing Iqamah
            if (editingPrayer.iqamah) {
                const match = editingPrayer.iqamah.match(/(.*)\s+(AM|PM)/i);
                if (match) {
                    setIqamahTime(match[1].trim());
                    setIqamahAMPM(match[2].toUpperCase());
                } else {
                    setIqamahTime(editingPrayer.iqamah);
                    setIqamahAMPM('AM');
                }
            } else {
                setIqamahTime('');
                setIqamahAMPM('AM');
            }
        } else {
            setName('');
            setType('daily');
            setAdhanTime('');
            setAdhanAMPM('AM');
            setIqamahTime('');
            setIqamahAMPM('AM');
        }
    }, [editingPrayer, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const payload = {
            name,
            type,
            adhan: adhanTime ? `${adhanTime} ${adhanAMPM}` : '',
            iqamah: `${iqamahTime} ${iqamahAMPM}`,
            status: "Scheduled",
            color: type === 'jummah' ? 'bg-secondary' : type === 'eid' ? 'bg-primary' : "bg-surface-variant" 
        };

        if (editingPrayer) {
            onUpdate({ ...payload, id: editingPrayer.id });
        } else {
            onAdd(payload);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-surface-container-lowest rounded-2xl shadow-xl w-full max-w-md p-6 border border-outline-variant/20">
                <h3 className="text-xl font-serif text-primary mb-4">
                    নামাজের সময় {editingPrayer ? 'পরিবর্তন' : 'যোগ'} করুন
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-on-surface-variant mb-1">নামাজের নাম</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/50 text-sm outline-none"
                            placeholder="উদাহরণ: ফজর, জুম্মা, ঈদুল ফিতর"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-on-surface-variant mb-1">নামাজের ধরন</label>
                        <select
                            required
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/50 text-sm outline-none"
                        >
                            <option value="daily">দৈনিক ৫ ওয়াক্ত</option>
                            <option value="jummah">জুম্মা</option>
                            <option value="eid">ঈদ</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-on-surface-variant mb-1">আজানের সময় (ঐচ্ছিক)</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={adhanTime}
                                onChange={(e) => setAdhanTime(e.target.value)}
                                className="flex-1 px-4 py-2 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/50 text-sm outline-none"
                                placeholder="উদাহরণ: 03:30 (না থাকলে ফাঁকা রাখুন)"
                            />
                            <select
                                value={adhanAMPM}
                                onChange={(e) => setAdhanAMPM(e.target.value)}
                                className="px-4 py-2 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/50 text-sm outline-none"
                            >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-on-surface-variant mb-1">ইকামাত / নামাজের সময়</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                required
                                value={iqamahTime}
                                onChange={(e) => setIqamahTime(e.target.value)}
                                className="flex-1 px-4 py-2 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/50 text-sm outline-none"
                                placeholder="উদাহরণ: 04:00"
                            />
                            <select
                                value={iqamahAMPM}
                                onChange={(e) => setIqamahAMPM(e.target.value)}
                                className="px-4 py-2 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/50 text-sm outline-none"
                            >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-8">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-xl font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
                        >
                            বাতিল করুন
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-xl font-semibold bg-primary text-on-primary hover:opacity-90 transition-opacity"
                        >
                            {editingPrayer ? 'আপডেট' : 'যোগ'} করুন
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPrayerTimeModal;
