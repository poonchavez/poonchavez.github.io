import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PageSlug = "home" | "projects" | "writing" | "photos" | "hackathons" | "not-found";

export type PageContent = {
  title: string;
  description: string;
  content: string;
};

export default function getPageContent(slug: PageSlug): PageContent {
  const filePath = path.join(process.cwd(), "content", "pages", `${slug}.md`);
  const parsed = matter(fs.readFileSync(filePath, "utf8"));

  return {
    title: String(parsed.data.title ?? ""),
    description: String(parsed.data.description ?? ""),
    content: parsed.content.trim(),
  };
}
