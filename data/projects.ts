export type ProjectData = {
    name: string;
    id: string;
    description: string;
    image: string;
    imageSmall: string;
    technologies: string[];
    link?: string;
    github?: string;
    learnMore?: string;
};

export const projects: ProjectData[] = [
    {
        name: "Lux Mundi Productions",
        id: "lux-mundi-productions",
        description: "Designed and built a website for my media production company Lux Mundi Productions.",
        image: "",
        imageSmall: "",
        technologies: ["JavaScript", "TypeScript", "Next.js", "Tailwind CSS"],
        link: "https://lux-mundi-productions.pages.dev/",
    },
]
