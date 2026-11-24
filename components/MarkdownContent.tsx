import Markdown from "markdown-to-jsx";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <Markdown>{content}</Markdown>
    </div>
  );
}
