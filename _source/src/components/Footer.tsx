import { Link } from "react-router-dom";
import oliveBranch from "@/assets/olive-branch.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Solutions with Ang</h3>
            <p className="font-body text-sm opacity-80 leading-relaxed mb-4">
              Helping women and moms reach their best health so they can be most present in their lives and families.
            </p>
            <img src={oliveBranch} alt="Olive branch" className="w-16 opacity-60" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Explore</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Angela", path: "/about" },
                { label: "Work With Me", path: "/services" },
                { label: "Blog", path: "/blog" },
                { label: "My Favorites", path: "/favorites" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Connect</h4>
            <p className="font-body text-sm opacity-80 mb-4">
              Ready to start your wellness journey? Let's chat!
            </p>
            <Link
              to="/contact"
              className="inline-block font-body text-sm font-bold bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Book a Call
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="font-body text-xs opacity-60">
            © {new Date().getFullYear()} Solutions with Ang. All rights reserved. | Certified Diet Free Life Coach
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
