import React, { useState, useEffect, useContext } from "react";
import "./CustomBlog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import { customBlogSection } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
export default function Blogs() {
  const { isDark } = useContext(StyleContext);
  if (!customBlogSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{customBlogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {customBlogSection.subtitle}
          </p>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            <p > Check out my Blog:</p>
            <p className={isDark ? "dark-mode blog-subtitle text-center up-and-down-animation" : "subTitle blog-subtitle text-center up-and-down-animation"}>
              <a href={customBlogSection.url}>
                {emoji("👉")}{customBlogSection.friendlyUrl}
              </a>
            </p >
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {customBlogSection.display
              && customBlogSection.blogs.map((blog, i) => {
                return (
                  <BlogCard
                    key={i}
                    isDark={isDark}
                    blog={{
                      url: blog.url,
                      image: blog.image,
                      title: blog.title,
                      description: blog.description
                    }}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    </Fade>
  );
}
