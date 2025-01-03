import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './readmore.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';
import { fetchBlogs } from '../Functions/functions';
import { Spin } from 'antd';

const Readmore = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const { category, item } = state || {};

    const [blogs, setBlogs] = useState([]);
    const [randomBlogs, setRandomBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const getBlogs = async () => {
            try {
                const blogsList = await fetchBlogs();
                setBlogs(blogsList);

                const shuffled = [...blogsList].sort(() => 0.5 - Math.random());
                setRandomBlogs(shuffled.slice(0, 5)); // Limit to 4 random blogs
            } catch (error) {
                console.error('Failed to fetch blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        getBlogs();
    }, [location]);

    const date = new Date();
    const day = date.getDate();
    const monthName = date.toLocaleString('default', { month: 'long' });
    const formattedDate = `${day} ${monthName}`;

    if (loading) {
        return (
            <div className="blog-loading">
                <Spin className="custom-spinner" size="large" />
            </div>
        );
    }
    
    console.log(item,  "item")

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="package-text">
                            <h6 className="page-heaer-text image-detail-text image-detail-text-head fs-1">
                                {item?.title}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="readmore-page">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="readmore-content">
                                <div className="readmore-banner-wrapper">
                                    <img
                                        src={item?.banner_image_url}
                                        alt={item?.title}
                                        className="readmore-banner"
                                    />
                                </div>
                                <div className="readmore-container">
                                    <div className="readmore-date-box">
                                        <h3 className="readmore-day">{day}</h3>
                                        <h4 className="readmore-month">{monthName.toUpperCase()}</h4>
                                        <p className="readmore-year">{date.getFullYear()}</p>
                                    </div>
                                    <div className="readmore-content">
                                        <h2 className="readmore-title">{item?.title || 'No Title'}</h2>
                                        <p className="readmore-date">
                                            Posted by: <a href="">{item?.author || 'Desert Safari UAE'}</a>
                                        </p>
                                        <div className="readmore-share">
                                            <span>Share to:</span>
                                            <div className="icon-parent-blog">
                                                <a href="#"><FaFacebookF /></a>
                                            </div>
                                            <div className="icon-parent-blog">
                                                <a href="#"><FaTwitter /></a>
                                            </div>
                                            <div className="icon-parent-blog">
                                                <a href="#"><FaGooglePlusG /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="readmore-body">
                                    {/* <p>{item?.content || 'No Content Available'}</p> */}
                                    <div dangerouslySetInnerHTML={{__html : item?.content}}></div>
                                </div>
                            </div>
                        </Col>

                        {/* Sidebar */}
                        <Col lg={4}>
                            <div className="random-blogs">
                                <h3 className="sidebar-title">You May Also Like</h3>
                                {randomBlogs.map((blog, index) => (
                                    <div
                                        key={index}
                                        className="random-blog-item"
                                        onClick={() =>
                                            navigate('/readmore', {
                                                state: { category: blog.category, item: blog },
                                            })
                                        }
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img
                                            src={blog.banner_image_url}
                                            alt={blog.title}
                                            className="random-blog-image"
                                        />
                                        <div className="random-blog-content">
                                            <h4 className="random-blog-title">{blog.title}</h4>
                                            <p className="random-blog-excerpt">
                                                {blog.content?.substring(0, 60)}...
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                <h3 className="sidebar-title" style={{ marginTop: '20px' }}>You May Interest</h3>
                                {randomBlogs.map((blog, index) => (
                                    <div
                                        key={`interest-${index}`}
                                        className="random-blog-item"
                                        onClick={() =>
                                            navigate('/readmore', {
                                                state: { category: blog.category, item: blog },
                                            })
                                        }
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img
                                            src={blog.banner_image_url}
                                            alt={blog.title}
                                            className="random-blog-image"
                                        />
                                        <div className="random-blog-content">
                                            <h4 className="random-blog-title">{blog.title}</h4>
                                            <p className="random-blog-excerpt">
                                                {blog.content?.substring(0, 60)}...
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Readmore;