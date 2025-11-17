"use client";
import Header from "./header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Child from "./child/page";
import Products from "./products/page";

export default function Home() {
  const router = useRouter();
  const gotoLogin = () => router.push("/login");
  const gotoContact = () => router.push("/contact/123");
  const [states] = useState(["Tozeur", "Gafsa", "Tunis"]);
  return (
    <>
      <Header />
      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16 }}>
        <button onClick={gotoLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login Page</button>
        <button onClick={gotoContact} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Contact Page</button>
      </div>
      <div style={{ marginTop: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <Child states={states} />
        <Products />
      </div>
    </>
  );
}
