
import "./App.css";
import Product from "./components/Product";
import Counter from "./components/Counter";
import APIDemo from "./components/APIDemo";
import FormDemo from "./components/FormDemo";
import UserForm from "./components/CreateUsers";

function App() {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description: "Lightweight and comfortable slim-fit t-shirt.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "Great outerwear jacket for multiple seasons.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: "Comfortable casual slim fit wear.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title: "Gold & Silver Dragon Bracelet",
      price: 695,
      description: "Elegant bracelet with unique design.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description: "Premium quality jewelry item.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 },
    },
  ];

  return (
    <div className="p-5 bg-gray-100 min-h-screen">

      {/* Counter Section */}
   <UserForm />

      {/* API Demo Section */}
   <div className="mt-10">
        <APIDemo />
      </div> 

      {/* Product Section */}
      <h2 className="text-2xl font-bold mt-12 mb-6 text-center">
        Product List
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product productObj={product} key={product.id} />
        ))}
      </div>

    </div>
  );
}

export default App; 









