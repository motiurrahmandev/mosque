// import React from 'react'

// function Navbar() {
//     return (
//         <header class="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
//             <nav class="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
//                 <div class="text-2xl font-serif italic text-green-900 dark:text-green-500">The Sacred Sanctuary</div>

//                 <div class="hidden md:flex items-center space-gap-8 gap-x-8">
//                     <a class="text-green-800 dark:text-green-400 border-b-2 border-amber-600 pb-1 font-serif" href="#">Home</a>
//                     <a class="text-stone-600 dark:text-stone-400 hover:text-green-900 dark:hover:text-green-300 transition-all duration-300 font-serif" href="#prayer-times">Prayer Times</a>
//                     <a class="text-stone-600 dark:text-stone-400 hover:text-green-900 dark:hover:text-green-300 transition-all duration-300 font-serif" href="#services">Services</a>
//                     <a class="text-stone-600 dark:text-stone-400 hover:text-green-900 dark:hover:text-green-300 transition-all duration-300 font-serif" href="#events">Events</a>
//                     <a class="bg-primary bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2 rounded-xl font-bold hover:opacity-80 transition-all duration-300" href="#donate">Donate</a>
//                 </div>

//                 <button class="md:hidden text-primary">
//                     <span class="material-symbols-outlined">menu</span>
//                 </button>
//             </nav>
//         </header>
//     )
// }

// export default Navbar

"use client";

import {
  CalendarDays,
  ChevronRight,
  Clock,
  Heart,
  LayoutGrid,
  LogOut,
  Menu,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <div className="w-0" /> },
    { name: "About", href: "/about" },
    { name: "Prayer Times", href: "/prayer-times", icon: <Clock size={16} /> },
    { name: "Donations", href: "/donations", icon: <LayoutGrid size={16} /> },
    {
      name: "Programs & Events",
      href: "/programs-and-events",
      icon: <CalendarDays size={16} />,
    },
  ];

  return (
    <header className="fixed w-full top-5 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex justify-between items-center w-full max-w-7xl px-4 sm:px-8 py-3 rounded-2xl transition-all duration-500 border ${
          isScrolled
            ? "bg-[#f9faf6]/90 backdrop-blur-xl shadow-lg border-[#c2c9bb]/50"
            : "bg-[#f3f4f0]/70 backdrop-blur-md shadow-sm border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-[#154212] flex items-center justify-center text-white shadow-md shadow-[#154212]/20 group-hover:scale-105 transition-transform duration-300">
            <span className="material-symbols-outlined text-xl">mosque</span>
          </div>

          <span className="text-xl font-serif text-[#154212] hidden sm:block">
            The Sacred Sanctuary
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex items-center gap-2 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-full flex items-center gap-2 transition-colors duration-300 ${
                  isActive || isHovered ? "text-[#154212]" : "text-[#42493e]"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.icon}
                  <span className="font-serif">{link.name}</span>
                </span>

                {(isHovered || isActive) && (
                  <motion.div
                    layoutId="navbar-link-bg"
                    className="absolute inset-0 bg-[#a1d494]/20 rounded-full border border-[#a1d494]/30"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}

          {/* Auth Buttons */}
          <div className="ml-4 flex items-center gap-2">
            {session ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/dashboard"
                  className="bg-gradient-to-br from-[#154212] to-[#2d5a27] text-white px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#154212]/30"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-[#e2e3df]/70 hover:bg-[#d9dad7] text-[#154212] p-2.5 rounded-full font-semibold transition-all duration-300 flex items-center shadow-sm"
                  title="Sign Out"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-[#154212] font-semibold hover:bg-[#e2e3df]/50 px-5 py-2.5 rounded-full transition-all duration-300"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="bg-gradient-to-br from-[#154212] to-[#2d5a27] text-white px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#154212]/30"
                >
                  <span>Sign Up</span>
                  <User size={16} />
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center p-2 rounded-full bg-[#e2e3df]/70 hover:bg-[#d9dad7] transition-colors text-[#154212]"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[85px] left-4 right-4 z-40 lg:hidden"
          >
            <div className="bg-[#f9faf6]/95 rounded-3xl backdrop-blur-2xl shadow-2xl overflow-hidden border border-[#c2c9bb]/40">
              <div className="flex flex-col p-4 gap-1">
                <div className="px-4 pt-2 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#72796e]">
                    Navigation
                  </span>
                </div>

                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between font-serif text-lg text-[#42493e] hover:text-[#154212] px-4 py-3 rounded-2xl hover:bg-[#e2e3df]/50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-[#154212]/80">{link.icon}</div>
                        {link.name}
                      </div>

                      <ChevronRight
                        size={18}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-[#154212]"
                      />
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Auth */}
                <div className="mt-4 p-2 flex flex-col gap-2">
                  {session ? (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-gradient-to-br from-[#154212] to-[#2d5a27] text-white text-lg font-bold px-4 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-[#154212]/20 mb-2"
                      >
                        Dashboard
                      </Link>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          signOut();
                        }}
                        className="bg-[#e2e3df]/70 text-[#154212] text-lg font-bold px-4 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-md w-full"
                      >
                        <LogOut size={20} />
                        Sign Out
                      </motion.button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-[#e2e3df]/70 text-[#154212] text-lg font-bold px-4 py-3 rounded-2xl flex items-center justify-center gap-2 shadow-md mb-2"
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/register"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-gradient-to-br from-[#154212] to-[#2d5a27] text-white text-lg font-bold px-4 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-[#154212]/20"
                      >
                        Sign Up
                        <User size={20} />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
