/** Shared TypeScript interfaces for portfolio data */

export interface SocialLink {
  name: string;
  link: string;
  iconClass: string;
  backgroundColor: string;
}

export interface SkillData {
  title: string;
  skills: string[];
  softwareSkills: SoftwareSkill[];
}

export interface SoftwareSkill {
  skillName: string;
  iconifyTag: string;
}

export interface CompetitiveSite {
  siteName: string;
  iconifyTag: string;
  style: { color: string };
  profileLink: string;
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

interface WorkExperienceBase {
  title: string;
  company: string;
  company_url: string;
  duration: string;
  location: string;
  description: string;
  color: string;
}

type SingleLogoConfig = {
  logo_path: string;
  logo_path_light?: never;
  logo_path_dark?: never;
};

type ThemeLogoConfig = {
  logo_path: string;
  logo_path_light: string;
  logo_path_dark: string;
};

export type WorkExperience = WorkExperienceBase & (SingleLogoConfig | ThemeLogoConfig);

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

export interface ContactSection {
  title: string;
  description: string;
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
