import React from 'react';
import AppHeader from './components/AppHeader';
import HeroSection from './components/HeroSection';
import DashboardWidgets from './components/DashboardWidgets';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0B0F] text-white">
      <div className="fixed inset-0 pointer-events-none opacity-60" aria-hidden>
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,174,255,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-10">
        <h1 className="sr-only">LoanHub</h1>
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-[0_0_30px_rgba(56,189,248,0.35)]">
              <span className="font-black text-white">LH</span>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">LoanHub</div>
              <div className="text-xs text-zinc-400">Dark fintech dashboard</div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-sm">
          <div className="relative rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-2 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.9rem] border border-white/10 bg-[#0B0E14]/90">
              <AppHeader />
              <HeroSection />
              <DashboardWidgets />
              <BottomNav />
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-400">
          Demo dashboard app preview on a phone frame. Interact with the 3D card in the hero.
        </p>
      </div>
    </div>
  );
}
