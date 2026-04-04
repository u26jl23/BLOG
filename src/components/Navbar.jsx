import { Link } from "react-router-dom";

/**
 * The navigation bar lists the pages. Later I might connect
 * these to a router.
 */
export default function Navbar() {
  const links = [
    { name: 'Home', to: '/' },
    { name: 'Posts', to: '/posts' },
    { name: 'Categories', to: '/categories' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav>
      <ul className="nav-container">
        {links.map(link => (
          <li key={link.name} className="nav-item">
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}