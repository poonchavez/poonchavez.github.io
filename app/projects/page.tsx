import ProjectList from "@/components/Project/ProjectList";
import { getProjects } from "@/data/projects";
import { Metadata } from "next";
import getPageContent from "@/lib/pages/getPageContent";
import MarkdownContent from "@/components/MarkdownContent";

const page = getPageContent("projects");

export const metadata: Metadata = {
    title: `${page.title} - Chavez Poon`,
    description: page.description,
};

const Projects = () => {
    return (
        <div className="page-enter my-20 mx-auto max-w-2xl p-4 space-y-16">
            <div className="mb-8"><h2>{page.title}</h2><MarkdownContent content={page.content} /></div>
            <ProjectList projects={getProjects()} />
        </div>
    )
};

export default Projects;
