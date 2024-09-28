// src/data.ts

export interface BlogCard {
  imageUrl: string;
  date: string;
  title: string;
  buttonUrl: string;
}

export const blogCards: BlogCard[] = [
  {
    imageUrl: "/path/to/image1.png", // Replace with the actual image path
    date: "February 22nd, 2024",
    title: "How to make QuickApply work efficiently for you",
    buttonUrl: "/read-article-1", // Replace with the actual article URL
  },
  {
    imageUrl: "/path/to/image2.png", // Replace with the actual image path
    date: "February 22nd, 2024",
    title: "How to make QuickApply work efficiently for you",
    buttonUrl: "/read-article-2", // Replace with the actual article URL
  },
  {
    imageUrl: "/path/to/image3.png", // Replace with the actual image path
    date: "February 22nd, 2024",
    title: "How to make QuickApply work efficiently for you",
    buttonUrl: "/read-article-3", // Replace with the actual article URL
  },
];
