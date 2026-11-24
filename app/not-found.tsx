import getPageContent from "@/lib/pages/getPageContent";
import MarkdownContent from "@/components/MarkdownContent";

export default function NotFound() {
    const page = getPageContent("not-found");
    return (
        <div className="my-32 mx-auto max-w-2xl p-4 text-center">
            <h1 className="text-8xl mb-8">404</h1>
            <h2 className="mb-8 font-semibold">{page.title}</h2>
            <MarkdownContent content={page.content} />
            <a href="/" className="mt-8 inline-block border-2 py-2 px-6 rounded-full border-indigo-600 dark:border-indigo-400 hover:text-indigo-600 hover:dark:text-indigo-400 transition-colors ease-in-out duration-200">Go back home →</a>
        </div>
    )
}
