import ActivitisTable from "./compontnts/dashboard/ActivitisTable";
import DashbordHeader from "./compontnts/dashboard/DashbordHeader";
import KPIGrid from "./compontnts/dashboard/KPIGrid";
import PrayerWidget from "./compontnts/dashboard/PrayerWidget";
import StaffOnDuty from "./compontnts/dashboard/StaffOnDuty";
import Link from "next/link";
import { Mail, Receipt, CalendarPlus, Settings } from "lucide-react";

function DashboardPage() {
  return (
    <>
      {/* SideNavBar */}

      {/* Main Content Canvas */}
      <main className="flex-1 ml-64 p-8">
        {/* Header Section */}
        <DashbordHeader />
        {/* KPI Bento Grid */}
        <KPIGrid />
        {/* Main Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities (Table/List) */}
          <ActivitisTable />
          {/* Right Column Sidebar */}
          <div className="space-y-8">
            {/* Quick Action Buttons */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/dashboard/email-list" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/5">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-xs font-bold">Email List</span>
                </Link>
                <Link href="/dashboard/tax-receipt" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/5">
                  <Receipt className="w-6 h-6 text-primary" />
                  <span className="text-xs font-bold">Tax Receipt</span>
                </Link>
                <Link href="/dashboard/book-hall" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/5">
                  <CalendarPlus className="w-6 h-6 text-primary" />
                  <span className="text-xs font-bold">Book Hall</span>
                </Link>
                <Link href="/dashboard/settings" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/5">
                  <Settings className="w-6 h-6 text-primary" />
                  <span className="text-xs font-bold">Settings</span>
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
