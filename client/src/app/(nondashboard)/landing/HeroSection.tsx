"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="Homiio Rent Platform Hero Section"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute  transform   text-center w-full"
        >
          <div className="max-w-4xl mx-auto px-16 sm:px-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Find Your Perfect Rental Home
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl">
              Explore thousands of listings with advanced search tools to help
              you find the ideal apartment.
            </p>

            <div className="flex justify-center">
              <Input
                type="text"
                value="Search query"
                onChange={() => {}}
                placeholder="Search for apartments, locations..."
                className="w-full max-w-xl rounded-none rounded-l-xl border-none bg-white h-12 px-6 text-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
              <Button
                onClick={() => {}}
                className="bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-600 h-12"
              >
                Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
