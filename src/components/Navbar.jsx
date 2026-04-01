import React from 'react';

/**
 * The navigation bar lists the pages. Later I might connect
 * these to a router.
 */
export default function Navbar() {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'Posts', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav>
      <ul className="nav-container">
        {links.map(link => (
          <li key={link.name} className="nav-item">
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}