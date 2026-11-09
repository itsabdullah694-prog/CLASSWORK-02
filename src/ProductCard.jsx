function ProductCard({ title, category, price, image, availability }) {
    return (
        <div className="product-card">

            <img src={image} alt={title} />

            <h3>{title}</h3>

            <p>{category}</p>

            <h4>${price}</h4>

            <p>
                {availability ? "In Stock" : "Out of Stock"}
            </p>

            <button onClick={() => alert(`You selected ${title}`)}>
                View Product
            </button>

        </div>
    );
}

export default ProductCard;