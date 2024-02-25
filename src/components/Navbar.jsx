import React from 'react'
import './styles/Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <img src="/Logo1.png" alt="Logo" className="navbar-logo" />
      <nav>
        <ul>
        <li>
            <img src="/react.png" alt="React Logo" className="logo" />
            <a href="https://create-react-app.dev/docs/getting-started">React.js</a>
          </li>
          <li>
            <img src="/vite.png" alt="Vite Logo" className="logo" />
            <a href="https://vitejs.dev/guide/">Vite.js</a>
          </li>
          <li>
            <img src="/next.png" alt="Next.js Logo" className="logo" />
            <a href="https://nextjs.org/docs">Next.js</a>
          </li>
          <li>
            <img src="/tailwind.png" alt="Tailwind CSS Logo" className="logo" />
            <a href="https://tailwindcss.com/docs/installation">Tailwind.css</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}