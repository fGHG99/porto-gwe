// @flow strict
"use client";

import { useState } from "react";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import DescriptionPopup from "../popup/DescriptionPopup"; // Ensure this path is correct

function Skills() {
  const [selectedDescription, setSelectedDescription] = useState(null); // State to control the description popup
  const [marqueePaused, setMarqueePaused] = useState(false); // State to control Marquee play/pause

  const handleClick = (description) => {
    // If the same skill is clicked again, close the popup
    if (selectedDescription === description) {
      setSelectedDescription(null);
      setMarqueePaused(false); // Resume marquee
    } else {
      setSelectedDescription(description); // Set description on click
      setMarqueePaused(true); // Pause marquee on click
    }
  };

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={false} // Disable Marquee's built-in pause on hover
          pauseOnClick={true}
          delay={0}
          play={!marqueePaused} // Control the marquee play state
          direction="right"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
              onClick={() => handleClick(skill.description)} // Set description on click
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500 relative">
                {/* Top gradient line */}
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                {/* Skill icon and name */}
                <div className="flex flex-col items-center justify-center gap-3 p-6 relative z-10 group-hover:blur-sm transition-all duration-300">
                  <div className="h-8 sm:h-10">
                    {/* Pass skill.name to skillsImage */}
                    <Image
                      src={skillsImage(skill.name)?.src}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Description Popup */}
      {selectedDescription && (
        <DescriptionPopup
          description={selectedDescription}
          onClose={() => {
            setSelectedDescription(null); // Close popup
            setMarqueePaused(false); // Resume marquee when closing popup
          }}
        />
      )}
    </div>
  );
}

export default Skills;
