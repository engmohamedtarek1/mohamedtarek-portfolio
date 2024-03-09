export const NAVBAR = {
  full_name: "Mohamed Tarek",
  nav_item: [
    { label: "About", uid: "/about" },
    { label: "Projects", uid: "/projects" },
  ],
  contact: {
    label: "Contact",
    showIcon: true,
    href: "mailto:eng.mohamedtarek0@gmail.com",
  },
};

export const HERO = {
  full_name: "Mohamed Tarek",
  first_name: "Mohamed",
  last_name: "Tarek",
  job_title: "Software Engineer",
};

export const FOOTER = {
  full_name: "Mohamed Tarek",
  nav_item: [
    { label: "About", uid: "/about" },
    { label: "Projects", uid: "/projects" },
  ],
  linkedin_link: "https://www.linkedin.com/in/eng-mohamedtarek1/",
  github_link: "https://github.com/engmohamedtarek1",
  telegram_link: "https://t.me/engmohamedtarek",
};

export const BIOGRAPHY = {
  full_name: "About Me",
  description:
    "I am a frontend freelance developer and an advocate for building responsive, accessible, and inclusive digital products and experiences for the web.\nExcellent problem-solving abilities and expertise in optimizing web performance.\nStrong communication skills and the ability to collaborate effectively with cross-functional teams.\nCommitted to staying updated with the latest industry trends and technologies to deliver cutting-edge solutions.",
  avatar_link:
    "https://images.prismic.io/mohamedtarek/65e5b10a676dc480aae09141_mohamed2.jpg?auto=format,compress",
  resume_text: "Resume",
  resume_link: "https://www.linkedin.com/in/eng-mohamedtarek1/",
};

export const TECHLIST = {
  title: "What I use",
  items: [
    { tech_name: "React", tech_color: "#61DAFB" },
    { tech_name: "Next.js", tech_color: "#FFFFFF" },
    { tech_name: "Tailwind", tech_color: "#36B7F0" },
    { tech_name: "GSAP", tech_color: "#07E346" },
  ],
};

export const EXPERIENCE = {
  title: "Experience",
  items: [],
};

export const EDUCATION = {
  title: "Education",
  items: [
    {
      title: "Student",
      date: "Present",
      company: "Faculty of Computer and Information Science",
      description:
        "I maintained a high GPA while taking a full-time course load; I got a 3.56/4 GPA in my first year of college.\nActively participated in student organizations and clubs on campus, like GDSC and problem-solving competitions\nDeveloped strong time management and organizational skills through balancing academics and extracurricular activities.",
    },
  ],
};

export const PROJECTS = {
  title: "Projects",
  description: "The tech projects I've created or contributed in.",
  view_more_text: "View Project",
  live_demo_text: "Live Demo",
  items: [
    {
      uid: "tenzies-game",
      tags: ["React", "CSS"],
      title: "Tenzies Game",
      github_link: "https://github.com/engmohamedtarek1/tenzies-game",
      live_demo: "https://tenzies-game-beige.vercel.app/",
      image: {
        dimensions: { width: 6000, height: 4000 },
        url: "https://user-images.githubusercontent.com/68748054/189958168-fa920864-901c-4da5-b318-9d3a135a6aea.png",
        id: "XJXWbfSo2f0",
        edit: { x: 0, y: 0, zoom: 1, background: "transparent" },
      },
      date: "2023-12-10",
    },
    {
      uid: "online-coaching-platform",
      tags: ["Next", "React", "CSS", "Docusaurus"],
      title: "Online Coaching Documentation",
      github_link:
        "https://github.com/engmohamedtarek1/online-coaching-platform",
      live_demo: "https://online-coaching-platform.vercel.app/",
      image: {
        dimensions: { width: 6000, height: 4000 },
        url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: "XJXWbfSo2f0",
        edit: { x: 0, y: 0, zoom: 1, background: "transparent" },
      },
      date: "2023-12-10",
    },
  ],
};
