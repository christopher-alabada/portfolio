"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  function NavLinkHome(): JSX.Element {
    return (
      <Link
        href="/"
        data-test="home-nav"
        onClick={handleClick}
        className="text-black hover:text-reddish hover:no-underline"
      >
        home
      </Link>
    );
  }

  function NavLinkProjects(): JSX.Element {
    return (
      <Link
        href="/projects"
        data-test="projects-nav"
        onClick={handleClick}
        className="text-black hover:text-reddish hover:no-underline"
      >
        projects
      </Link>
    );
  }

  function NavLinkResume(): JSX.Element {
    return (
      <Link
        href="/Christopher-Alabada_Software-Engineer.pdf"
        data-test="resume-nav"
        onClick={handleClick}
        className="text-black hover:text-reddish hover:no-underline"
      >
        résumé
      </Link>
    );
  }

  function HamburgerMenu(): JSX.Element {
    return (
      <div
        onClick={handleClick}
        className="space-y-2 relative z-0 lg:invisible"
      >
        <div
          className={`w-8 h-0.5 bg-gray-600 block rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-2.5" : "-translate-y-0.5"
          }`}
        ></div>
        <div
          className={`w-8 h-0.5 bg-gray-600 block rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-8 h-0.5 bg-gray-600 block rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-2.5" : "translate-y-0.5"
          }`}
        ></div>
      </div>
    );
  }

  return (
    <>
      <nav className="lg:flex lg:gap-x-11 lg:text-2xl hidden">
        <div>
          <NavLinkHome />
        </div>
        <div>
          <NavLinkProjects />
        </div>
        <div>
          <NavLinkResume />
        </div>
      </nav>

      <div className="flex justify-center items-center lg:hidden">
        <div>
          <HamburgerMenu />

          <nav
            className={`bg-headerBg border-b border-b-zinc-400 text-center absolute space-y-8 z-10 -ml-9 py-8 px-5 transition-[height] duration-1000 ease-in-out ${
              isOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <div>
              <NavLinkHome />
            </div>
            <div>
              <NavLinkProjects />
            </div>
            <div>
              <NavLinkResume />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
