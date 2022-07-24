import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import TodoComponent from './components/TodoComponent';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';

function App() {
  // 3: Get the selected theme, font list, etc.
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  // 5: Render if the theme is loaded.
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <TodoComponent setSelectedTheme={setSelectedTheme} />
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
