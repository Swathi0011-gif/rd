import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ArrowRight, ShieldCheck, Zap, Lock } from "lucide-react";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white font-sans selection:bg-indigo-500/30">
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 transition-all duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]"></div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium animate-fade-in">
            <ShieldCheck className="w-4 h-4" />
            <span>Secure Enterprise Architecture</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1]">
            The next generation of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-[length:200%_auto] animate-gradient">
              data management.
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            A premium dashboard experience powered by Neon DB, Drizzle ORM, and NextAuth. Built for speed, security, and visual excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/signup"
              className="group relative flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-all active:scale-95"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 px-8 py-4 bg-slate-900 border border-slate-800 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all active:scale-95"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features Row */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-6xl w-full">
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl">
            <Zap className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Neon Speed</h3>
            <p className="text-slate-400">Serverless PostgreSQL with instant branching and bottomless storage.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl">
            <Lock className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Role Based</h3>
            <p className="text-slate-400">Granular access control with admin approval required for every new user.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl">
            <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure Auth</h3>
            <p className="text-slate-400">NextAuth.js v5 integration with credentials provider and JWT sessions.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 text-center text-slate-500 text-sm border-t border-slate-900">
        &copy; 2026 PremiumDash Ecosystem. All rights reserved.
      </footer>
    </div>
  );
}
