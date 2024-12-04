import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Row, Col, Typography, Space } from 'antd';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import './subfooter.css';
import '../colors/Colors.css';
import { Container } from 'react-bootstrap';

const { Title, Link } = Typography;

const SubFooter = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getDocs(collection(db, 'products'));
        const productsList = data.docs.map((doc) => ({
          ...doc.data(),
          _id: doc.id,
        }));

        const filteredProducts = productsList.filter(product => {
          const wordCount = product.image_text ? product.image_text.split(' ').length : 0;
          return wordCount <= 6;
        });

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    navigate(`/packages/${product.category}/${product._id}`, {
      state: {
        category: product.category,
        productId: product._id,
      },
    });
  };

  const productsPerColumn = Math.ceil(products.length / 4);
  const columns = Array.from({ length: 4 }, (_, index) =>
    products.slice(index * productsPerColumn, (index + 1) * productsPerColumn)
  );

  return (
    <div className="subfooter-container">
      <Container>
        <Row gutter={[16, 16]} justify="center">
          {columns.map((column, colIndex) => (
            <Col xs={24} sm={12} md={12} lg={6} xl={6} key={colIndex}>
              <Title level={3} id='subfooter-title'>Top Selling Tours</Title>
              <Space direction="vertical">
                {column.map((product) => (
                  <Link
                    key={product._id}
                    style={{ color: 'var(--text-color)', display: "flex", alignItems: "center" }}
                    onClick={() => handleProductClick(product)}
                  >
                    <FaChevronRight /> <p className="subfooter-link" style={{ margin: "0" }}>{product.image_text || 'Unnamed Product'}</p>
                  </Link>
                ))}
              </Space>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SubFooter;
