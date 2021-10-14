import React from 'react';
import './style.css';
import icons from './config/icons';
import IconConverter from './icon-converter';
import DisplayMapping from './display-mapping';
import iconsMapping from './config/icons-mapping';

export default function App() {
  const iconsMappingAsList = icons.map((icon) => ({
    icon,
    emoji: iconsMapping[icon],
  }));

  const iconsDom = iconsMappingAsList
    .filter((icon) => !iconsMapping[icon.icon])
    .map((iconMapping) => {
      return <IconConverter icon={iconMapping} />;
    });
  return (
    <div>
      {iconsDom}
      <DisplayMapping iconsMapping={iconsMappingAsList} />
    </div>
  );
}
