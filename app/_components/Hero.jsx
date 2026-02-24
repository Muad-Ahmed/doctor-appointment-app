import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20">

      <div className="absolute top-0 right-0 -z-10 h-72 w-72 bg-purple-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="text-center md:text-left">
            <div className="max-w-2xl">

              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-600 uppercase bg-purple-100 rounded-full">
                Easy Booking System
              </span>
              
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Your Health, <br />
                <span className="text-purple-600">Just a Click Away</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Search, compare, and book appointments with top doctors anytime, 
                anywhere. Access quality healthcare from the comfort of your home 
                with our secure and fast platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl shadow-purple-200 transition-transform hover:scale-105 active:scale-95">
                  Explore Now
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-all">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">

            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              <img 
                src="/assets/imgs/hero.png" 
                className="w-full h-auto object-cover transform transition duration-500 hover:scale-105" 
                alt="Doctor Consultation" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
