import Project from "@/components/Project/Project";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import getPageContent from "@/lib/pages/getPageContent";
import MarkdownContent from "@/components/MarkdownContent";

const page = getPageContent("projects");

export const metadata: Metadata = {
    title: `${page.title} - Ching Lam Lau`,
    description: page.description,
};

const Projects = () => {
    return (
        <div className="my-20 mx-auto max-w-2xl p-4 space-y-16">
            <div className="mb-8"><h2>{page.title}</h2><MarkdownContent content={page.content} /></div>
            {projects.map(project =>
                <Project
                    key={project.id}
                    name={project.name}
                    id={project.id}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    link={project.link}
                    github={project.github}
                    learnMore={project.learnMore}
                />
            )}
        </div>
    )
};

export default Projects;
