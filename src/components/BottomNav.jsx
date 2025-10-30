import React from 'react';
import { Home, CreditCard, MessageCircle, FileText } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="sticky bottom-0 z-10 mt-1 rounded-b-[1.9rem] border-t border-white/10 bg-[#0B0E14]/80 px-6 py-3 backdrop-blur">
      <ul className="grid grid-cols-4 items-center text-[11px] text-zinc-400">
        <li className="flex flex-col items-center gap-1">
          <Home size={16} className="text-white" />
          <span className="text-white">Home</span>
        </li>
        <li className="flex flex-col items-center gap-1">
          <CreditCard size={16} />
          <span>Approvals</span>
        </li>
        <li className="flex flex-col items-center gap-1">
          <MessageCircle size={16} />
          <span>Chat</span>
        </li>
        <li className="flex flex-col items-center gap-1">
          <FileText size={16} />
          <span>Docs</span>
        </li>
      </ul>
    </nav>
  );
}
