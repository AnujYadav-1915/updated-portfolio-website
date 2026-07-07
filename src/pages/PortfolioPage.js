import React, { useEffect, useState, useRef, useCallback } from 'react';
import './PortfolioPage.css';

import HeroSection from '../components/HeroSection';
import ImpactSection from '../components/ImpactSection';
import NowBuildingSection from '../components/NowBuildingSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ProofSection from '../components/ProofSection';
import EducationSection from '../components/EducationSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
import NavigationRail from '../components/NavigationRail';

const PortfolioPage = ({ theme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const mainRef = useRef(null);
  const cursorRef = useRef(null);

  /* Scroll-reveal observer — uses a lower threshold and no negative rootMargin
     so that tall sections (like projects) always trigger */
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section-id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            setActiveSection(entry.target.dataset.sectionId || 'home');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -10% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Staggered children reveal */
  useEffect(() => {
    const cards = document.querySelectorAll('.stagger-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stagger-visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  /* Custom glow cursor */
  const handleMouseMove = useCallback((e) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = e.clientX + 'px';
      cursorRef.current.style.top = e.clientY + 'px';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  /* 3D tilt effect handler */
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleTiltReset = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <main className={`portfolioPage ${theme}`} ref={mainRef}>
      {/* Glow cursor */}
      <div className="glowCursor" ref={cursorRef} aria-hidden="true" />

      {/* Ambient background */}
      <div className="ambientFx" aria-hidden="true" />

      <NavigationRail activeSection={activeSection} setActiveSection={setActiveSection} />

      <HeroSection
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleTilt={handleTilt}
        handleTiltReset={handleTiltReset}
      />
      <ImpactSection handleTilt={handleTilt} handleTiltReset={handleTiltReset} />
      <NowBuildingSection handleTilt={handleTilt} handleTiltReset={handleTiltReset} />
      <SkillsSection handleTilt={handleTilt} handleTiltReset={handleTiltReset} />
      <ProjectsSection />
      <ProofSection handleTilt={handleTilt} handleTiltReset={handleTiltReset} />
      <EducationSection handleTilt={handleTilt} handleTiltReset={handleTiltReset} />
      <AchievementsSection />
      <ContactSection handleTilt={handleTilt} handleTiltReset={handleTiltReset} />
    </main>
  );
};

export default PortfolioPage;
