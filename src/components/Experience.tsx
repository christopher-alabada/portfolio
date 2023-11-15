import { IExperience } from "@/data/types";
import React from "react";

interface IExperienceContent {
  experience: IExperience[];
}

export default function Experience({ experience }: IExperienceContent) {
  return (
    <>
      <div className="col-span-4">
        <h2>Experience</h2>
      </div>

      {experience.map((eachExperience, eachIndex) => (
        <React.Fragment key={eachIndex}>
          <div
            key={eachIndex}
            data-test={`experience-position-${eachExperience.position}`}
            className="col-span-4 md:col-span-1 pl-1 pb-4"
          >
            <div className="font-bold font-title text-lg">
              {eachExperience.position}
            </div>
            <div className="font-title text-sm font-bold text-gray-500">
              {eachExperience.company}
            </div>
            <div className="font-title text-sm font-bold text-gray-500">
              {eachExperience.location}
            </div>
            <div className="font-title text-xs text-reddish">
              {eachExperience.date}
            </div>
          </div>

          <div
            data-test={`experience-description-${eachExperience.position}`}
            className="col-span-4 md:col-span-3 mb-10 md:mb-16 last:mb-2 ml-6 md:ml-2"
          >
            <ul className="list-disc marker:text-reddish space-y-1">
              {eachExperience.description.map(
                (eachDescription, descriptionIndex) => (
                  <li key={descriptionIndex}>{eachDescription}</li>
                )
              )}
            </ul>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
