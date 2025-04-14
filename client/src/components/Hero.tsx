import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-40 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Hi, I'm <span className="text-primary">Pavan HS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Software Developer & Web Enthusiast
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg" 
                className="gap-2 font-semibold"
              >
                <a href="#projects">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="font-semibold"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"></div>
              <div className="relative bg-white p-3 rounded-full">
                <div className="rounded-full w-64 h-64 md:w-80 md:h-80 bg-gray-200 overflow-hidden flex items-center justify-center">
                  <svg
                    className="h-32 w-32 text-gray-400"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                    <path d="M8 7h.01" />
                    <path d="M16 7h.01" />
                    <path d="M12 7h.01" />
                    <path d="M4 12h16" />
                    <path d="M4 16h16" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
