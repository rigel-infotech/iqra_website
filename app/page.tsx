import ContactMeBox from "@/components/ContactMeBox";
// import ImageCarousel from "@/components/ImageCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import SocialLinks from "@/components/SocialLinks";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div>
      {/* Social links only on desktop */}
        <SocialLinks />
      {/* <ImageCarousel /> */}

      {/* Main Hero Section */}
      <div className="relative">
        {/* Column Dividers (desktop only) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block xl:block">
          <div className="container mx-auto h-full flex">
            <div className="w-1/5 border-r border-border/20"></div>
            <div className="w-3/5 border-r border-border/20"></div>
            <div className="w-1/5"></div>
          </div>
        </div>

        {/* Responsive Container */}
        <div className="flex flex-col xl:flex-row w-full min-h-[95vh] gap-y-6 xl:gap-y-0">
          {/* Left Column / ContactMeBox */}
          <div className="w-full xl:w-1/5 xl:pl-20 xl:pr-4 px-4 py-8 animate-fade-in order-3 xl:order-1">
            <ContactMeBox />
          </div>

          {/* Center Column / VideoSection */}
          <div className="w-full xl:w-3/5 px-4 py-8 animate-fade-in animation-delay-200 order-1 xl:order-2">
            <VideoSection />
          </div>

          {/* Right Column / ProjectsSection */}
          <div className="w-full xl:w-1/5 xl:pl-4 xl:pr-8 px-4 py-8 animate-fade-in animation-delay-400 order-2 xl:order-3">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
