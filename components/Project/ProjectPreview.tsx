import Image from "next/image";

const ProjectPreview = ({ name = "", image = "" }) => {
    return (
        <div className="p-3 pb-4 rounded-md bg-hover group">
            {image ? (
                <Image src={"/images/projects/" + image} alt={name} width={600} height={600} className="rounded-lg"/>
            ) : (
                <div className="flex aspect-square items-center justify-center rounded-lg bg-gray-100 p-5 text-center dark:bg-gray-800">
                    <span className="font-semibold">{name}</span>
                </div>
            )}
            <p className="font-semibold text-sm pt-3 pl-4">
                {name} <span className="ml-1 hidden group-hover:inline-block">→</span>
            </p>
        </div>
    )
}

export default ProjectPreview;
