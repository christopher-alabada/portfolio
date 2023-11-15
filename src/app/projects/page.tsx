import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Image as ImageUtil } from "@/image";
import { ISkill } from "@/skill/types";
import { Data } from "@/data";
import { ContentSection, Project } from "@/data/types";

function GitHubLinkWrapper({
  children,
  condition,
}: {
  children: React.ReactNode;
  condition: boolean;
}) {
  return condition ? children : null;
}

export default async function Projects() {
  const projectsData = await Data.getContent<Project>(ContentSection.PROJECTS);

  return (
    <main className="container mx-auto w-4/5 xl:w-3/5 pt-36">
      <section className="grid grid-cols-5 gap-x-12">
        <div className="col-span-5 mb-1">
          <h2>Projects</h2>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-12 justify-between gap-y-3 md:gap-y-10 mb-12">
        {projectsData.map((project, projectIndex) => {
          return (
            <React.Fragment key={projectIndex}>
              <div className="md:col-span-3">
                <div className="font-bold font-title text-lg mb-1">
                  {project.name}
                </div>
                <div className="flex flex-wrap items-center mr-8">
                  {project.skills.map((skill, skillIndex) => (
                    <React.Fragment key={skillIndex}>
                      <div className="mr-1">
                        <Image
                          src={ImageUtil.getImageFromSkill(
                            skill as keyof ISkill
                          )}
                          alt={skill}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="justify-self-center mt-1">
                <GitHubLinkWrapper condition={project.repo !== null}>
                  <Link href={`https://github.com/${project.repo}`}>
                    <Image
                      src={ImageUtil.getImageSrc("github.png")}
                      alt="github"
                      width={20}
                      height={20}
                    />
                  </Link>
                </GitHubLinkWrapper>
              </div>
              <div className="col-span-8 mb-7 md:mb-0 last:mb-0">
                {project.description}
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </main>
  );
}
