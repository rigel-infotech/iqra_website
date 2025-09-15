"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Lock } from "lucide-react";

interface PublicQA {
  id: number;
  name: string;
  question: string;
}

const ContactMeBox = () => {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const publicQAs: PublicQA[] = [
    {
      id: 1,
      name: "Nathan",
      question: "I wanted to know what the Quran teaches about addiction.",
    },
    {
      id: 2,
      name: "Sarah",
      question:
        "How can I find peace during difficult times through Islamic practices?",
    },
    {
      id: 3,
      name: "Ahmed",
      question:
        "What is the best way to introduce Islam to my non-Muslim friends?",
    },
    {
      id: 4,
      name: "Maria",
      question: "Can you explain the importance of the five daily prayers?",
    },
  ];

  const handleSubmit = (isPrivate: boolean) => {
    console.log(`Submit ${isPrivate ? "Private" : "Public"}:`, {
      name,
      question,
    });
    // Reset form
    setName("");
    setQuestion("");
  };

  return (
    <div className="space-y-6">
   
      {/* Previous Public Q&As */}
      <Card className="shadow-soft gradient-warm-1 border-border/50">
        <CardHeader>
          <CardTitle className="text-lg font-amiri text-accent">
            Previous Public Q&As
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-hide">
            {publicQAs.map((qa) => (
              <div
                key={qa.id}
                className="p-3 bg-muted/30 rounded-lg border border-border/30 hover:bg-muted/50 transition-smooth"
              >
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-accent">
                    From {qa.name}:
                  </span>{" "}
                  {qa.question}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

         {/* Contact Me Form */}
      <Card className="shadow-soft gradient-warm-1 border-border/50">
        <CardHeader>
          <CardTitle className="text-xl font-amiri text-accent crescent-decoration contact tracking-tight">
            Contact Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-[#815331]/30 focus:border-[#f2c45a]! focus:ring-1 focus:ring-[#f2c45a]! outline-none transition-all duration-300 rounded-md px-3 py-2"
          />

          <Textarea
            placeholder="Your question or comment..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
            className="border-[#815331]/30 focus:border-[#f2c45a]! focus:ring-1 focus:ring-[#f2c45a]! resize-none"
          />
          <div className="flex flex-col space-y-2">
            <Button
              onClick={() => handleSubmit(true)}
              className="gradient-gold text-foreground transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              disabled={!question.trim()}
            >
              <Lock className="mr-2 h-4 w-4" />
              Submit Private
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSubmit(false)}
              className="border-accent text-accent hover:bg-[#815331]! hover:text-white! cursor-pointer"
              disabled={!question.trim()}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Submit Public
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactMeBox;
