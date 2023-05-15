import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';
import { Link, useLoaderData } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [cart, setCart] = useState([]);

    // pagination starts

    const { totalProducts } = useLoaderData();

    // console.log(totalProducts);

    // const itemsPerPage = 10;

    const totalPage = Math.ceil(totalProducts / itemsPerPage);

    const pageNumbers = [...Array(totalPage).keys()];

    // pagination ends

    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);

            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, [currentPage, itemsPerPage]);


    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            // console.log(addedProduct)
        };
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id);
    };

    // pagination functions

    const options = [5, 10, 15, 20];

    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }

    return (
        <>
            <div className='products-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}>

                        </Product>)
                    }
                </div>
                <div>
                    <Cart cart={cart}>
                        <Link to='/review'><button>Review Order</button></Link>
                    </Cart>
                </div>
            </div>

            {/* pagination */}

            <div className='pagination'>
                <p>{currentPage}</p>
                {
                    pageNumbers.map(number =>
                        <button
                            className='pagination-btn'
                            key={number}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </button>)
                }

                <select value={itemsPerPage} onChange={handleSelectChange}>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

            </div>
        </>
    );
};

export default Products;