import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-lg">
      <div className="h-56 w-full">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h2 className="text-sm font-semibold tracking-tight">Your financial hub</h2>
        <p className="mt-1 text-[11px] text-zinc-400">Glass-morphic 3D card for a modern, secure experience.</p>
      </div>
    </section>
  );
}
