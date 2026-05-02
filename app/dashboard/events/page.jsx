"use client";

import { useDashboard } from "../components/DashboardContext";
import { useState, useEffect } from "react";
import EventModal from "./components/EventModal";
import { getEvents, createEvent, updateEvent, deleteEvent } from "@/app/actions/eventActions";

export default function EventsMgnt() {
  const { toggleSidebar } = useDashboard();
  
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEvents = async () => {
    setIsLoading(true);
    const result = await getEvents();
    if (result.success) {
      setEvents(result.data);
    } else {
      console.error(result.error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleOpenModal = (event = null) => {
    setEditingEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingEvent(null);
    setIsModalOpen(false);
  };

  const handleModalSubmit = async (formData, id) => {
    if (id) {
      const result = await updateEvent(id, formData);
      if (result.success) {
        setEvents((prev) => prev.map((e) => (e._id === id ? result.data : e)));
      } else {
        alert(result.error || "Failed to update");
      }
    } else {
      const result = await createEvent(formData);
      if (result.success) {
        setEvents((prev) => [result.data, ...prev]);
      } else {
        alert(result.error || "Failed to create");
      }
    }
    handleCloseModal();
  };

  const handleDelete = async (id) => {
    if (!confirm("আপনি কি নিশ্চিত যে আপনি এই ইভেন্টটি মুছে ফেলতে চান?")) return;
    const result = await deleteEvent(id);
    if (result.success) {
      setEvents((prev) => prev.filter((e) => e._id !== id));
    } else {
      alert(result.error || "Failed to delete");
    }
  };

  return (
    <main className="flex-1 lg:ml-64 p-4 md:p-10 lg:p-16">
      <header className="mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="flex items-center gap-4">
            <button 
                onClick={toggleSidebar}
                className="lg:hidden p-2 -ml-2 text-stone-500 hover:bg-stone-100 rounded-full"
            >
                <span className="material-symbols-outlined">menu</span>
            </button>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">
                ইভেন্ট ব্যবস্থাপনা
              </span>
              <h2 className="text-2xl md:text-4xl font-headline font-bold text-primary">
                সামাজিক কার্যক্রম
              </h2>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 w-full sm:w-auto">
            <button 
              onClick={() => handleOpenModal()}
              className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold rounded-xl shadow-[0px_20px_40px_rgba(21,66,18,0.06)] hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              নতুন ইভেন্ট
            </button>
          </div>
        </div>
      </header>
      
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-full flex justify-center py-12">
              <span className="material-symbols-outlined animate-spin text-primary text-4xl">sync</span>
            </div>
          ) : (
            <>
              {events.map((event) => (
                <div key={event._id} className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/10 group flex flex-col justify-between overflow-hidden">
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                        {event.category}
                      </span>
                      <h4 className="text-xl font-headline font-bold text-primary mb-2 line-clamp-2">
                        {event.title}
                      </h4>
                    </div>
                    {event.image && (
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-outline-variant/10">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-on-surface-variant mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      {event.eventTime}
                    </p>
                    <p className="text-sm text-on-surface-variant mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <p className="text-xs font-bold text-on-surface-variant mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">person</span>
                      {event.author}
                    </p>
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-outline-variant/10">
                    <button onClick={() => handleOpenModal(event)} className="flex-1 py-2 text-primary hover:bg-primary-container rounded-lg transition-colors font-bold text-sm flex justify-center items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">edit</span> এডিট
                    </button>
                    <button onClick={() => handleDelete(event._id)} className="flex-1 py-2 text-error hover:bg-error-container rounded-lg transition-colors font-bold text-sm flex justify-center items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">delete</span> মুছুন
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Add New Event Placeholder */}
              <div 
                onClick={() => handleOpenModal()}
                className="bg-surface-container-low rounded-[2rem] p-8 border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container transition-all min-h-[300px]"
              >
                <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <span className="material-symbols-outlined text-[40px] text-primary">event_note</span>
                </div>
                <h4 className="text-lg font-bold text-primary">নতুন ইভেন্ট তৈরি করুন</h4>
                <p className="text-sm text-on-surface-variant max-w-[200px] mt-2">
                  মসজিদের জন্য একটি নতুন কার্যক্রম বা ইভেন্ট যোগ করুন।
                </p>
              </div>
            </>
          )}
        </div>
      </section>
      
      <EventModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
        editingEvent={editingEvent}
      />
    </main>
  );
}
