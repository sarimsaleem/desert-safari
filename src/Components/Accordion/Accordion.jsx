import React, { useEffect, useState } from 'react';
import "./accrdion.css";
import Accordion from 'react-bootstrap/Accordion';
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { Spin } from 'antd';
import { getFAQs } from '../../Utils/faqGetFunction';

const Expandable = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeKey, setActiveKey] = useState(null); // Track the currently active accordion item

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const fetchedFAQs = await getFAQs();
                setFaqs(fetchedFAQs);
            } catch (error) {
                console.error("Error loading FAQs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    const handleAccordionToggle = (key) => {
        setActiveKey(activeKey === key ? null : key); // Close the current item if it's clicked again
    };

    return (
        <div className='container accordion-parent'>
            <div className='faqs-parent'>
                FAQs <span className='faqs'> _____ </span>
                <FaPersonWalkingLuggage className='personLuagage' />
            </div>
            <h1 className='faqs-heading'>FREQUENTLY ASKED QUESTIONS</h1>

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <Spin size="large" className="custom-spinner" />
                </div>
            ) : (
                <Accordion activeKey={activeKey}>
                    {faqs.map((faq, index) => (
                        <Accordion.Item 
                            eventKey={index.toString()} 
                            key={faq.id}
                            onClick={() => handleAccordionToggle(index.toString())}
                        >
                            <Accordion.Header>{faq.question}</Accordion.Header>
                            <Accordion.Body>{faq.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            )}
        </div>
    );
};

export default Expandable;
