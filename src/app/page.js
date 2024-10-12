'use client';
import GridBackground from '@/components/GridBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import "./globals.css";
import Provider from '@/components/Provider';
import Services from '@/components/services/Services';

export default function Home() {
  return (
    <main>
      <Navbar />
      <GridBackground />
      <HeroSection />
      <Provider />
      <Services />
    </main>
  );
}