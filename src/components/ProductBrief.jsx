import React from "react";

const ProductBrief = (props) => {
    return (
    <section className="product-brief">
        <h2>Novo!</h2>
        <article className="product">
            <img
                src="https://dummyimage.com/450x350/ffcc00/&text=Placeholder+image+courtesy+of+dummyimage.com" 
                alt="Ime novog proizvoda"/>
            <h3>Moj nekorišteni šator</h3>
            <p>Moj nekorišteni šator je još uvijek zapakiran</p>
            <p>Stanje: <span>6.5</span></p>
            <button>Dodaj u košaricu</button>
        </article>
    </section>
    );
};

export default ProductBrief;