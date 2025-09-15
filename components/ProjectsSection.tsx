"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Heart,
  Zap,
  ChevronLeft,
  ChevronRight,
  Save,
} from "lucide-react";

interface QuranVerse {
  id: number;
  arabic: string;
  translation: string;
  reference: string;
  explanation: string;
}

const ProjectsSection = () => {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  const bigProjects = [
    {
      icon: BookOpen,
      name: "Learning Islam",
      description: "Comprehensive Islamic education resources",
      color: "text-blue-600",
    },
    {
      icon: Users,
      name: "S&P Political Party",
      description: "Social and political engagement platform",
      color: "text-green-600",
    },
    {
      icon: Heart,
      name: "Interfaith",
      description: "Building bridges between communities",
      color: "text-red-600",
    },
    {
      icon: Zap,
      name: "Pressure Is On",
      description: "Addressing contemporary challenges",
      color: "text-yellow-600",
    },
  ];

  const quranVerses: QuranVerse[] = [
    {
      id: 1,
      arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
      translation: "And whoever fears Allah - He will make for him a way out.",
      reference: "Quran 65:2",
      explanation:
        "This verse emphasizes the importance of taqwa (God-consciousness) and how it leads to divine guidance and solutions to life's difficulties.",
    },
    {
      id: 2,
      arabic: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
      translation:
        "And I did not create the jinn and mankind except to worship Me.",
      reference: "Quran 51:56",
      explanation:
        "This fundamental verse establishes the primary purpose of human existence - to worship Allah and live according to His guidance.",
    },
    {
      id: 3,
      arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translation: "Indeed, with hardship comes ease.",
      reference: "Quran 94:6",
      explanation:
        "A powerful reminder that difficulties in life are temporary and that Allah provides relief and ease after every trial.",
    },
  ];

  const currentVerse = quranVerses[currentVerseIndex];

  const nextVerse = () => {
    setCurrentVerseIndex((prev) => (prev + 1) % quranVerses.length);
  };

  const prevVerse = () => {
    setCurrentVerseIndex(
      (prev) => (prev - 1 + quranVerses.length) % quranVerses.length
    );
  };

  const saveVerse = () => {
    console.log("Verse saved:", currentVerse);
    // Add to saved verses logic here
  };

  return (
    <div className="space-y-6">
      {/* Big Projects */}
      <Card className="shadow-soft gradient-warm-1 border-border/50">
        <CardHeader>
          <CardTitle className="text-xl font-amiri text-accent crescent-decoration projects">
            Big Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bigProjects.map((project) => (
              <div
                key={project.name}
                className="group p-4 bg-card/50 rounded-lg border border-border/30 hover-lift transition-smooth cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <project.icon
                    className={`h-6 w-6 mt-1 ${project.color} group-hover:scale-110 transition-smooth`}
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground group-hover:text-[#815331] dark:group-hover:text-[#f2c45a] transition-smooth">
                      {project.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quran Study Box */}
      <Card className="shadow-elegant border-border/50 overflow-hidden relative">
        {/* Islamic Pattern Overlay */}
        <div className="absolute inset-0 pattern-islamic opacity-5"></div>

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br bg-[#f2cc5a33]/20 bg-[#f2cc5a33]/10 bg-[#81533133]/20"></div>

        <div className="relative">
          <CardHeader>
            <CardTitle className="text-xl font-amiri text-accent text-center">
              ✦ Quran Study ✦
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Arabic Text */}
            <div className="text-center">
              <p className="text-2xl font-amiri text-primary leading-relaxed mb-4">
                {currentVerse.arabic}
              </p>
            </div>

            {/* Translation */}
            <div className="text-center">
              <p className="text-lg italic text-foreground leading-relaxed mb-2">
                &apos;{currentVerse.translation}&apos;
              </p>
              <p className="text-accent font-medium">
                {currentVerse.reference}
              </p>
            </div>

            {/* Explanation */}
            <div className="bg-muted/30 p-4 rounded-lg border border-border/30">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {currentVerse.explanation}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-4 border-t border-border/30">
              <Button
                variant="outline"
                size="sm"
                onClick={prevVerse}
                className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={saveVerse}
                className="text-accent hover:bg-accent/10 w-full sm:w-auto"
              >
                <Save className="h-4 w-4 mr-1" />
                Save
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={nextVerse}
                className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ProjectsSection;
