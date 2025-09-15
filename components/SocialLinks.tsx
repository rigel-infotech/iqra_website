"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MessageCircle, Share2 } from "lucide-react";

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialIcons = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter/X" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  return (
    <div className="fixed left-4 bottom-24 z-40 flex flex-col items-center space-y-3">
      {/* --- Desktop (xl and up): always visible list --- */}
      <div className="hidden xl:flex flex-col space-y-3">
        {socialIcons.map(({ icon: Icon, href, label }) => (
          <Button
            key={label}
            variant="ghost"
            size="sm"
            asChild
            className="w-10 h-10 p-0 bg-[#815331]/80 backdrop-blur-sm border border-border/50 text-white 
                       hover:text-[#815331] hover:bg-[#FFFFFF] 
                       dark:bg-[#f2c45a] dark:hover:bg-[#000] dark:hover:text-white 
                       transition-smooth hover-scale shadow-soft"
          >
            <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
              <Icon className="h-4 w-4" />
            </a>
          </Button>
        ))}
      </div>

      {/* --- Mobile/Tablet (below xl): collapsible --- */}
      <div className="flex flex-col items-center space-y-3 z-50 xl:hidden">
        {/* Collapsible Icons */}
        <AnimatePresence>
          {isOpen &&
            socialIcons.map(({ icon: Icon, href, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-10 h-10 p-0 bg-[#815331]/80 backdrop-blur-sm border border-border/50 text-white 
                             hover:text-[#815331] hover:bg-[#FFFFFF] 
                             dark:bg-[#f2c45a] dark:hover:bg-[#000] dark:hover:text-white 
                             transition-smooth hover-scale shadow-soft"
                >
                  <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Collapsible Button with Tooltip */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 rounded-full bg-[#815331] dark:bg-[#f2c45a] text-white dark:text-black 
                           shadow-elegant flex items-center justify-center hover-scale transition-smooth"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Share2 className="w-6 h-6" />
              </motion.button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-card text-foreground shadow-soft border border-border"
            >
              <p>Social Links</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default SocialLinks;
