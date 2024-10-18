import React, { useEffect, useState } from 'react';
import { fetchProducts } from './function';

const Response = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);
            console.log(fetchedProducts);
        };

        loadProducts();
    }, []);

    return (                      
        <div>
            <h2>Fetched Products</h2>
            <ul>
                {products.map((product) => (
                    <>
                        <h6 key={product.id}>{product.description}</h6>
                        <h6 key={product.id}>{product.event_name}</h6>
                        <li key={product.id}>{product.image_text}</li>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default Response;
