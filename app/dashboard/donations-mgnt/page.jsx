"use client";
import CampaignMgnt from "../components/donations-mgnt/CampaignMgnt";
import DonationsList from "../components/donations-mgnt/DonationsList";
import DonationsSummary from "../components/donations-mgnt/DonationsSummary";
import { useDashboard } from "../components/DashboardContext";


function DonationMgnt() {
  const { toggleSidebar } = useDashboard();

  return (
    <>
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* TopNavBar Component */}
        <header className="flex justify-between items-center w-full px-4 md:px-8 py-4 bg-surface/80 backdrop-blur-md sticky top-0 z-30 border-b border-outline-variant/10">
          <div className="flex items-center gap-4">
            <button 
                onClick={toggleSidebar}
                className="lg:hidden p-2 -ml-2 text-stone-500 hover:bg-stone-100 rounded-full"
            >
                <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-base md:text-xl font-bold text-green-900 font-headline truncate">
              দি স্যাক্রেড স্যাংচুয়ারি
            </h2>
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden sm:flex relative items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20 focus-within:border-secondary transition-colors">
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-32 md:w-64 placeholder:text-on-surface-variant/50"
                placeholder="লেনদেন খুঁজুন..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-1 md:gap-3">
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hidden xs:block">
                <span className="material-symbols-outlined text-[20px]">settings</span>
              </button>
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary-container overflow-hidden border-2 border-white shadow-sm">
                <img
                  alt="Admin Profile Avatar"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIljg8x6-QDw4OnMVirPiPDGL2dJTVaWWPsWKYnuQvrKfQQGgnIipJWJAwwiiJ1ir6pBq2_hqhxiQNC-3X90Qdw5IbyffjANcyduo1T2QbsB7iMTGVDviPOg979Ha8ZCUhng6EBmJ_656vMJTUe1oDOugl5-4LqUn5ybWhbWdATm4xh8vY1oE3sVnMTaQGqIqhthhwCZvXKgDiAxsKlsmm58YD75HSS6hBeHEqhGBYyuIDzSkqxusfVuYY84zzoN99EZVYc1qEwtw"
                />
              </div>
            </div>
          </div>
        </header>
        {/* Content Canvas */}
        <div className="px-4 md:px-8 py-8 max-w-7xl mx-auto w-full space-y-10">
          {/* Hero Summary Section */}
          <DonationsSummary/>
          {/* Campaign Management Section */}
          <CampaignMgnt/>
          {/* Donation Ledger Table Section */}
          <DonationsList/>
        </div>
      </main>
      {/* FAB: Add Manual Entry */}
      <button className="fixed bottom-8 right-8 flex items-center gap-3 bg-secondary text-on-secondary px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-[24px]">add</span>
        <span className="font-bold tracking-tight hidden sm:inline">ম্যানুয়ালি যোগ করুন</span>
      </button>
    </>
  );
}

export default DonationMgnt;
