import { shuffle } from "lodash";
import Link from "next/link";
import { useState, useEffect } from "react";
const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

export default function Post({ post }) {
      const [color, setColor] = useState(null);
      useEffect(() => setColor(shuffle(colors).pop()), []);
  return (
    <div className={` bg-gradient-to-bl ${color}  to-blue-600 shadow-lg rounded text-white`}>
      <img
        src={post.frontmatter.cover_image}
        className="object-cover rounded-sm w-full"
        alt=""
      />
      <div className="p-2">
        <div className="text-sm  font-semibold">
          Posted on {post.frontmatter.date}
        </div>

        <h3 className="text-lg font-bold ">{post.frontmatter.title}</h3>

        <p className="text-sm">{post.frontmatter.excerpt}</p>
        <div className=' flex items-center mt-3'>
          <Link href={`/blog/${post.slug}`}>
            <a className="bg-gradient-to-tr from-indigo-500 to-indigo-900 p-1 rounded  text-center ">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
