import React from 'react';
import { themeOptions } from '../data/constants';

const ThemeSwitcher = ({ currentTheme, setTheme }) => {
  return (
    <div className="themeSwitcherWidget" aria-label="Theme switcher">
      <span className="themeWidgetLabel">Theme:</span>
      <div className="themeButtonsGroup">
        {themeOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`themeBtn ${currentTheme === opt.id ? 'active' : ''}`}
            onClick={() => setTheme(opt.id)}
            title={opt.tag}
          >
            <span className="themeDot" data-theme-id={opt.id} />
            <span className="themeName">{opt.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
