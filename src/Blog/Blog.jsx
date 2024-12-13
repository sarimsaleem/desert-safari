import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { fetchBlogs } from './Functions/functions';
import './Blog.css';
import Header from "../assets/header.jpg";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = { category_name: 'Desert Adventures' };
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogsList = await fetchBlogs();
        setBlogs(blogsList);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  const handleClick = (category, item) => {
    navigate('/readmore', { state: { category, item } });
  };

  return (
    <div className="blog-page">
      <div className="blog-header-container">
        <img src={Header} alt="Header" />
        <div className="blog-header-text-container">
          <h6 className="blog-header-text">{category?.category_name || '-'}</h6>
        </div>
      </div>

      <div className="blog-content-container">
        <div className="blog-packages">
          {loading ? (
            <div className="blog-loading">
              <Spin size="large" className="custom-spinner" />
            </div>
          ) : (
            <div className="blog-cards-row">
              {blogs.map((blog, index) => (
                <div key={blog._id || index} className="blog-card-wrapper">
                  <div className="blog-card">
                    <div className="blog-image-container">
                      {blog?.banner_image_url && (
                        <img src={blog.banner_image_url} className="blog-card-image" alt={blog.title || 'Blog'} />
                      )}
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-details">
                        {blog?.title && <h3 className="blog-card-title">{blog.title}</h3>}
                      </div>
                      {blog?.content && <p className="blog-text">{blog.content}</p>}
                      <div className="btn-parent-blog">
                        <button className="blog-book-now-btn" onClick={() => handleClick(category, blog)}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
