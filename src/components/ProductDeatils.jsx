import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">

      <div className="grid md:grid-cols-2 gap-6">

        <img
          src={product.thumbnail}
          className="w-full h-80 object-cover rounded-xl"
        />

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>

          <p className="text-xl text-green-600 font-semibold mt-4">
            ₹{product.price}
          </p>

          <p className="mt-2 text-yellow-500">
            ⭐ {product.rating}
          </p>

          <button className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-lg">
            Add to Cart 🛒
          </button>
        </div>

      </div>

    </div>
  );
}
