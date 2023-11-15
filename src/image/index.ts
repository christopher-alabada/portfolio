import { Skill } from "@/skill";
import { ISkill } from "@/skill/types";

function getImageSrc(image: string): string {
  return `/images/${image}`;
}

function getImageFromSkill(skill: keyof ISkill): string {
  const imageFileName = Skill.skillToImage[skill];
  return getImageSrc(imageFileName);
}

export const Image = {
  getImageSrc,
  getImageFromSkill,
};
