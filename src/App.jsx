import ProductCard from "./ProductCard";
import StoreHeader from "./StoreHeader";
import "./App.css";


function App() {
  const products = [
    {
        id: 1,
        title: "Wireless Headphones",
        category: "Accessories",
        price: 45,
        image: "https://placehold.co/300x200",
        availability: true
    },
    {
        id: 2,
        title: "Gaming Laptop",
        category: "Computers",
        price: 850,
        image: "https://placehold.co/300x200",
        availability: true
    },
    {
        id: 3,
        title: "Smart Watch",
        category: "Wearables",
        price: 75,
        image: "https://placehold.co/300x200",
        availability: false
    },
    {
        id: 4,
        title: "Wireless Mouse",
        category: "Accessories",
        price: 25,
        image: "https://placehold.co/300x200",
        availability: true
    },
    {
        id: 5,
        title: "Mechanical Keyboard",
        category: "Accessories",
        price: 60,
        image: "https://placehold.co/300x200",
        availability: false
    },
    {
        id: 6,
        title: "Smartphone",
        category: "Mobile Phones",
        price: 400,
        image: "https://placehold.co/300x200",
        availability: true
    }
];

    return (
        
    <div>
        <StoreHeader />

       <div className="product-grid">

    {products.map((product) => (
        <ProductCard
            key={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
            availability={product.availability}
        />
    ))}

</div>
    </div>
);
    
}

export default App;