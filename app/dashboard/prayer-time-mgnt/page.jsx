"use client";

import { useState, useEffect } from "react";
import PrayerActionCard from "../components/prayer-time-mgnt/PrayerActionCard";
import PrayerList from "../components/prayer-time-mgnt/PrayerList";
import AddPrayerTimeModal from "../components/prayer-time-mgnt/AddPrayerTimeModal";
import { useDashboard } from "../components/DashboardContext";


function PrayerTimeMgnt() {
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPrayer, setEditingPrayer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toggleSidebar } = useDashboard();

  const fetchPrayerTimes = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/prayer-times");
      if (res.ok) {
        const data = await res.json();
        setPrayerTimes(data);
      }
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  const handleAddPrayer = async (newPrayer) => {
    try {
      const res = await fetch("/api/prayer-times", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPrayer),
      });

      if (res.ok) {
        const addedPrayer = await res.json();
        setPrayerTimes([...prayerTimes, addedPrayer]);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error adding prayer:", error);
    }
  };

  const handleUpdatePrayer = async (updatedPrayer) => {
    try {
      const res = await fetch(`/api/prayer-times/${updatedPrayer.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPrayer),
      });

      if (res.ok) {
        const editedPrayer = await res.json();
        setPrayerTimes(prayerTimes.map(p => p.id === editedPrayer.id ? editedPrayer : p));
        setIsModalOpen(false);
        setEditingPrayer(null);
      }
    } catch (error) {
      console.error("Error updating prayer:", error);
    }
  };

  const handleDeletePrayer = async (id) => {
    const confirmDelete = window.confirm("আপনি কি নিশ্চিত যে আপনি এই নামাজের সময়টি মুছে ফেলতে চান?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/prayer-times/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setPrayerTimes(prayerTimes.filter(p => p.id !== id));
      }
    } catch (error) {
      console.error("Error deleting prayer:", error);
    }
  };

  const openAddModal = () => {
    setEditingPrayer(null);
    setIsModalOpen(true);
  };

  const openEditModal = (prayer) => {
    setEditingPrayer(prayer);
    setIsModalOpen(true);
  };

  return (
    <main className="flex-1 lg:ml-64 p-4 md:p-10 min-h-screen">
      {/* Header Section */}
      <header className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div className="flex items-center gap-4">
          <button 
              onClick={toggleSidebar}
              className="lg:hidden p-2 -ml-2 text-stone-500 hover:bg-stone-100 rounded-full"
          >
              <span className="material-symbols-outlined">menu</span>
          </button>
          <div>
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
              নামাজের সময়সূচী
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-on-surface">
              নামাজের সময়সূচী পরিচালনা
            </h2>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-4 md:px-6 py-3 rounded-xl border border-outline-variant font-semibold text-primary hover:bg-surface-container transition-all flex items-center justify-center gap-2 text-sm">
            <span className="material-symbols-outlined text-[20px]">history</span>
            <span className="hidden xs:inline">লগ দেখুন</span>
          </button>
          <button 
            onClick={openAddModal}
            className="flex-1 sm:flex-none px-4 md:px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold shadow-[0px_20px_40px_rgba(21,66,18,0.06)] hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            যোগ করুন
          </button>
        </div>
      </header>
      {/* Bento Grid Stats & Action Cards */}
      <PrayerActionCard prayerTimes={prayerTimes} />
      {/* Editable Table Section */}
      <PrayerList 
        prayerTimes={prayerTimes} 
        onEdit={openEditModal}
        onDelete={handleDeletePrayer}
        isLoading={isLoading}
      />
      {/* System Alerts / Activity Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/40 backdrop-blur-xl p-6 rounded-xl border border-outline-variant/10">
          <h4 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-amber-600">notifications</span>
            সাম্প্রতিক কার্যকলাপ
          </h4>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1 bg-secondary rounded-full" />
              <div>
                <p className="text-sm font-medium">
                  মাগরিবের ইকামাত +২ মিনিট পরিবর্তন করা হয়েছে
                </p>
                <p className="text-xs text-on-surface-variant">
                  অ্যাডমিন • ২ ঘন্টা আগে
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-outline-variant rounded-full" />
              <div>
                <p className="text-sm font-medium">
                  স্বয়ংক্রিয় সিঙ্ক সফলভাবে সম্পন্ন হয়েছে
                </p>
                <p className="text-xs text-on-surface-variant">
                  সিস্টেম • ৫ ঘন্টা আগে
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/5">
          <h4 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-4">
            একনজরে তথ্য
          </h4>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs text-on-surface-variant">
                  অ্যাপ ট্রাফিক (নামাজের সময়)
                </span>
                <span className="text-sm font-bold text-primary">+12%</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[65%] rounded-full" />
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[24px]">trending_up</span>
            </div>
          </div>
        </div>
      </div>
      <AddPrayerTimeModal 
        isOpen={isModalOpen} 
        onClose={() => {
            setIsModalOpen(false);
            setEditingPrayer(null);
        }} 
        onAdd={handleAddPrayer}
        onUpdate={handleUpdatePrayer}
        editingPrayer={editingPrayer}
      />
    </main>
  );
}

export default PrayerTimeMgnt;
