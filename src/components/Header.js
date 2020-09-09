import React from 'react';

import config from '../../config';
export default function Footer() {
  return (
    <header id="header">
      <h1>{config.name}</h1>
      <a href={config.url}>{config.url}</a>
    </header>
  );
}
