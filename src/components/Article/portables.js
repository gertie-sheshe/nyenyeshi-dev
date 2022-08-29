import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Image from "next/image";
import { Link } from "./ArticleStyles";

export const renderLink = ({ value, children }) => {
  const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
  return (
    <Link href={value?.href} target={target}>
      {children}
    </Link>
  );
};

export const renderCode = ({ value }) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {value.code}
    </SyntaxHighlighter>
  );
};

export const renderImage = ({ value }) => {
  return (
    <Image
      width={500}
      height={500}
      src={urlFor(value.asset._ref).url()}
      alt=""
    />
  );
};
