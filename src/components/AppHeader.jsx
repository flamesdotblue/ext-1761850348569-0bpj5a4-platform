import React from 'react';
import { Shield } from 'lucide-react';

export default function AppHeader() {
  return (
    <header className="px-5 pt-5">
      <div className="flex items-center justify-between text-[10px] text-zinc-400">
        <span>9:41</span>
        <div className="flex items-center gap-1 opacity-80">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.55)]">
            <span className="text-sm font-extrabold text-white">LH</span>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight">LoanHub</div>
            <div className="text-[11px] text-zinc-400">Manage loans securely</div>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-300 shadow-inner">
          <Shield size={12} className="text-cyan-300" />
          <span>Encrypted</span>
        </div>
      </div>
    </header>
  );
}
