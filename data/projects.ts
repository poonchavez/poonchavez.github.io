import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

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

export function getProjects(): ProjectData[] {
    const folder = path.join(process.cwd(), "content", "projects");
    return fs.readdirSync(folder)
        .filter((filename) => filename.endsWith(".md"))
        .map((filename) => {
            const slug = filename.replace(/\.md$/, "");
            const source = fs.readFileSync(path.join(folder, filename), "utf8");
            const parsed = matter(source);
            const data = parsed.data;

            return {
                name: String(data.name ?? slug),
                id: String(data.id ?? slug),
                description: String(data.description ?? parsed.content.trim()),
                image: String(data.image ?? ""),
                imageSmall: String(data.imageSmall ?? data.image ?? ""),
                technologies: Array.isArray(data.technologies) ? data.technologies.map(String) : [],
                link: data.link ? String(data.link) : undefined,
                github: data.github ? String(data.github) : undefined,
                learnMore: data.learnMore ? String(data.learnMore) : undefined,
            };
        });
}
