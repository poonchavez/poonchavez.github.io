import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ name = "", id = "", description = "", image = "", technologies = new Array(), link = "", github = "", learnMore = "" }) => {
    return (
        <div id={id} className="scroll-mt-4 group">
            {image ? (
                <Image src={"/images/projects/" + image} alt={name} width={1000} height={1000} className="rounded-t-lg"/>
            ) : (
                <div className="flex aspect-[4/3] items-center justify-center rounded-t-lg bg-gray-100 p-8 text-center dark:bg-gray-800">
                    <span className="text-2xl font-semibold">{name}</span>
                </div>
            )}
            <div className="pt-6 px-5 pb-5 rounded-b-lg border-2 border-gray-300 border-t-0 dark:border-gray-800 project-hover w-full">
                <div className="flex items-center">
                    <h3 className="mr-6 mb-1">{name}</h3>
                    {link && <Link href={link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-3 text-indigo-400 hover:text-indigo-500"/>
                    </Link>}
                    {github && <Link href={github} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-indigo-400 hover:text-indigo-500"/>
                    </Link>}
                </div>
                <p className="text-sm mt-3 mb-4 text-gray-800 dark:text-gray-200">
                    {description}
                    {learnMore && <Link href={learnMore} className="ml-1 underline-highlight">Learn more →</Link>}
                </p>
                {technologies.map(
                    tech => <span key={tech} className="inline-block mb-1 text-xs mr-1 text-gray-600 py-1 px-2 rounded-lg bg-indigo-50 dark:bg-gray-700 dark:text-gray-200">{tech}</span>
                )}
            </div>
        </div>
    )
}

export default Project;
