function FinancialPage() {
  return (
    <main className="flex-1 md:ml-64 p-8 min-h-screen">
      {/* Top Section: Header & Quick Actions */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
            Financial Oversight
          </span>
          <h1 className="text-4xl font-headline font-bold text-primary">
            Financial Management
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-surface-container-highest text-primary font-bold hover:opacity-80 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">download</span>
            Export Report
          </button>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold shadow-lg shadow-primary/10 hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">add</span>
            New Entry
          </button>
        </div>
      </header>
      {/* Balance Summary Cards (Asymmetric Bento Grid) */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        <div className="md:col-span-2 lg:col-span-2 bg-primary-container text-on-primary-container p-8 rounded-xl relative overflow-hidden flex flex-col justify-between h-52">
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-pattern opacity-5" />
          <div>
            <p className="text-sm font-medium opacity-80 uppercase tracking-wider">
              Total Mosque Balance
            </p>
            <h2 className="text-5xl font-headline font-bold mt-2">
              $242,580.00
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-primary px-2 py-1 rounded-full text-white text-xs font-bold">
              +12.4%
            </span>
            <span>vs last month</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl border-b-4 border-amber-600 shadow-sm flex flex-col justify-between h-52">
          <div>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest">
              Monthly Income
            </p>
            <h3 className="text-3xl font-headline font-bold text-on-surface mt-2">
              $42,150
            </h3>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex gap-1">
              <div className="w-2 h-8 bg-surface-variant rounded-full" />
              <div className="w-2 h-12 bg-surface-variant rounded-full" />
              <div className="w-2 h-16 bg-secondary rounded-full" />
              <div className="w-2 h-10 bg-secondary rounded-full" />
            </div>
            <span className="material-symbols-outlined text-amber-600">
              trending_up
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl border-b-4 border-primary shadow-sm flex flex-col justify-between h-52">
          <div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              Monthly Expenses
            </p>
            <h3 className="text-3xl font-headline font-bold text-on-surface mt-2">
              $18,420
            </h3>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex gap-1">
              <div className="w-2 h-12 bg-surface-variant rounded-full" />
              <div className="w-2 h-8 bg-surface-variant rounded-full" />
              <div className="w-2 h-10 bg-primary-container rounded-full" />
              <div className="w-2 h-6 bg-primary-container rounded-full" />
            </div>
            <span className="material-symbols-outlined text-primary">
              analytics
            </span>
          </div>
        </div>
      </section>
      {/* Main Workspace: Charts and Entry Forms */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Transaction Forms */}
        <div className="lg:col-span-1 space-y-8">
          {/* Entry Form */}
          <div className="bg-surface-container-low p-8 rounded-xl">
            <h4 className="text-xl font-headline font-bold text-primary mb-6">
              Quick Transaction Entry
            </h4>
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Transaction Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className="py-2 rounded-lg border-2 border-primary text-primary font-bold text-sm bg-white"
                    type="button"
                  >
                    Income
                  </button>
                  <button
                    className="py-2 rounded-lg border-2 border-transparent text-on-surface-variant font-bold text-sm hover:bg-surface-variant transition-colors"
                    type="button"
                  >
                    Expense
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Category
                </label>
                <select className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:ring-0 focus:border-secondary text-sm font-medium py-3">
                  <option>Zakat & Sadaqah</option>
                  <option>Friday Collection</option>
                  <option>Utility Bills</option>
                  <option>Maintenance</option>
                  <option>Staff Salaries</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Amount (USD)
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:ring-0 focus:border-secondary text-2xl font-bold font-headline py-3"
                  placeholder="0.00"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Date
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:ring-0 focus:border-secondary text-sm font-medium py-3"
                  type="date"
                />
              </div>
              <button
                className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold hover:bg-primary-container transition-all shadow-md"
                type="submit"
              >
                Record Transaction
              </button>
            </form>
          </div>
          {/* Recent Activity (Vertical Pillar Layout) */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
            <h4 className="text-xl font-headline font-bold text-primary mb-6">
              Recent History
            </h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-1.5 h-12 bg-secondary rounded-full group-hover:h-14 transition-all" />
                <div className="flex-1">
                  <p className="text-sm font-bold">General Donation</p>
                  <p className="text-xs text-on-surface-variant">
                    Anonymous • June 12, 2024
                  </p>
                </div>
                <span className="text-sm font-bold text-green-700">
                  +$1,200
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-1.5 h-12 bg-primary rounded-full group-hover:h-14 transition-all" />
                <div className="flex-1">
                  <p className="text-sm font-bold">Roof Repair</p>
                  <p className="text-xs text-on-surface-variant">
                    Maintenance • June 10, 2024
                  </p>
                </div>
                <span className="text-sm font-bold text-error">-$4,500</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-1.5 h-12 bg-secondary rounded-full group-hover:h-14 transition-all" />
                <div className="flex-1">
                  <p className="text-sm font-bold">Zakat al-Fitr</p>
                  <p className="text-xs text-on-surface-variant">
                    Community • June 08, 2024
                  </p>
                </div>
                <span className="text-sm font-bold text-green-700">+$850</span>
              </div>
            </div>
            <button className="w-full mt-8 text-sm font-bold text-secondary uppercase tracking-widest hover:underline transition-all">
              View All Ledger Items
            </button>
          </div>
        </div>
        {/* Right Side: Trends and Analytics */}
        <div className="lg:col-span-2 space-y-8">
          {/* Trend Chart Placeholder */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h4 className="text-2xl font-headline font-bold text-primary">
                  Monthly Cashflow Trends
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Yearly comparative overview 2024
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-xs font-bold text-on-surface-variant">
                    Income
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary-container" />
                  <span className="text-xs font-bold text-on-surface-variant">
                    Expenses
                  </span>
                </div>
              </div>
            </div>
            {/* Visual Representation of Chart */}
            <div className="h-80 flex items-end justify-between px-4 pb-8 border-b-2 border-surface-variant gap-4">
              <div className="flex flex-col items-center flex-1 h-full justify-end gap-1">
                <div
                  className="w-full max-w-[24px] bg-secondary rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: "60%" }}
                />
                <div
                  className="w-full max-w-[24px] bg-primary-container/40 rounded-t-lg"
                  style={{ height: "40%" }}
                />
                <span className="text-[10px] font-bold text-on-surface-variant mt-4">
                  JAN
                </span>
              </div>
              <div className="flex flex-col items-center flex-1 h-full justify-end gap-1">
                <div
                  className="w-full max-w-[24px] bg-secondary rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: "75%" }}
                />
                <div
                  className="w-full max-w-[24px] bg-primary-container/40 rounded-t-lg"
                  style={{ height: "35%" }}
                />
                <span className="text-[10px] font-bold text-on-surface-variant mt-4">
                  FEB
                </span>
              </div>
              <div className="flex flex-col items-center flex-1 h-full justify-end gap-1">
                <div
                  className="w-full max-w-[24px] bg-secondary rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: "50%" }}
                />
                <div
                  className="w-full max-w-[24px] bg-primary-container/40 rounded-t-lg"
                  style={{ height: "45%" }}
                />
                <span className="text-[10px] font-bold text-on-surface-variant mt-4">
                  MAR
                </span>
              </div>
              <div className="flex flex-col items-center flex-1 h-full justify-end gap-1">
                <div
                  className="w-full max-w-[24px] bg-secondary rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: "90%" }}
                />
                <div
                  className="w-full max-w-[24px] bg-primary-container/40 rounded-t-lg"
                  style={{ height: "30%" }}
                />
                <span className="text-[10px] font-bold text-on-surface-variant mt-4">
                  APR
                </span>
              </div>
              <div className="flex flex-col items-center flex-1 h-full justify-end gap-1">
                <div
                  className="w-full max-w-[24px] bg-secondary rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: "85%" }}
                />
                <div
                  className="w-full max-w-[24px] bg-primary-container/40 rounded-t-lg"
                  style={{ height: "50%" }}
                />
                <span className="text-[10px] font-bold text-on-surface-variant mt-4">
                  MAY
                </span>
              </div>
              <div className="flex flex-col items-center flex-1 h-full justify-end gap-1">
                <div
                  className="w-full max-w-[24px] bg-secondary rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: "65%" }}
                />
                <div
                  className="w-full max-w-[24px] bg-primary-container/40 rounded-t-lg"
                  style={{ height: "40%" }}
                />
                <span className="text-[10px] font-bold text-on-surface-variant mt-4">
                  JUN
                </span>
              </div>
            </div>
          </div>
          {/* Financial Goals / Progress Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container p-8 rounded-xl">
              <h5 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                Ramadan Preparation Fund
              </h5>
              <div className="flex gap-4 items-end mb-4">
                <div className="flex-1 h-4 bg-surface-container-highest rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full"
                    style={{ width: "68%" }}
                  />
                </div>
                <span className="text-sm font-bold">68%</span>
              </div>
              <p className="text-xs text-on-surface-variant font-medium">
                Goal: $50,000 | Current: $34,200
              </p>
            </div>
            <div className="bg-surface-container p-8 rounded-xl">
              <h5 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                Mosque Expansion Project
              </h5>
              <div className="flex gap-4 items-end mb-4">
                <div className="flex-1 h-4 bg-surface-container-highest rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full"
                    style={{ width: "42%" }}
                  />
                </div>
                <span className="text-sm font-bold">42%</span>
              </div>
              <p className="text-xs text-on-surface-variant font-medium">
                Goal: $1.2M | Current: $504,000
              </p>
            </div>
          </div>
          {/* Expense Breakdown (Editorial List) */}
          <div className="bg-surface-container-low p-8 rounded-xl">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-xl font-headline font-bold text-primary">
                Expense Breakdown
              </h4>
              <button className="text-xs font-bold text-secondary uppercase tracking-widest underline">
                Manage Categories
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ul className="space-y-6">
                <li className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
                  <span className="text-sm font-bold">Staff Salaries</span>
                  <span className="text-sm text-on-surface-variant font-medium">
                    45%
                  </span>
                </li>
                <li className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
                  <span className="text-sm font-bold">Utility & Bills</span>
                  <span className="text-sm text-on-surface-variant font-medium">
                    22%
                  </span>
                </li>
                <li className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
                  <span className="text-sm font-bold">Maintenance</span>
                  <span className="text-sm text-on-surface-variant font-medium">
                    18%
                  </span>
                </li>
              </ul>
              <div className="relative flex items-center justify-center">
                {/* Circular Progress Visualization */}
                <div className="w-40 h-40 rounded-full border-[16px] border-primary-container relative flex items-center justify-center">
                  <div className="absolute inset-0 w-full h-full rounded-full border-[16px] border-secondary border-l-transparent border-b-transparent -rotate-45" />
                  <div className="text-center">
                    <p className="text-xl font-headline font-bold text-primary">
                      $18k
                    </p>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full py-12 px-8 mt-20 border-t-0 bg-stone-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <span className="font-serif text-lg text-green-900">
            The Sacred Sanctuary
          </span>
          <p className="font-sans text-sm text-stone-600 mt-2">
            © 2024 The Sacred Sanctuary. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="text-stone-500 hover:text-green-800 text-sm font-sans"
            href="#"
          >
            Contact Info
          </a>
          <a
            className="text-stone-500 hover:text-green-800 text-sm font-sans"
            href="#"
          >
            Map
          </a>
          <a
            className="text-stone-500 hover:text-green-800 text-sm font-sans"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-stone-500 hover:text-green-800 text-sm font-sans"
            href="#"
          >
            Terms of Service
          </a>
        </div>
      </footer>
    </main>
  );
}

export default FinancialPage;
