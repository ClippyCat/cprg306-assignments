import Link from 'next/link';
import React from 'react';

const Links = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
