import React from "react";
import "./blog.scss";
import { blogPost } from "@/data";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header"></div>

      <div className="post-container">
        {blogPost.map((post) => (
          <div key={post.id} className="post-box">
            <div className="img-container"></div>
            <div className="blog-content">
              <div className="details"></div>
              <div className="content"></div>
              <div className="button"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
