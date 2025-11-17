"use client";
import { useEffect, useState } from "react";

export default function Products() {
  const [product, setProduct] = useState<any>(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((r) => r.json())
      .then(setProduct)
      .catch(console.error);
  }, []);
  return (
    <div>{product ? `${product.title} - ${product.description}` : "Loading..."}</div>
  );
}
