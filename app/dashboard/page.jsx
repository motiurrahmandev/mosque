import ActivitiesTable from "./components/dashboard/ActivitiesTable";
import DashboardHeader from "./components/dashboard/DashboardHeader";
import KPIGrid from "./components/dashboard/KPIGrid";
import PrayerWidget from "./components/dashboard/PrayerWidget";
import StaffOnDuty from "./components/dashboard/StaffOnDuty";
import Link from "next/link";


function DashboardPage() {
  return (
    <>
      {/* SideNavBar */}

      {/* Main Content Canvas */}
      <main className="flex-1 lg:ml-64 p-4 md:p-8">
        {/* Header Section */}
        <DashboardHeader />
        {/* KPI Bento Grid */}
        <KPIGrid />
        {/* Main Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities (Table/List) */}
          <ActivitiesTable />
          {/* Right Column Sidebar */}
          <div className="space-y-8">
            {/* Quick Action Buttons */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">
                দ্রুত অ্যাক্সেস
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/dashboard/email-list" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/5">
                  <span className="material-symbols-outlined text-primary text-[24px]">mail</span>
                  <span className="text-xs font-bold">ইমেইল লিস্ট</span>
                </Link>
                <Link href="/dashboard/tax-receipt" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/5">
                  <span className="material-symbols-outlined text-primary text-[24px]">receipt_long</span>
                  <span className="text-xs font-bold">ট্যাক্স রিসিপ্ট</span>
                </Link>
                <Link href="/dashboard/book-hall" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/5">
                  <span className="material-symbols-outlined text-primary text-[24px]">calendar_add_on</span>
                  <span className="text-xs font-bold">হল বুকিং</span>
                </Link>
                <Link href="/dashboard/settings" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/5">
                  <span className="material-symbols-outlined text-primary text-[24px]">settings</span>
                  <span className="text-xs font-bold">সেটিংস</span>
                </Link>
              </div>
            </div>
            {/* Prayer Widget */}
            <PrayerWidget />
            {/* Staff on Duty */}
            <StaffOnDuty />
          </div>
        </div>
      </main>
      {/* Footer */}
      {/* <footer className="w-full py-12 px-8 mt-auto fixed bottom-0 left-0 bg-stone-100 dark:bg-stone-900 z-10 ml-64 flex justify-between items-center pointer-events-none opacity-0 lg:opacity-100 lg:relative lg:ml-0">
        <div className="max-w-7xl mx-auto flex justify-between w-full items-center">
          <div>
            <span className="font-serif text-lg text-green-900 dark:text-green-500">
              The Sacred Sanctuary
            </span>
            <p className="font-sans text-sm text-stone-600 dark:text-stone-400 mt-2">
              © 2024 The Sacred Sanctuary. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              className="text-stone-500 hover:text-green-800 transition-all font-sans text-sm hover:underline decoration-amber-600"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-stone-500 hover:text-green-800 transition-all font-sans text-sm hover:underline decoration-amber-600"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-stone-500 hover:text-green-800 transition-all font-sans text-sm hover:underline decoration-amber-600"
              href="#"
            >
              Contact Info
            </a>
          </div>
        </div>
      </footer> */}
    </>
  );
}

export default DashboardPage;
