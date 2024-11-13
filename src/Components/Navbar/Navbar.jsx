import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { db } from "../../Firebase/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { convertToSlug } from '../../Utils/helper';
import { fetchProduct, fetchProducts } from '../../Utils/function';


const Header = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [menuCategory, setMenuCategory] = useState(null);
    const [menuCategoryPackages, setMenuCategoryPackages] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const loadProduct = (categoryId) => {
        fetchProducts({ categoryId })
            .then(res => {
                console.log('res', res, categoryId)
                setMenuCategoryPackages(res);
            })
            .catch(error => {
                console.error("Error fetching product: ", error);
                setMenuCategoryPackages([]);
            })

    };

    const fetchCategories = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "categories"));
            const categoriesData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            const foundMenuCategory = categoriesData.find(obj => obj?.show_on_menu)
            console.log('foundMenuCategory', foundMenuCategory)
            if (foundMenuCategory?._id) {
                loadProduct(foundMenuCategory?._id)
            }
            setMenuCategory(foundMenuCategory)
            setCategories(categoriesData);
            console.log(categoriesData, "categoriesData");
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const handleCategoryClick = (category) => {
        navigate(`/packages/${convertToSlug(category.category_name)}`, {
            state: { category }
        });
    };

    const handlePackageClick = (packageData, categoryData) => {
        navigate(`/packages/${convertToSlug(categoryData?._id)}/${convertToSlug(packageData?._id)}`, {
            state: {
                category: categoryData,
                productId: packageData?._id
            }
        });
    };

    return (
        <Navbar expand="md" className="bg-body-tertiary header">
            <Container>
                <Navbar.Brand className='navbar-brand' href="/"><img className='logo' src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links"><Link className='link' to="/">Home</Link></Nav.Link>
                        </div>
                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links"><Link className='link' to="/about">About Us</Link></Nav.Link>
                        </div>

                        {menuCategory?.category_name ? <div className='nav-link-parent'>
                            <NavDropdown className="nav-links" title={menuCategory?.category_name} id="basic-nav-dropdown">
                                <div className="dropDawn-cont1">
                                    <Row>
                                        {menuCategoryPackages?.slice(0, 6).map((obj) => (
                                            <Col md={6} key={obj?.id}>
                                                <NavDropdown.Item
                                                    className='drop-items'
                                                    onClick={() => handlePackageClick(obj, menuCategory)}
                                                >
                                                    {obj?.image_text}
                                                </NavDropdown.Item>
                                                <div className='divider'></div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </NavDropdown>
                        </div> : null}

                        <div className='nav-link-parent'>
                            <NavDropdown className="nav-links" title="All Packages" id="all-packages-dropdown">
                                <div className="dropDawn-cont">
                                    <Row>
                                        {categories.map((category) => (
                                            <Col md={6} key={category.id}>
                                                <NavDropdown.Item className='drop-items'
                                                    onClick={() => handleCategoryClick(category)}>
                                                    {category?.category_name}
                                                </NavDropdown.Item>
                                                <div className='divider'></div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </NavDropdown>
                        </div>

                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links"><Link className='link' to="/contact">Contact</Link></Nav.Link>
                        </div>
                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links"><Link className='link' to="/blog">Blog</Link></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
