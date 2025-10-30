import React from 'react';
import { CreditCard, MessageCircle, FileCheck } from 'lucide-react';

function Widget({ icon: Icon, title, description, actionLabel, onAction, accent = 'from-cyan-400 to-indigo-500' }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 shadow-md transition hover:bg-white/[0.05]">
      <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl`} aria-hidden />
      <div className="flex items-start gap-3">
        <div className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${accent} text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)]`}>
          <Icon size={18} />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold tracking-tight text-white">{title}</div>
          <div className="mt-1 text-[11px] leading-4 text-zinc-400">{description}</div>
          <button onClick={onAction} className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-200 transition hover:border-cyan-400/30 hover:bg-white/10">
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DashboardWidgets() {
  const handleApprovals = () => {
    alert('Viewing your loan approvals...');
  };
  const handleChat = () => {
    alert('Connecting you to a LoanHub agent...');
  };
  const handleDocuments = () => {
    alert('Open document uploader for closing package...');
  };

  return (
    <section className="mx-4 mt-4 grid grid-cols-1 gap-3 pb-4">
      <Widget
        icon={CreditCard}
        title="View Approvals"
        description="Track application status, limits, and terms in real time."
        actionLabel="Open approvals"
        onAction={handleApprovals}
        accent="from-emerald-400 to-cyan-400"
      />
      <Widget
        icon={MessageCircle}
        title="Chat with Agent"
        description="Get help from a specialist for questions or next steps."
        actionLabel="Start chat"
        onAction={handleChat}
        accent="from-indigo-400 to-fuchsia-500"
      />
      <Widget
        icon={FileCheck}
        title="Submit Closing Docs"
        description="Securely upload and e-sign your closing documents."
        actionLabel="Upload documents"
        onAction={handleDocuments}
        accent="from-cyan-400 to-blue-500"
      />
    </section>
  );
}
