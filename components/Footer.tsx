import { MessageCircle } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vision', path: '/vision' },
    { name: 'News', path: '/news' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialIcons = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaXTwitter, href: '#', label: 'Twitter/X' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer className="w-full gradient-warm border-t border-border/50 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-amiri font-bold text-accent hover:text-primary transition-smooth">
              Muslim Man of God
            </Link>
          </div>

          {/* Center: Quick Links */}
          <div className="flex items-center space-x-1 text-sm">
            {quickLinks.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <Link
                  href={link.path}
                  className="text-foreground hover:text-[#815331] dark:hover:text-[#f2c45a] transition-smooth px-2 py-1"
                >
                  {link.name}
                </Link>
                {index < quickLinks.length - 1 && (
                  <span className="text-muted-foreground">|</span>
                )}
              </div>
            ))}
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-2">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="sm"
                asChild
                className="w-8 h-8 p-0 text-white bg-[#815331]/80 hover:text-[#815331] hover:bg-[#FFFFFF] dark:bg-[#f2c45a] dark:hover:bg-[#000] dark:hover:text-white transition-smooth"
              >
                <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;