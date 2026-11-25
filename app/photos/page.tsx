import { Metadata } from "next";
import { photos } from "@/data/photos";
import PhotoGallery from "@/components/Photos/PhotoGallery";
import getPageContent from "@/lib/pages/getPageContent";
import MarkdownContent from "@/components/MarkdownContent";

const page = getPageContent("photos");

export const metadata: Metadata = {
    title: `${page.title} - Chavez Poon`,
    description: page.description,
};

const PhotosPage = () => {
    return (
        <div className="page-enter w-full lg:px-48">
            <div className="my-20 mx-auto max-w-7xl p-4 w-full space-y-16">
                <div><h2>{page.title}</h2><MarkdownContent content={page.content} /></div>
                <PhotoGallery photos={photos} />
            </div>
        </div>
    );
};

export default PhotosPage;
