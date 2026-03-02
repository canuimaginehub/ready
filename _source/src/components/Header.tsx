import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "My Favorites", path: "/favorites" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <>
      {/* VIP Banner */}
      <div className="bg-primary py-2.5 px-4 text-center font-body">
        <p className="text-sm text-primary-foreground tracking-wide">
          ✨ Get my newsletter, tips, deals, and the Little Habits that Changed My Life.{" "}
          <Link to="/contact" className="underline font-bold hover:opacity-80 transition-opacity">
            CLICK HERE
          </Link>{" "}
          to become a VIP member!
        </p>
      </div>

      {/* Main Nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="font-display text-2xl font-bold text-foreground leading-tight">
              Solutions with Ang
            </span>
            <span className="text-xs text-muted-foreground font-body tracking-widest uppercase">
              Health · Wellness · Life
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <MobileMenu />
        </div>
      </header>
    </>
  );
};

const MobileMenu = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-foreground p-2"
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
          <nav className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`font-body text-sm tracking-wide uppercase py-2 transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

import React from "react";

export default Header;
