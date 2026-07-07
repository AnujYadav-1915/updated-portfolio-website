import React from 'react';
import { sectionItems, mobileSectionItems } from '../data/constants';

const NavigationRail = ({ activeSection, setActiveSection }) => {
  return (
    <>
      {/* Side rail navigation */}
      <nav className="sectionRail" aria-label="Section navigation">
        {sectionItems.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeSection === section.id ? 'active' : ''}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="railIcon">{section.icon}</span>
            <span>{section.label}</span>
          </a>
        ))}
      </nav>

      {/* Mobile dock */}
      <nav className="mobileDock" aria-label="Mobile navigation">
        {mobileSectionItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default NavigationRail;
