"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings, LogIn, UserPlus, Menu, X, Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import iqraLogo from "../public/iqra-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const isActive = (path: string) => pathName === path;

  return (
    <nav className="sticky top-0 z-50 w-full gradient-warm border-b border-border/50 backdrop-blur-md">
      <div className="max-w-full px-4 lg:ml-16 lg:mr-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image src={iqraLogo} height={40} width={40} alt="iqra-logo" />
            <div className="text-lg md:text-xl font-amiri font-bold text-accent group-hover-text-primary transition-smooth">
              Muslim Man of God
            </div>
          </Link>

          {/* Center Navigation - Desktop Only */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <div className="flex items-center space-x-4 lg:space-x-6 text-foreground font-medium text-sm lg:text-base">
              <span className="hover:text-[#815331] dark:hover:text-[#f2c45a] transition-smooth cursor-pointer">
                VISION
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="hover:text-[#815331] dark:hover:text-[#f2c45a] transition-smooth cursor-pointer">
                NEWS
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="hover:text-[#815331] dark:hover:text-[#f2c45a] transition-smooth cursor-pointer">
                RESOURCES
              </span>
            </div>
          </div>

          {/* Right Side - Login/Signup & Settings */}
          <div className="flex items-center space-x-3">
            {/* Desktop Login/Signup */}
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-[#815331] hover:!text-white dark:hover:bg-[#f2c45a] dark:hover:!text-black cursor-pointer"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button
                size="sm"
                className="gradient-gold text-foreground dark:text-black"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Signup
              </Button>
            </div>

            {/* Settings Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:text-accent hover:bg-[#815331] dark:hover:bg-[#f2c45a] cursor-pointer transition-smooth"
                >
                  <Settings className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-56 bg-card border-border shadow-elegant"
              >
                {/* Theme Settings row with toggle icon */}
                <DropdownMenuItem className="cursor-pointer flex items-center justify-between">
                  <span>Theme Settings</span>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                    className="text-foreground hover:text-white dark:hover:text-black hover:bg-[#815331] dark:hover:bg-[#f2c45a] cursor-pointer transition-smooth"
                  >
                    {theme === "light" ? (
                      <Moon className="h-5 w-5" />
                    ) : (
                      <Sun className="h-5 w-5" />
                    )}
                  </Button>
                </DropdownMenuItem>

                {/* Other items */}
                <DropdownMenuItem className="cursor-pointer">
                  <span>Language</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <span>Privacy</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300 rotate-0" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-[500px] opacity-100 py-4"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col space-y-3">
            {/* Quick Links */}
            <div className="py-2 px-3 text-center border-b border-border mb-3">
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-foreground">
                <span>VISION</span>
                <span className="text-muted-foreground">|</span>
                <span>NEWS</span>
                <span className="text-muted-foreground">|</span>
                <span>RESOURCES</span>
              </div>
            </div>

            {/* Full Menu Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium py-2 px-3 rounded-lg transition-smooth text-center ${
                  isActive(item.path)
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Login/Signup */}
            <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:flex-1 border-accent text-accent"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button
                size="sm"
                className="w-full sm:flex-1 gradient-gold text-foreground dark:text-black"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Signup
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
