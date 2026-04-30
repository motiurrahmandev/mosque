function Footer() {
  return (
    <footer className="w-full py-12 px-8 mt-auto bg-stone-100 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="font-serif text-lg text-green-900 dark:text-green-500 mb-6">
              পবিত্র আশ্রয়স্থল
            </div>
            <p className="text-stone-600 dark:text-stone-400 max-w-sm font-sans text-sm leading-relaxed">
              একটি নিবেদিত আধ্যাত্মিক কেন্দ্র যা ইসলামী শিক্ষা, সমাজ কল্যাণ এবং আধ্যাত্মিক উন্নতির প্রসারে প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>
          <div>
            <h6 className="font-bold text-primary mb-6">গুরুত্বপূর্ণ লিংক সমূহ</h6>
            <ul className="space-y-4 font-sans text-sm">
              <li>
                <a
                  className="text-stone-500 hover:text-green-800 transition-all duration-300"
                  href="#"
                >
                  যোগাযোগের তথ্য
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 hover:text-green-800 transition-all duration-300"
                  href="#"
                >
                  ম্যাপ
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 hover:text-green-800 transition-all duration-300"
                  href="#"
                >
                  গোপনীয়তা নীতি
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 hover:text-green-800 transition-all duration-300"
                  href="#"
                >
                  সেবার শর্তাবলী
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-primary mb-6">সামাজিক মাধ্যম</h6>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">language</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-stone-600 dark:text-stone-400">
            © ২০২৪ পবিত্র আশ্রয়স্থল। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex gap-8 text-xs font-bold text-stone-400 uppercase tracking-widest">
            <span>বিশুদ্ধতা</span>
            <span>সেবা</span>
            <span>আশ্রয়স্থল</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
