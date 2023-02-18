import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "./Highlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#5574a1", "#4c6991", "#425c80", "#384e6e", "#2c3e57"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-2/4 mx-auto text-center md:text-left lg:p-20">
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
              Techie
            </h1>
          </Highlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <img src={userData.avatarUrl} alt="avatar" className="shadow" />
        </div>
      </div>
    </div>
  );
}
