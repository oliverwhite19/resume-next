declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.ico';

type Position = {
  title: string;
  start: string;
  end?: string;
  accomplishments?: string[];
  technologies?: string[];
};

type Employer = {
  name: string;
  url: string;
  position: number;
  description: string;
  positions: Position[];
};

type Education = {
  degree: string;
  school: string;
  url: string;
};

type Resume = {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  description: string;
  employers: Employer[];
  education: Education[];
};

export type { Resume, Employer, Position, Education };
