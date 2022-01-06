import React from 'react';

export default function HeroSection(props) {
  return (
    <div className={`mx-auto md:mb-32 lg:mb-32`}>{props.children}</div>
  );
}
