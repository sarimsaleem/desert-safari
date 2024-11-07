import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Row, Col, Typography, Space } from 'antd';
import "./subfooter.css";
import "../colors/Colors.css";

const { Title, Link } = Typography;

const SubFooter = () => {
  return (
    <div className="subfooter-container">
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={6} lg={6} xl={6} >
          <Title level={3} style={{color: "var(--color)"}}>UAE Activities</Title>
          <Space direction="vertical">
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Desert Safari Dubai Packages</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Sightseeing Tours</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Cruise Dinner</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Combo Tours</Link>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Title level={3} style={{color: "var(--color)"}}>Top Selling Tours</Title>
          <Space direction="vertical">
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Desert Safari by Bus Most Popular</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Evening Desert Safari Most Popular</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Red Dune Bashing Desert Safari</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Desert Safari (Gold) Most Popular</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Silver Desert Safari in Dubai</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Camel Ride Dubai</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Desert Safari with Quad Bike</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Morning Desert Safari Most Popular</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Hummer Desert Safari</Link>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Title level={3} style={{color: "var(--color)"}}>Top Selling Tours</Title>
          <Space direction="vertical">
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Dubai City Tour Most Popular</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Abu Dhabi City Tour Most Popular</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Hatta Mountain Safari</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Fujairah City Tour</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Al Ain City Tour</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Oman Musandam Tour</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Marina Cruise Dinner Most Popular</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Dhow Cruise Dinner Most Popular</Link>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Title level={3} style={{color: "var(--color)"}}  >Top Selling Tours</Title>
          <Space direction="vertical">
            <Link style={{color: "var(--text-color)"}} className='aasas' href="#"><FaChevronRight /> Abu Dhabi And Ferrari World</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Dubai City Tour + Desert Safari</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Dubai City Tour + Dhow Cruise Dinner</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Dubai City Tour + Marina Cruise Dinner</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Abu Dhabi + Marina Cruise Dinner</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Abu Dhabi + Dhow Cruise Dinner</Link>
            <Link style={{color: "var(--text-color)"}} href="#"><FaChevronRight /> Dubai City Tour + Desert Safari + Dhow Cruise Dinner + Abu Dhabi City Tour</Link>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default SubFooter;
