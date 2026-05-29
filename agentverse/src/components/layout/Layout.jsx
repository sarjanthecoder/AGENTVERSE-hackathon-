import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CursorGlow } from '../ui/CursorGlow';
import { ParticleBackground } from '../ui/ParticleBackground';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-clip">
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <main className="flex-grow pt-24 relative z-10 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};