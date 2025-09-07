import { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-4 shadow sm:px-8">
      <div className="flex items-center justify-between text-center">
        <a href="">
          <img src={logo} alt="logo" className="h-auto w-[194px]" />
        </a>

        <nav className="font-regular hidden items-center justify-center gap-5 text-base lg:flex">
          <a href="" className="hover:text-secondary transition">
            WELCOME
          </a>
          <a href="" className="hover:text-secondary transition">
            MENU
          </a>
          <a href="" className="hover:text-secondary transition">
            FEESTMENU
          </a>
          <a href="" className="hover:text-secondary transition">
            RESERVATIONS
          </a>
          <a href="" className="hover:text-secondary transition">
            CONTACT
          </a>
        </nav>

        <a
          href=""
          className="bg-secondary font-georgia hover:bg-primary hidden w-[194px] rounded-full px-4 py-3 text-center text-white transition duration-300 lg:inline-block"
        >
          TAFEL RESERVEREN
        </a>
        {/* Hamburger menu button visible on small screens */}

        <button
          className="block cursor-pointer lg:hidden"
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Sidebar overlay and drawer */}
      {isOpen && (
        <aside className="bg-primary fixed top-0 right-0 z-50 flex h-full w-48 flex-col gap-6 p-8 text-white shadow-lg transition-transform duration-300 lg:hidden">
          <button
            className="hover:text-secondary mb-8 flex cursor-pointer items-center justify-center self-end text-2xl transition"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <nav className="font-georgia flex flex-col gap-6 text-right text-lg text-white">
            <a
              href=""
              className="hover:text-secondary transition hover:underline"
              onClick={() => setIsOpen(false)}
            >
              WELCOME
            </a>
            <a
              href=""
              className="hover:text-secondary transition hover:underline"
              onClick={() => setIsOpen(false)}
            >
              MENU
            </a>
            <a
              href=""
              className="hover:text-secondary transition hover:underline"
              onClick={() => setIsOpen(false)}
            >
              FEESTMENU
            </a>
            <a
              href=""
              className="hover:text-secondary transition hover:underline"
              onClick={() => setIsOpen(false)}
            >
              RESERVATIONS
            </a>
            <a
              href=""
              className="hover:text-secondary transition hover:underline"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </a>
          </nav>
        </aside>
      )}
    </header>
  );
}

export default Header;
