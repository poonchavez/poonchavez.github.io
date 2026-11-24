import SectionHeading from "@/components/Home/SectionHeading";
import PostPreviewCard from "@/components/Post/PostPreviewCard";
import ProjectPreview from "@/components/Project/ProjectPreview";
import { getProjects } from "@/data/projects";
import getPostMetaData from "@/lib/posts/getPostMetadata";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import getPageContent from "@/lib/pages/getPageContent";
import MarkdownContent from "@/components/MarkdownContent";

const HomePage = () => {
    const page = getPageContent("home");
    const postMetadata = getPostMetaData().slice(0, 3);
    const topProjects = getProjects().slice(0, 3);

    return (
        <div className="mt-20 mb-6 mx-auto max-w-4xl p-4">
            <div className="pb-12">
                <h2 className="font-semibold">{page.title}</h2>
                <div className="mt-6 text-[16px] leading-relaxed">
                    <MarkdownContent content={page.content} />
                </div>
                <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1">
                    <Link href="https://github.com/poonchavez" target="_blank" rel="noopener noreferrer" className="link-muted" title="GitHub" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} className="w-5 text-lg" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/poonlonghei/" target="_blank" rel="noopener noreferrer" className="link-muted" title="LinkedIn" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="w-5 text-lg" />
                    </Link>
                    <a href="mailto:poonlhchavez@gmail.com" className="link-muted" title="Email" aria-label="Email">
                        <FontAwesomeIcon icon={faEnvelope} className="w-5 text-lg" />
                    </a>
                </div>
            </div>

            <SectionHeading name="Projects" link="/projects" />
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topProjects.map(project => 
                    <Link key={project.id} href={"/projects#" + project.id}>
                        <ProjectPreview name={project.name} image={project.imageSmall} />    
                    </Link>
                )}                
            </div>

            <SectionHeading name="Writing" link="/writing" />
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {postMetadata.map((post) => (
                    <PostPreviewCard key={post.slug} {...post} />
                ))}
            </div>            
        </div>
    )
};

export default HomePage;
