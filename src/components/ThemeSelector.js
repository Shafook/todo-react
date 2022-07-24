import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useTheme } from '../theme/useTheme';
import { getFromLS } from '../utils/storage';
import { HiOutlineSun } from 'react-icons/hi';

const ThemeSelector = ({ setter, newTheme }) => {
  const themesFromStore = getFromLS('all-themes');
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (themes.length > 0) {
      if (darkTheme) {
        setMode(data[themes[1]]);
        setter(data[themes[1]]);
      } else {
        setMode(data[themes[0]]);
        setter(data[themes[0]]);
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    setThemes(_.keys(data));
  }, [data]);

  useEffect(() => {
    newTheme && updateThemeCard(newTheme);
  }, [newTheme]);

  const updateThemeCard = (theme) => {
    const key = _.keys(theme)[0];
    const updated = { ...data, [key]: theme[key] };
    setData(updated);
  };

  return (
    <div>
      <div>
        <HiOutlineSun size={30} onClick={() => setDarkTheme(!darkTheme)} />
      </div>
    </div>
  );
};

export default ThemeSelector;
