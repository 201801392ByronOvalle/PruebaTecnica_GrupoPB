import React from 'react'
import './styles/Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <img src="/Logo1.png" alt="Logo" className="navbar-logo" />
      <nav>
        <ul>
          <li><a href="https://create-react-app.dev/docs/getting-started">React.js</a></li>
          <li><a href="https://vitejs.dev/guide/">Vite.js</a></li>
          <li><a href="https://nextjs.org/docs">Next.js</a></li>
          <li><a href="https://tailwindcss.com/docs/installation">Tailwind.css</a></li>
        </ul>
      </nav>
    </div>
  );
}

