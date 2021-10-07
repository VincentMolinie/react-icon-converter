import React from 'react';
import './style.css';
import icons from './icons';
import IconConverter from './icon-converter';

export default function App() {
  const iconsMapping = icons.map((icon) => ({ icon }));
  console.log(iconsMapping);
  const containerSttyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  };
  const itemSttyle = { color: 'black', height: '40px', width: '40px' };

  const iconsDom = iconsMapping.map((iconMapping) => {
    const className = `fa fa-2x fa-${iconMapping.icon}`;
    return <IconConverter icon={iconMapping} />;
  });
  return <div>{iconsDom}</div>;
}
