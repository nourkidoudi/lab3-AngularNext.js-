"use client";
import { useParams } from "next/navigation";

export default function ContactById() {
  const params = useParams();
  const id = params?.id as string;
  return (
    <>
      <div>Contact Page</div>
      <h2>Contact ID: {id}</h2>
    </>
  );
}
