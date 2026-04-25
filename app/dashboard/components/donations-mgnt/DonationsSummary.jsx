function DonationsSummary() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Lifetime */}
      <div className="bg-primary-container text-on-primary p-6 rounded-2xl relative overflow-hidden group shadow-xl shadow-primary/5">
        <div className="relative z-10">
          <p className="text-on-primary-container/80 text-xs font-bold uppercase tracking-widest mb-1">
            মোট আজীবন ডোনেশন
          </p>
          <h3 className="text-4xl font-bold font-headline mb-4">$1.2M</h3>
          <div className="flex items-center gap-2 text-on-primary-container text-sm font-semibold">
            <span className="material-symbols-outlined text-[20px] text-green-400">trending_up</span>
            <span>গত বছর থেকে +১২.৫%</span>
          </div>
        </div>
        {/* Subtle Growth Chart Visual */}
        <div className="absolute bottom-0 right-0 left-0 h-16 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 20"
          >
            <path d="M0 20 Q 25 15, 50 10 T 100 0 V 20 H 0 Z" fill="white" />
          </svg>
        </div>
      </div>
      {/* Active Campaigns Summary */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <span className="material-symbols-outlined text-[48px] text-secondary opacity-30">mosque</span>
        </div>
        <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">
          সক্রিয় ক্যাম্পেইন
        </p>
        <h3 className="text-4xl font-bold font-headline mb-4">4</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-on-surface-variant">
            <span>সামগ্রিক অগ্রগতি</span>
            <span>78%</span>
          </div>
          <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary rounded-full"
              style={{ width: "78%" }}
            />
          </div>
        </div>
      </div>
      {/* Recent Contributions */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 shadow-sm">
        <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">
          সাপ্তাহিক অবদান
        </p>
        <h3 className="text-4xl font-bold font-headline mb-4">$12,450</h3>
        <div className="flex -space-x-3">
          <img
            className="h-10 w-10 rounded-full border-2 border-white"
            data-alt="portrait of a smiling donor headshot"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-SjXYbcWCZhj3xFplB_GU4lQPKZ9kR3BpHNw36WuDmjBaIxSexChnapthXxUX6g0ikXfQwuwdwY2duxLLKbVENAxsvnCVUC0duXYuVMeohgDwPZjOXDgIKMI7EgLV6HbZdKFB3EmLjrAQ6BasZ3nAzDwMlTNaEYzNxDnsM4qCr3xhE9_mUQQ-72rzMPSBcb049GI8YjDmCoYB8_Ei42TPVT0-Wg2SAg1kLB9HQD8K7yafVrzY5R7FB5vG5Go0SWO2SH5W-2qmMwk"
          />
          <img
            className="h-10 w-10 rounded-full border-2 border-white"
            data-alt="portrait of a smiling donor headshot"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNil99szigS6KJEPhREfjoHL7h-GmW6hzfPGu4tybvKRsbt1zf5NanxPSElMmlZvH6WcsUUKKc2OvE3ydnv1qO8I6Wdl5fw9p09Mbl2gP1SKzu6IkkTRl1Okqn49Mt04g90jV5pXuBbMpF5Te7nhdL2INp5W2BnvN8nofN5Zr4hnb6y5NqG3oeTt7Thoo_rFjbvq19Sjz6CMA7JXWYgHXRRg8-QjZm9qZLE43BWFXeDZ9khd-2VxPqacveMeUBmiaePF6dhbp4NFw"
          />
          <img
            className="h-10 w-10 rounded-full border-2 border-white"
            data-alt="portrait of a smiling donor headshot"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSOFhlbx5jrA7inlr2Z6nDJxfDEs6BCuj-9qp8UUevZp-NB_tWi2VKVF2Fv6d90CEfQOC8wowcrbv1fMS-YYEH7hZlgwwbpZFKb7Du1pJFqfaPVUWXOczJYTA9tj8G8ObOjVBOECC_vu6r1ynlnEY69yaz0AxZWUUTpKw54gC8aP8763esVLAUyXXWi5EyxKTu18R_zAR6UmjmXX4J9CP6oqziGF1uwMfjCtRtG0pMjwlU_ydJkQkNVwsIvnmaOclsdXIKeU--mQo"
          />
          <div className="h-10 w-10 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center text-xs font-bold text-on-surface-variant">
            +82
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationsSummary;
