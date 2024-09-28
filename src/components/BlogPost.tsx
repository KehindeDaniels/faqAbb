import BlogCard from "./BlogCard";

function BlogPost() {
  return (
    <div className="container mx-auto">
      <header className="bg-white text-white p-6">
        <h1 className="text-4xl text-black font-bold">Blog Posts</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search blog posts"
            className="bg-gray-200 text-black p-2 rounded"
          />
          <div className="mt-4 flex space-x-4">
            <button className="px-4 py-2 bg-yellow-600 text-white rounded">
              All Posts
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded">
              Pricing
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded">
              Announcements
            </button>
          </div>
        </div>
      </header>
      {/* Render the blog section */}
      <BlogCard />
    </div>
  );
}

export default BlogPost;
