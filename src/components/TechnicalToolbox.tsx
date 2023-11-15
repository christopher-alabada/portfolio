import { IIconLabel, IToolbox } from "@/data/types";
import Image from "next/image";

interface ITechnicalToolboxContent {
  technicalToolbox: IToolbox;
}

function getImageSrc(image: string): string {
  return `/images/${image}`;
}

export default function TechnicalToolbox({
  technicalToolbox,
}: ITechnicalToolboxContent) {
  const toolboxes: IIconLabel[][] = [];
  for (const toolboxType in technicalToolbox) {
    toolboxes.push(technicalToolbox[toolboxType as keyof IToolbox]);
  }

  return (
    <>
      <div className="w-full mb-1">
        <h2>Technical Toolbox</h2>
      </div>

      <div className="columns-2 sm:columns-3 md:columns-4">
        {toolboxes.map((toolboxSection, index) => (
          <div key={index} className="pl-1 w-full break-inside-avoid-column">
            {toolboxSection.map((skill, skillIndex) => (
              <div key={skillIndex} className="flex items-center mb-2">
                <div key={skill.name} className="pr-3">
                  <Image
                    src={getImageSrc(skill.image)}
                    alt={skill.name}
                    width={25}
                    height={25}
                    data-test={`toolbox-image-${skill.name}`}
                  />
                </div>
                <div
                  data-test={`toolbox-name-${skill.name}`}
                  className="text-xl"
                >
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
