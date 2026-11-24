"use client";

import { useMemo, useState } from "react";
import type { ProjectData } from "@/data/projects";
import Project from "./Project";

export default function ProjectList({ projects }: { projects: ProjectData[] }) {
    const [query, setQuery] = useState("");
    const filteredProjects = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        if (!normalizedQuery) return projects;

        return projects.filter((project) =>
            [project.name, project.description, ...project.technologies]
                .join(" ")
                .toLowerCase()
                .includes(normalizedQuery)
        );
    }, [projects, query]);

    return (
        <div>
            <label htmlFor="project-search" className="sr-only">Search projects</label>
            <input
                id="project-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects or technologies…"
                className="mb-8 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
            {filteredProjects.length ? (
                <div className="space-y-12">
                    {filteredProjects.map((project) => <Project key={project.id} {...project} />)}
                </div>
            ) : (
                <p className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                    No projects match “{query}”. Try another name or technology.
                </p>
            )}
        </div>
    );
}
