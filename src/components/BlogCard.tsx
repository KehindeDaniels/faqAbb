// Import the BlogCard interface from the data.ts file
import React from "react";
import { blogCards, BlogCard as BlogCardType } from "../data/blogData";

const BlogCard: React.FC = () => {
  return (
    <div className=" bg-[F0F1F5] grid grid-cols-1 md:grid-cols-3 gap-4 p-4 container mx-auto">
      {blogCards.map((card: BlogCardType, index: number) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
          <img
            src={card.imageUrl}
            alt={card.title}
            className="rounded-t-lg object-cover w-full h-40"
          />
          <div className="mt-4 text-gray-600">{card.date}</div>
          <h2 className="text-lg font-semibold mt-2">{card.title}</h2>
          <a
            href={card.buttonUrl}
            className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Read Article
          </a>
        </div>
      ))}
      <h3>Featured Posts</h3>
    </div>
  );
};

export default BlogCard;
