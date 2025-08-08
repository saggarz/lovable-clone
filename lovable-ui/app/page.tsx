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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 drop-shadow-lg">
            Build something with Soch-clone
          </h1>
          <h3 className="text-xl sm:text-2xl text-black font-semibold mb-12 max-w-2xl mx-auto drop-shadow-md">
            BUILT WITH CLAUDE CODE
          </h3>

          <p className="text-lg sm:text-xl text-gray-800 mb-12 max-w-2xl mx-auto font-medium drop-shadow-sm">
            Turn your ideas into production-ready code in minutes. Powered by
            Claude's advanced AI capabilities.
          </p>

          {/* Input Section */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-orange-200 shadow-2xl px-2">
              {/* Textarea */}
              <textarea
                placeholder="Ask Soch to create a prototype..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleGenerate();
                  }
                }}
                className="flex-1 px-5 py-4 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-lg resize-none min-h-[120px] max-h-[300px]"
                rows={3}
              />

              {/* Send button */}
              <button
                onClick={handleGenerate}
                disabled={!prompt.trim()}
                className="flex-shrink-0 mr-3 p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 group shadow-lg"
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
                    className="h-5 w-5 group-hover:scale-110 transition-transform"
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
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() =>
                  setPrompt(
                    "Create a modern blog website with markdown support"
                  )
                }
                className="px-6 py-3 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-200 border border-orange-200 shadow-md hover:shadow-lg"
              >
                Blog website
              </button>
              <button
                onClick={() =>
                  setPrompt("Build a portfolio website with project showcase")
                }
                className="px-6 py-3 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-200 border border-orange-200 shadow-md hover:shadow-lg"
              >
                Portfolio site
              </button>
              <button
                onClick={() =>
                  setPrompt(
                    "Create an e-commerce product catalog with shopping cart"
                  )
                }
                className="px-6 py-3 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-200 border border-orange-200 shadow-md hover:shadow-lg"
              >
                E-commerce
              </button>
              <button
                onClick={() =>
                  setPrompt(
                    "Build a dashboard with charts and data visualization"
                  )
                }
                className="px-6 py-3 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-200 border border-orange-200 shadow-md hover:shadow-lg"
              >
                Dashboard
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
