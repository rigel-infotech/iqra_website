"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import mosque1 from "../public/carousel-mosque-1.png";
import mosque2 from "../public/carousel-mosque-2.png";
import mosque3 from "../public/carousel-mosque-3.png";

const images = [mosque1, mosque2, mosque3];

interface MicroblogPost {
  id: number;
  content: string;
  timestamp: string;
  tags?: string[];
}

const VideoSection = () => {
  const [activeCategory, setActiveCategory] = useState("Know Your Enemy");

  const categories = [
    "Know Your Enemy",
    "My Understanding of Islam",
    "My Talks",
    "Converts Corner",
  ];

  const [microblogPosts, setMicroblogPosts] = useState([
    {
      id: 1,
      title: "Gratitude in Faith",
      author: "Dr. Ahmad Hassan",
      content: "Alhamdulillah for everything 🌙✨",
      tags: ["faith", "gratitude"],
      timestamp: "2h ago",
      likes: 3,
      liked: false,
      comments: [
        { user: "Aisha", text: "Beautiful reminder 💛" },
        { user: "Yusuf", text: "MashaAllah 🌸" },
      ],
      showComments: false,
    },
    {
      id: 2,
      title: "Friday Reflections",
      author: "Sheikh Umar Farooq",
      content: "Reminder: Friday is full of blessings 🤲",
      tags: ["jummah", "reminder"],
      timestamp: "5h ago",
      likes: 1,
      liked: false,
      comments: [],
      showComments: false,
    },
  ]);

  const handleLike = (postId: number) => {
    setMicroblogPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const toggleComments = (postId: number) => {
    setMicroblogPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, showComments: !post.showComments }
          : post
      )
    );
  };

  const handleComment = (postId: number, newComment: string) => {
    if (!newComment.trim()) return;
    setMicroblogPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { user: "You", text: newComment }],
            }
          : post
      )
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-6">
      {/* Video Player */}
      <Card className="shadow-elegant gradient-warm-1 border-border/50 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-muted/20 flex items-center justify-center border-2 border-dashed border-[#815331]/30 dark:border-[#f2c45a]/30 rounded-lg m-4 overflow-hidden">
            {/* Image */}
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Left Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 hover:bg-white hover:scale-105 transition-smooth rounded-full shadow-md cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6 text-accent" />
            </Button>

            {/* Right Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 hover:bg-white hover:scale-105 transition-smooth rounded-full shadow-md cursor-pointer"
            >
              <ChevronRight className="h-6 w-6 text-accent" />
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-accent border-accent scale-125 shadow-lg"
                      : "bg-white/70 border-gray-400 hover:bg-accent/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={`cursor-pointer transition-smooth px-3 py-1 ${
              activeCategory === category
                ? "gradient-gold text-foreground"
                : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Live Microblog */}
      <Card className="shadow-lg rounded-2xl border border-border/40 bg-gradient-to-br from-card/90 to-card p-3 sm:p-6 hover:shadow-xl transition-all duration-300">
        <CardContent className="p-0">
          <h3 className="text-lg sm:text-xl font-amiri font-bold text-accent mb-4 sm:mb-6 crescent-decoration">
            Live Microblog
          </h3>

          {/* Posts Feed - Mobile Responsive */}
          <div className="space-y-4 sm:space-y-8 max-h-[400px] sm:max-h-[600px] overflow-y-auto scrollbar-hide px-1 sm:px-2">
            {microblogPosts.map((post) => (
              <div
                key={post.id}
                className="group p-3 sm:p-6 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-sm 
                     rounded-xl sm:rounded-2xl border border-border/20 
                     hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 
                     transition-all duration-500 ease-out hover:-translate-y-1
                     relative overflow-hidden"
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content with relative positioning */}
                <div className="relative z-10">
                  {/* Header: Avatar + Author + Timestamp - Mobile Layout */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-4">
                      {/* Enhanced Avatar - Responsive Size */}
                      <div className="relative">
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-accent/30 via-accent/20 to-accent/10 
                                  flex items-center justify-center text-accent font-bold text-base sm:text-lg
                                  ring-2 ring-accent/20 hover:ring-accent/40 transition-all duration-300
                                  shadow-lg shadow-accent/20"
                        >
                          {post.author?.[0] || "U"}
                        </div>
                        {/* Online status indicator - Smaller on mobile */}
                        <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-card shadow-sm" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm sm:text-base font-bold text-foreground mb-0.5 sm:mb-1 truncate">
                          {post.author || "Anonymous"}
                        </h4>
                        <p className="text-xs text-muted-foreground/80 font-medium">
                          {post.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content - Mobile Friendly Layout */}
                  <div className="sm:ml-16 space-y-3 sm:space-y-4">
                    {/* Post Content - Responsive Font Size */}
                    <p className="text-sm sm:text-base leading-6 sm:leading-7 text-foreground/90 mb-3 sm:mb-4 font-normal">
                      {post.content.length > 150
                        ? post.content.substring(0, 150) + "..."
                        : post.content}
                    </p>

                    {/* Enhanced Tags - Mobile Responsive */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {post.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold
                               bg-gradient-to-r from-accent/20 to-accent/10 text-accent
                               hover:from-accent/30 hover:to-accent/20 hover:scale-105
                               transition-all duration-300 cursor-pointer
                               border border-accent/20 hover:border-accent/40"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced Actions Row - Mobile Touch Friendly */}
                    <div className="flex items-center gap-4 sm:gap-8 text-sm text-muted-foreground border-t border-border/20 pt-3 sm:pt-4 mt-3 sm:mt-4">
                      {/* Like button - Touch friendly */}
                      <button
                        onClick={() => handleLike(post.id)}
                        className="flex items-center gap-1.5 sm:gap-2 px-2 py-2 sm:px-3 sm:py-2 rounded-full hover:bg-accent/10 
                             hover:text-[#815331] transition-all duration-300 group min-h-[44px] sm:min-h-auto"
                      >
                        <Heart
                          className={`w-5 h-5 transition-all duration-300 ${
                            post.liked
                              ? "fill-[#815331] text-[#815331] scale-110"
                              : "text-muted-foreground group-hover:scale-110"
                          }`}
                        />
                        <span className="font-medium text-xs sm:text-sm">
                          {post.likes}
                        </span>
                      </button>

                      {/* Enhanced Comment button - Touch friendly */}
                      <button
                        onClick={() => toggleComments(post.id)}
                        className="flex items-center gap-1.5 sm:gap-2 px-2 py-2 sm:px-3 sm:py-2 rounded-full hover:bg-accent/10 
                             hover:text-[#815331] transition-all duration-300 group min-h-[44px] sm:min-h-auto"
                      >
                        <MessageCircle className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                        <span className="font-medium text-xs sm:text-sm">
                          {post.comments.length}
                        </span>
                      </button>

                      {/* Enhanced Share button - Touch friendly */}
                      <button
                        className="flex items-center gap-1.5 sm:gap-2 px-2 py-2 sm:px-3 sm:py-2 rounded-full hover:bg-accent/10 
                                   hover:text-[#815331] transition-all duration-300 group min-h-[44px] sm:min-h-auto"
                      >
                        <Share2 className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                        <span className="font-medium text-xs sm:text-sm">
                          Share
                        </span>
                      </button>
                    </div>

                    {/* Enhanced Comments Section - Mobile Responsive */}
                    {post.showComments && (
                      <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 border-l-2 border-accent/20 pl-3 sm:pl-4">
                        {post.comments.map((c, i) => (
                          <div
                            key={i}
                            className="p-2.5 sm:p-3 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg sm:rounded-xl 
                                 border border-border/20 text-xs sm:text-sm text-foreground
                                 hover:shadow-sm transition-all duration-300"
                          >
                            <span className="font-semibold text-accent">
                              {c.user}
                            </span>
                            <span className="text-muted-foreground mx-1 sm:mx-2">
                              ·
                            </span>
                            <span className="break-words">{c.text}</span>
                          </div>
                        ))}

                        {/* Enhanced Add Comment - Mobile Optimized */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mt-3 sm:mt-4 p-2.5 sm:p-3 bg-card/50 rounded-lg sm:rounded-xl border border-border/20">
                          <input
                            type="text"
                            placeholder="Write a thoughtful comment..."
                            className="flex-1 px-3 py-2.5 sm:px-0 sm:py-1 text-sm bg-transparent border border-border/20 sm:border-none rounded-lg sm:rounded-none focus:outline-none focus:ring-2 focus:ring-accent/30 sm:focus:ring-0
                                 placeholder:text-muted-foreground/60 min-h-[44px] sm:min-h-auto"
                            onKeyDown={(e) =>
                              e.key === "Enter" &&
                              handleComment(post.id, e.currentTarget.value)
                            }
                          />
                          <Button
                            size="sm"
                            className="gradient-gold text-foreground dark:text-black hover:scale-105 
                                 transition-transform duration-300 shadow-sm min-h-[44px] px-4 sm:px-3 
                                 text-sm font-semibold"
                            onClick={() =>
                              handleComment(post.id, "New comment")
                            }
                          >
                            Post
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoSection;
