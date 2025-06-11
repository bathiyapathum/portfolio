"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { TypewriterEffectSmoothDemo } from "./typewriter";
import { CoverDemo } from "./CoverDemo";

export function HeroSection() {
  return (
    <section
      id="Home"
      className="h-[42rem] md:h-[50rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden relative"
    >
      <h1 className="font-bold text-center relative z-10">
        <TypewriterEffectSmoothDemo />
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* HeroHighlightDemo positioned in the bottom-left */}
      <div className="absolute bottom-4 ">
        <CoverDemo />
      </div>
    </section>
  );
}
