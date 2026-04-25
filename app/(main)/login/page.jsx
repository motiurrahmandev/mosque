"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid credentials. Please try again.");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 flex items-center justify-center bg-background relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary-fixed-dim/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-surface/80 backdrop-blur-xl border border-outline-variant/30 shadow-2xl rounded-3xl p-8 relative overflow-hidden">
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="w-16 h-16 bg-gradient-to-br from-primary to-primary-container rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-primary/20 mb-6"
            >
              <span className="material-symbols-outlined text-on-primary text-[32px]">login</span>
            </motion.div>
            <h1 className="text-3xl font-serif font-bold text-primary mb-2">
              Welcome Back
            </h1>
            <p className="text-outline">
              Sign in to manage your account and connect with the community.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-error-container text-on-error-container p-3 rounded-xl text-sm text-center border border-error/20"
              >
                {error}
              </motion.div>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface-variant ml-1">
                  Email Address
                </label>
                <div className="relative group">

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-surface-bright border border-outline-variant text-on-surface rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-medium text-on-surface-variant">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative group">

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-surface-bright border border-outline-variant text-on-surface rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-2xl font-bold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-primary/20 disabled:opacity-70 mt-6"
            >
              {loading ? (
                <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-outline">
              Don&apos;t have an account yet?{" "}
              <Link
                href="/register"
                className="font-bold text-primary hover:underline transition-all"
              >
                Sign Up Now
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
