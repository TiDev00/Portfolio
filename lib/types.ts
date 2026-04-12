/** Shared TypeScript interfaces for portfolio data */

export interface SocialLink {
  name: string;
  link: string;
  iconClass: string;
  backgroundColor: string;
}

export interface SectionHeading {
  title: string;
  subtitle?: string;
}

export interface PageMetadata {
  title: string;
  description: string;
}

export interface SkillData {
  title: string;
  skills: string[];
  softwareSkills: string[];
}

export interface CompetitiveSite {
  siteName: string;
  color: string;
  profileLink: string;
}

export interface OpenSourceOverview {
  description: string;
  profiles: {
    github: string;
    codeSandbox: string;
    huggingFace: string;
    kaggle: string;
  };
}

export interface OpenSourceStats {
  publicRepos: number;
  followers: number;
  yearsActive: string;
}

export interface Degree {
  title: string;
  subtitle: string;
  logo_path: string;
  alt_name: string;
  duration: string;
  descriptions: string[];
  website_link: string;
}

export interface Certification {
  title: string;
  subtitle: string;
  logo_path: string;
  certificate_link: string;
  alt_name: string;
  color_code: string;
}

export type ThemeVariant<T> = {
  light: T;
  dark: T;
};

export type ThemeValue<T> = T | ThemeVariant<T>;

interface WorkExperienceBase {
  title: string;
  company: string;
  company_url: string;
  duration: string;
  location: string;
  description: string;
  logo_path: ThemeValue<string>;
  color: ThemeValue<string>;
}

export type WorkExperience = WorkExperienceBase;

export interface ExperienceSection {
  title: string;
  experiences: WorkExperience[];
}

export interface Project {
  name: string;
  createdAt: string;
  description: string;
  starCount: number;
  forkCount: number;
  url: string;
  languages: string[];
}

export interface ResearchPaper {
  title: string;
  authors?: string;
  venue?: string;
  year?: string;
  abstract?: string;
  paper_url?: string;
  github_url?: string;
  dataset_url?: string;
}

export interface AddressSection {
  title: string;
  subtitle: string;
  location_map_link: string;
}

export interface Seo {
  title: string;
  description: string;
  og: {
    title: string;
    type: string;
    url: string;
  };
}
