import PostPreview from "@/components/Post/PostPreview";
import MailingListForm from "@/components/Writing/MailingListForm";
import getPostMetaData from "@/lib/posts/getPostMetadata";
import { Metadata } from "next";
import getPageContent from "@/lib/pages/getPageContent";
import MarkdownContent from "@/components/MarkdownContent";

const page = getPageContent("writing");

export const metadata: Metadata = {
    title: `${page.title} - Chavez Poon`,
    description: page.description,
};

const WritingPage = () => {
    const postMetadata = getPostMetaData();

    return (
        <div className="page-enter my-20 mx-auto max-w-2xl p-4 space-y-16">
            <div><h2>{page.title}</h2><MarkdownContent content={page.content} /></div>
            <div className="space-y-3">
                {postMetadata.map((post) => (
                    <PostPreview key={post.slug} {...post} />
                ))}
            </div>
            <MailingListForm />
        </div>
    )
};

export default WritingPage;
