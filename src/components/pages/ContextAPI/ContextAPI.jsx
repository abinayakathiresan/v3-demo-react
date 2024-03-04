import React from 'react';
import './ContextAPI.css';
import { ThemeContext } from '../../../context/Context';
function ContextAPI() {
  const [themeType, setThemeType] = React.useState('windows');

  const [themeName, setThemeName] = React.useState('classic');
  return (
    <ThemeContext.Provider
      value={{ themeType, setThemeType, themeName, setThemeName }}
    >
      <div className="border-wrapper">
        Context api Provider Configuration
        <div>
          <ContextParent />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
export default ContextAPI;
function ContextParent() {
  console.log("ContextParent");
  return (
    <div className="border-wrapper">
      Context Parent
      <p>
        <ContextChild />
      </p>
    </div>
  );
}
function ContextChild() {
  console.log("ContextChild");
  return (
    <div className="border-wrapper">
      Context Child
      <p>
        <ContextChild2 />
      </p>
    </div>
  );
}

function ContextChild2() {
  console.log("ContextChild2");
  const themectxt = React.useContext(ThemeContext);
  return (
    <div className="border-wrapper">
      ContextChild 2<p>Theme Name: {themectxt.themeName}</p>
      <div className="context__cta">
        <button onClick={() => themectxt.setThemeName('classic')}>
          Enable Classic Theme
        </button>
        <button onClick={() => themectxt.setThemeName('dark')}>
          Enable Dark Theme
        </button>
      </div>
      <ContextChild3 />
    </div>
  );
}
function ContextChild3() {
  return (
    <div className="border-wrapper">
      Context ContextChild3
      <p>
        <ContextChild4 />
      </p>
    </div>
  );
}
function ContextChild4() {
  const themectxt = React.useContext(ThemeContext);
  return (
    <div className="border-wrapper">
      Context ContextChild4
      <br /> Theme name: {themectxt.themeName};
    </div>
  );
}
