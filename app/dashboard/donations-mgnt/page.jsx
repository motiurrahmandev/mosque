import CampaignMgnt from "../compontnts/donations-mgnt/CampaignMgnt";
import DonationsList from "../compontnts/donations-mgnt/DonationsList";
import DonationsSummary from "../compontnts/donations-mgnt/DonationsSummary";

function DotationMgnt() {
  return (
    <>
      {/* SideNavBar Component */}
      {/* <aside className="fixed left-0 top-0 h-full flex flex-col z-40 bg-surface-container-lowest border-r border-outline-variant/20 w-64">
        <div className="p-6">
          <h1 className="text-lg font-black text-green-950 uppercase tracking-tight">
            Sanctuary Admin
          </h1>
          <p className="text-xs text-on-surface-variant/70 font-medium">
            Management Portal
          </p>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-xl"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="dashboard">
              dashboard
            </span>
            <span className="font-medium">Dashboard</span>
          </a>
          
          <a
            className="flex items-center gap-3 px-4 py-3 bg-primary-container/10 text-primary font-semibold rounded-xl transition-all"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="payments">
              payments
            </span>
            <span className="font-medium">Donations</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-xl"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="campaign">
              campaign
            </span>
            <span className="font-medium">Campaigns</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-xl"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="calculate">
              calculate
            </span>
            <span className="font-medium">Zakat Calculator</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-xl"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="group">
              group
            </span>
            <span className="font-medium">Donors</span>
          </a>
        </nav>
        <div className="p-4 border-t border-outline-variant/10 space-y-2">
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-xl"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="help">
              help
            </span>
            <span className="font-medium">Help Center</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-xl"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="logout">
              logout
            </span>
            <span className="font-medium">Logout</span>
          </a>
        </div>
      </aside> */}
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* TopNavBar Component */}
        <header className="flex justify-between items-center w-full px-8 py-4 bg-surface/80 backdrop-blur-md sticky top-0 z-30 border-b border-outline-variant/10">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-green-900 font-headline">
              The Sacred Sanctuary
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20 focus-within:border-secondary transition-colors">
              <span
                className="material-symbols-outlined text-on-surface-variant"
                data-icon="search"
              >
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-64 placeholder:text-on-surface-variant/50"
                placeholder="Search transactions..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="notifications"
                >
                  notifications
                </span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="settings"
                >
                  settings
                </span>
              </button>
              <div className="h-10 w-10 rounded-full bg-primary-container overflow-hidden border-2 border-white shadow-sm">
                <img
                  alt="Admin Profile Avatar"
                  className="h-full w-full object-cover"
                  data-alt="professional headshot of a mature man with a warm smile, wearing a traditional kufi cap and spectacles"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIljg8x6-QDw4OnMVirPiPDGL2dJTVaWWPsWKYnuQvrKfQQGgnIipJWJAwwiiJ1ir6pBq2_hqhxiQNC-3X90Qdw5IbyffjANcyduo1T2QbsB7iMTGVDviPOg979Ha8ZCUhng6EBmJ_656vMJTUe1oDOugl5-4LqUn5ybWhbWdATm4xh8vY1oE3sVnMTaQGqIqhthhwCZvXKgDiAxsKlsmm58YD75HSS6hBeHEqhGBYyuIDzSkqxusfVuYY84zzoN99EZVYc1qEwtw"
                />
              </div>
            </div>
          </div>
        </header>
        {/* Content Canvas */}
        <div className="px-8 py-8 max-w-7xl mx-auto w-full space-y-10">
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
        <span className="material-symbols-outlined" data-icon="add">
          add
        </span>
        <span className="font-bold tracking-tight">Add Manual Entry</span>
      </button>
    </>
  );
}

export default DotationMgnt;
