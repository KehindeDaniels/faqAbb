import React from "react";

const QuickApplyBlog: React.FC = () => {
  return (
    <div className="bg-policyBg h-screen flex justify-center items-center">
      <div className="text-center text-white">
        <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium">
          Blog
        </span>
        <h1 className="text-4xl font-bold mt-4">
          Insights on everything QuickApply <br /> has to offer
        </h1>
        <p className="mt-4 text-lg">
          Read our up-to-date articles and be informed about what <br />
          QuickApply does, and how we help people get the right jobs they want.
        </p>
      </div>
    </div>
  );
};

export default QuickApplyBlog;
