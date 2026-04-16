import React, { useState } from 'react';

function AddPrayerTimeModal({ isOpen, onClose, onAdd }) {
    const [name, setName] = useState('');
    const [adhan, setAdhan] = useState('');
    const [iqamah, setIqamah] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            name,
            adhan,
            iqamah,
            status: "Scheduled",
            color: "bg-surface-variant" 
        });
        setName('');
        setAdhan('');
        setIqamah('');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-surface-container-lowest rounded-2xl shadow-xl w-full max-w-md p-6 border border-outline-variant/20">
                <h3 className="text-xl font-serif text-primary mb-4">Add Prayer Time</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-on-surface-variant mb-1">Prayer Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/50 text-sm outline-none"
                            placeholder="e.g., Tahajjud"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-on-surface-variant mb-1">Adhan Time</label>
                        <input
                            type="text"
                            required
                            value={adhan}
                            onChange={(e) => setAdhan(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/50 text-sm outline-none"
                            placeholder="e.g., 03:30 AM"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-on-surface-variant mb-1">Iqamah Time</label>
                        <input
                            type="text"
                            required
                            value={iqamah}
                            onChange={(e) => setIqamah(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/50 text-sm outline-none"
                            placeholder="e.g., 04:00 AM"
                        />
                    </div>
                    <div className="flex justify-end gap-3 mt-8">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-xl font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-xl font-semibold bg-primary text-on-primary hover:opacity-90 transition-opacity"
                        >
                            Add Prayer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPrayerTimeModal;
