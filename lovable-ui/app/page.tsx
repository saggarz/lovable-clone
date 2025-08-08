"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    // Navigate to generate page with prompt
    router.push(`/generate?prompt=${encodeURIComponent(prompt)}`);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Indian flag gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6 md:pb-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-black mb-2 sm:mb-3 md:mb-4 leading-tight tracking-tight px-2">
            Transform Ideas into
            <span className="block bg-gradient-to-r from-orange-600 via-red-500 to-green-600 bg-clip-text text-transparent animate-pulse">Reality with SOCH</span>
          </h1>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/90 font-display font-bold mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto tracking-widest px-2">
            <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
              AI-POWERED DEVELOPMENT PLATFORM
            </span>
          </h3>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto font-display font-medium leading-relaxed px-2 sm:px-4">
            From concept to code in seconds. Experience the future of intelligent
            development with AI that <em className="font-semibold text-black">understands your vision.</em>
          </p>

          {/* Input Section */}
          <div className="relative max-w-2xl mx-auto px-2 sm:px-4 w-full">
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-orange-200 shadow-2xl p-2 sm:p-2 w-full">
              {/* Textarea */}
              <textarea
                placeholder="Describe your dream project and watch it come alive..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleGenerate();
                  }
                }}
                className="flex-1 w-full px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-sm sm:text-base md:text-lg font-display resize-none min-h-[60px] sm:min-h-[80px] md:min-h-[100px] max-h-[120px] sm:max-h-[150px] md:max-h-[200px] leading-relaxed"
                rows={3}
              />

              {/* Send button */}
              <button
                onClick={handleGenerate}
                disabled={!prompt.trim()}
                className="flex-shrink-0 mt-2 sm:mt-0 sm:mr-2 md:mr-3 p-2.5 sm:p-3 w-full sm:w-auto min-w-[44px] sm:min-w-[48px] bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group shadow-xl hover:shadow-2xl hover:scale-105 font-display font-semibold flex items-center justify-center"
              >
                {false ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Example prompts */}
            <div className="mt-3 sm:mt-4 md:mt-6 flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 px-1 sm:px-2 max-w-full overflow-x-auto">
              <button
                onClick={() =>
                  setPrompt(
                    "Build a stunning blog platform with rich content features"
                  )
                }
                className="px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm font-display font-semibold text-gray-700 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 border border-orange-200 shadow-lg hover:shadow-xl touch-manipulation hover:border-orange-300 whitespace-nowrap flex-shrink-0"
              >
                Content Hub
              </button>
              <button
                onClick={() =>
                  setPrompt("Create a professional portfolio with interactive galleries")
                }
                className="px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm font-display font-semibold text-gray-700 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 border border-orange-200 shadow-lg hover:shadow-xl touch-manipulation hover:border-orange-300 whitespace-nowrap flex-shrink-0"
              >
                Creative Showcase
              </button>
              <button
                onClick={() =>
                  setPrompt(
                    "Design a complete online store with payment integration"
                  )
                }
                className="px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm font-display font-semibold text-gray-700 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 border border-orange-200 shadow-lg hover:shadow-xl touch-manipulation hover:border-orange-300 whitespace-nowrap flex-shrink-0"
              >
                Digital Store
              </button>
              <button
                onClick={() =>
                  setPrompt(
                    "Develop analytics dashboard with real-time insights"
                  )
                }
                className="px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm font-display font-semibold text-gray-700 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 border border-orange-200 shadow-lg hover:shadow-xl touch-manipulation hover:border-orange-300 whitespace-nowrap flex-shrink-0"
              >
                Analytics Hub
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}
