export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Proficient' | 'Comfortable';
}