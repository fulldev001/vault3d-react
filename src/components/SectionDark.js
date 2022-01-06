import React from 'react';

export default function SectionDark(props) {
  return (
    <div
      id={props.id}
      className={`max-w-screen-full mx-auto px-3 ${props.yBackground ? props.yBackground : 'bg-transparent'
        } ${props.yPadding ? props.yPadding : 'py-16'}`}
    >
      {(props.title || props.description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <h2 className="text-4xl text-transparent bg-clip-text inline-block bg-steel-button bg-cover bg-center">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-0 text-gray-400 text-xl md:px-20">
              {props.description}
            </div>
          )}
        </div>
      )}

      {props.children}
    </div>
  );
}