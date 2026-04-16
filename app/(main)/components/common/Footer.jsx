function Footer() {
  return (
    <footer className="w-full py-12 px-8 mt-auto bg-stone-100 dark:bg-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="font-serif text-lg text-green-900 dark:text-green-500 mb-6">
              The Sacred Sanctuary
            </div>
            <p className="text-stone-600 dark:text-stone-400 max-w-sm font-sans text-sm leading-relaxed">
              A dedicated spiritual center committed to Islamic education,
              community welfare, and the promotion of spiritual excellence.
            </p>
          </div>
          <div>
            <h6 className="font-bold text-primary mb-6">Quick Links</h6>
            <ul className="space-y-4 font-sans text-sm">
              <li>
                <a
                  className="text-stone-500 hover:text-green-800 transition-all duration-300"
                  href="#"
                >
                  Contact Info
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 hover:text-green-800 transition-all duration-300"
                  href="#"
                >
                  Map
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 hover:text-green-800 transition-all duration-300"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 hover:text-green-800 transition-all duration-300"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-primary mb-6">Social</h6>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  social_leaderboard
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  public
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  video_library
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-stone-600 dark:text-stone-400">
            © 2024 The Sacred Sanctuary. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold text-stone-400 uppercase tracking-widest">
            <span>Authenticity</span>
            <span>Service</span>
            <span>Sanctuary</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
