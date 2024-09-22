import Link from "next/link";

const LinkBlog = ({ texto, Url }) => {
  return (
    <span>
      <Link
      href={Url}
      target="_blank"
      className="text-green-600 font-semibold font-mono text-xl my-2 hover:text-green-700"
    >
      {texto}
    </Link>
    </span>
  );
};

export default LinkBlog;
