import { useMemo, useState } from 'react';
import PortfolioPage from './pages/PortfolioPage';
import { themeOptions } from './data/portfolioData';
import './pages/PortfolioPage.css';

function App() {
  const [activeTheme, setActiveTheme] = useState('cyber-motion');

  const activeThemeMeta = useMemo(
    () => themeOptions.find((theme) => theme.id === activeTheme) || themeOptions[0],
    [activeTheme],
  );

  return (
    <div className={`appShell ${activeTheme}`}>
      <header className="themeDock">
        <div className="themeDockHeader">
          <p>Live Theme Preview</p>
          <h2>{activeThemeMeta.label}</h2>
        </div>
        <div className="themeButtonRow">
          {themeOptions.map((theme) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => setActiveTheme(theme.id)}
              className={`themeBtn ${activeTheme === theme.id ? 'active' : ''}`}
            >
              <span>{theme.label}</span>
              <small>{theme.short}</small>
            </button>
          ))}
        </div>
      </header>
      <PortfolioPage theme={activeTheme} />
    </div>
  );
}

export default App;
