import React from "react";

const ProductsFilter = (props) => {

    return (
    <div className="product-filter" style={{position: "relative"}}>
        <label htmlFor="condition">Stanje proizvoda</label>
        <select id="condition">
            <option value="najgore">Najgore</option>
            <option value="najbolje">Najbolje</option>
        </select>
        <span>Kategorije</span>

        <ul>
            <li>
                <input id="zabava" type="checkbox"/>
                <label htmlFor="zabava">Zabava</label>
            </li>
            <li>
                <input id="elektronika" type="checkbox"/>
                <label htmlFor="elektronika">Elektronika</label>
            </li>
            <li>
                <input id="knjige" type="checkbox"/>
                <label htmlFor="knjige">Knjige</label>
            </li>
            <li>
                <input id="odjeca" type="checkbox"/>
                <label htmlFor="odjeca">Odjeca</label>
            </li>
            <li>
                <input id="sport" type="checkbox"/>
                <label htmlFor="sport">Sport</label>
            </li>
        </ul>
    </div>
    );
};

export default ProductsFilter;