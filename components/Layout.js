import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  PlusCircleIcon,
  ClipboardDocumentListIcon,
  Squares2X2Icon,
  UserPlusIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function Layout({ children }) {
  const router = useRouter();
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAuthenticated = true; // Placeholder for actual authentication check

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10 flex items-center">
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-center">
          <div className="w-1/5 flex items-center">
            <Link href="/" className="text-2xl font-bold">Airbnb Dashboard</Link>
          </div>
          <div className="w-3/5">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="w-1/5 flex items-center justify-end space-x-4">
            <button onClick={toggleTheme} className="bg-gray-700 p-2 rounded-md">
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
            <span>User Name</span> {/* Replace with actual login status */}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden w-full justify-between items-center">
          <button className="w-1/5" onClick={toggleSidebar}>
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
          <div className="w-3/5 text-center">
            <Link href="/" className="text-2xl font-bold">Airbnb Dashboard</Link>
          </div>
          <button onClick={toggleTheme} className="w-1/5 bg-gray-700 p-2 rounded-md text-center">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      {/* Search Bar on Mobile */}
      <div className="md:hidden p-4 bg-gray-800 fixed top-16 left-0 right-0 z-10">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 pt-24 md:pt-16">
        {/* Sidebar */}
        <div className={`fixed md:relative bg-gray-800 text-white h-full md:h-auto md:flex md:w-1/5 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <nav className="mt-8 w-full">
            <ul>
              <li className={router.pathname === '/dashboard' ? 'bg-gray-900' : ''}>
                <Link href="/dashboard" className="flex items-center space-x-2 py-2.5 px-4 hover:bg-gray-900">
                  <HomeIcon className="h-6 w-6" />
                  <span>Home</span>
                </Link>
              </li>
              <li className={router.pathname === '/booking' ? 'bg-gray-900' : ''}>
                <Link href="/booking" className="flex items-center space-x-2 py-2.5 px-4 hover:bg-gray-900">
                  <ClipboardDocumentListIcon className="h-6 w-6" />
                  <span>Bookings</span>
                </Link>
              </li>
              <li className={router.pathname === '/manage-bookings' ? 'bg-gray-900' : ''}>
                <Link href="/manage-bookings" className="flex items-center space-x-2 py-2.5 px-4 hover:bg-gray-900">
                  <ClipboardDocumentListIcon className="h-6 w-6" />
                  <span>Manage Bookings</span>
                </Link>
              </li>
              <li className={router.pathname === '/airbnb-entry' ? 'bg-gray-900' : ''}>
                <Link href="/airbnb-entry" className="flex items-center space-x-2 py-2.5 px-4 hover:bg-gray-900">
                  <PlusCircleIcon className="h-6 w-6" />
                  <span>Airbnb Entry Form</span>
                </Link>
              </li>
              <li className={router.pathname === '/airbnb-management' ? 'bg-gray-900' : ''}>
                <Link href="/airbnb-management" className="flex items-center space-x-2 py-2.5 px-4 hover:bg-gray-900">
                  <ClipboardDocumentListIcon className="h-6 w-6" />
                  <span>Airbnb Management</span>
                </Link>
              </li>
              <li className={router.pathname === '/airbnb-category-entry' ? 'bg-gray-900' : ''}>
                <Link href="/airbnb-category-entry" className="flex items-center space-x-2 py-2.5 px-4 hover:bg-gray-900">
                  <Squares2X2Icon className="h-6 w-6" />
                  <span>Airbnb Category Entry</span>
                </Link>
              </li>

              {/* Auth Submenu */}
              <li className="mt-6">
                <div className="flex items-center space-x-2 py-2.5 px-4 text-gray-400 cursor-pointer hover:text-white hover:bg-gray-900">
                  <UserPlusIcon className="h-6 w-6" />
                  <span>Auth</span>
                </div>
                <ul className="pl-8 mt-2">
                  <li>
                    <Link href="/add-user" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-900">
                      <UserPlusIcon className="h-6 w-6" />
                      <span>Add User</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={isAuthenticated ? "/logout" : "/login"} className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-900">
                      {isAuthenticated ? (
                        <>
                          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                          <span>Log Out</span>
                        </>
                      ) : (
                        <>
                          <ArrowRightOnRectangleIcon className="h-6 w-6" />
                          <span>Log In</span>
                        </>
                      )}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-0 md:ml-1/5 w-full p-4 md:p-8">
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
        © 2024 Airbnb Dashboard. All rights reserved.
      </footer>
    </div>
  );
}
