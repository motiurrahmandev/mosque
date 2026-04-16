function DonationsList() {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold font-headline text-primary">
          Donation Ledger
        </h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-surface-container-low">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="filter_list"
            >
              filter_list
            </span>{" "}
            Filter
          </button>
          <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-surface-container-low">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="download"
            >
              download
            </span>{" "}
            Export
          </button>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  Donor Name
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  Campaign
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  Date
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  Amount
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  Method
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">
                  Status
                </th>
                <th className="px-6 py-4 border-b border-outline-variant/10" />
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              <tr className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs">
                      MA
                    </div>
                    <span className="text-sm font-semibold">
                      Mohammed Al-Fayed
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  Masjid Expansion
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  Oct 24, 2023
                </td>
                <td className="px-6 py-4 text-sm font-bold text-primary">
                  $1,500.00
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="credit_card"
                    >
                      credit_card
                    </span>{" "}
                    Card
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:text-secondary transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="more_vert"
                    >
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant font-bold text-xs">
                      A
                    </div>
                    <span className="text-sm font-semibold italic">
                      Anonymous
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  Orphan Support
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  Oct 23, 2023
                </td>
                <td className="px-6 py-4 text-sm font-bold text-primary">
                  $250.00
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="account_balance"
                    >
                      account_balance
                    </span>{" "}
                    Bank
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-[10px] font-black uppercase">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:text-secondary transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="more_vert"
                    >
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs">
                      SK
                    </div>
                    <span className="text-sm font-semibold">Sarah Khan</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  Ramadan Relief
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  Oct 22, 2023
                </td>
                <td className="px-6 py-4 text-sm font-bold text-primary">
                  $50.00
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="smartphone"
                    >
                      smartphone
                    </span>{" "}
                    GPay
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:text-secondary transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="more_vert"
                    >
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs">
                      AB
                    </div>
                    <span className="text-sm font-semibold">
                      Ahmed Bin-Said
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  Masjid Expansion
                </td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  Oct 21, 2023
                </td>
                <td className="px-6 py-4 text-sm font-bold text-primary">
                  $5,000.00
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="credit_card"
                    >
                      credit_card
                    </span>{" "}
                    Card
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:text-secondary transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="more_vert"
                    >
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant/10 flex justify-between items-center text-xs text-on-surface-variant font-medium">
          <span>Showing 4 of 2,450 results</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-outline-variant/20 rounded hover:bg-surface-container-low transition-colors">
              Prev
            </button>
            <button className="px-3 py-1 border border-outline-variant/20 rounded hover:bg-surface-container-low transition-colors bg-surface-container-low">
              1
            </button>
            <button className="px-3 py-1 border border-outline-variant/20 rounded hover:bg-surface-container-low transition-colors">
              2
            </button>
            <button className="px-3 py-1 border border-outline-variant/20 rounded hover:bg-surface-container-low transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationsList;
