import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "./Highlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#5574a1", "#4c6991", "#425c80", "#384e6e", "#2c3e57"];
  return (
    <div className="flex-column justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="resize w-full md:w-2/4 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <Highlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-200 dark:text-gray-200 my-2">
              Developer
            </h1>
          </Highlight>
          <Highlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-200 dark:text-gray-200 my-2">
              Architect
            </h1>
          </Highlight>
          <Highlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-200 dark:text-gray-200 my-2">
              Engineer
            </h1>
          </Highlight>
          <Highlight color={colors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-200 dark:text-gray-200 my-2">
              Designer
            </h1>
          </Highlight>
          <Highlight color={colors[4]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-200 dark:text-gray-200 my-2">
              Creator
            </h1>
          </Highlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}

      <div class="mx-auto relative z-30 lg:block max-w-xl max-w-lg bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden my-4">
        
        <img class="w-full object-cover object-center" src={userData.avatarUrl} alt="avatar"/> 

        <div class="py-4 px-6">
            <h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">Mike Brandin</h1>
            <p class="py-2 text-lg text-gray-700 dark:text-gray-300">Software Developer</p>
            <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h1 class="px-2 text-sm">        
                Clemson University Honors College '22<br/>
                Bachelor of Science in Computer Science<br/>
                GPA: 3.97/4.0
              </h1>
            </div>
            <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
              </svg>
              <h1 class="px-2 text-sm">January 8th, 2001</h1>
            </div>
            <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h1 class="px-2 text-sm">Charlotte, NC</h1>
            </div>

        </div>
    </div>
      
    </div>

    
  );
}
