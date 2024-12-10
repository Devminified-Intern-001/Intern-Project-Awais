"use client";

import Link from "next/link";
import * as LucideType from "lucide-react";
import { User, ShoppingCart, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface Icons {
  icon: LucideType.LucideIcon;
  href: string;
  badge: null | number;
}

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/home-Page" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contactus" },
  ];

  const icons: Icons[] = [
    {
      icon: User,
      href: "/profile",
      badge: null,
    },
    {
      icon: ShoppingCart,
      href: "/cart",
      badge: 3,
    },
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={`${
        pathname === href
          ? "text-primary font-semibold relative"
          : "text-headerLink hover:text-primary transition-colors"
      } font-basic-commercial flex items-center`}
    >
      {pathname === href && (
        <span className="md:hidden mr-2 text-black text-sm font-basic-commercial font-bold">
          •
        </span>
      )}
      {label}
      {pathname === href && (
        <span className="hidden md:block absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 text-black text-sm font-basic-commercial font-bold">
          •
        </span>
      )}
    </Link>
  );

  return (
    <header className="bg-background z-50 border-b">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="bg-secondary text-primary font-poppins font-medium text-xl px-4 py-2 rounded-md"
          >
            Logo
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex space-x-4 items-center">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center"
              >
                <Link href={icon.href} className="text-primary">
                  <icon.icon className="h-7 w-7" />
                </Link>
                {icon.badge && (
                  <span className="absolute -top-2 -right-2 bg-accent text-black text-xs font-medium px-1.5 py-0.5 rounded-full">
                    {icon.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="default"
                size="icon"
                className="md:hidden text-black"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-4">
                {navLinks.map((link, index) => (
                  <NavLink key={index} href={link.href} label={link.label} />
                ))}
              </nav>
              <div className="flex space-x-4 items-center mt-6">
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center"
                  >
                    <Link href={icon.href} className="text-black">
                      <icon.icon className="h-7 w-7" />
                    </Link>
                    {icon.badge && (
                      <span className="absolute -top-2 -right-2 bg-accent text-black text-xs font-medium px-1.5 py-0.5 rounded-full">
                        {icon.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
