import React from "react";
import ProductBrief from "../components/ProductBrief";
import ProductsFilter from "../components/ProductsFilter";
import ProductsFeed from "../components/ProductsFeed";

const HomePage = (props) => {


    return (
        <main>
            <div className="new-product-wrapper">
                <ProductBrief />
            </div>
            <div className="products-filter-wrapper">
                <ProductsFilter />
            </div>
            <div className="products-feed-wrapper">
                <ProductsFeed />
            </div>
        </main>
    );
};

export default HomePage;