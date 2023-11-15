export interface IIconLabel {
  image: string;
  name: string;
}

export interface IIntro {
  title: string;
  body: string[];
}

export interface IToolbox {
  languages: IIconLabel[];
  frameworks: IIconLabel[];
  databases: IIconLabel[];
  miscellaneous: IIconLabel[];
}

export interface IExperience {
  position: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

export type Experience = IExperience[];

export interface IProject {
  name: string;
  description: string;
  repo?: string;
  skills: string[];
}

export type Project = IProject[];

export interface IContent {
  intro: IIntro;
  toolbox: IToolbox;
  experience: IExperience[];
  projects: IProject[];
}

export enum ContentSection {
  ALL = "all",
  INTRO = "intro",
  TOOLBOX = "toolbox",
  EXPERIENCES = "experiences",
  PROJECTS = "projects",
}

export type Content = IContent | IIntro | IToolbox | Experience | Project;
