import React from 'react';
import { Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Activity className="h-6 w-6 text-indigo-600" />
          <h1 className="text-xl font-semibold text-gray-900">Body-shape controls</h1>
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/about'
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="https://youtu.be/glg9TmHJikg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Video
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;