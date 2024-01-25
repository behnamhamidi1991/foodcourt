import React from "react";
import "./blog.scss";
import { blogPost } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>وبلاگ</h2>
        <p>
          توی وبلاگ ما کلی مطالب متنوع و مفید پیدا می کنید، برای خواندن مطالب
          بیشتر به صفحه وبلاگ ما مراجعه کنید
        </p>
      </div>

      <div className="post-container">
        {blogPost.map((post) => (
          <div key={post.id} className="post-box">
            <div className="img-container">
              <Image
                className="post-image"
                src={post.blogImg}
                width={300}
                alt={post.title}
              />
            </div>
            <div className="blog-content">
              <div className="details">
                <div className="postTitle">
                  <h3>{post.title}</h3>
                </div>
                <div className="author-date">
                  <p className="date">{post.date}</p>
                  <p className="author">{post.author}</p>
                </div>
              </div>

              <div className="content">
                <p>{post.content}</p>
              </div>
              <div className="button">بیشتر بخوانید</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
