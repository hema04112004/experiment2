import React from 'react';
import './content.css'; // Import styles

const Content = ({ children }) => {
  return (
    <main className="content">
      {children}
    </main>
  );
}

export default Content;
