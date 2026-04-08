"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then((res) => setData(res.message));
  }, []);

  return (
    <div>
      <h1>Next.js + FastAPI</h1>
      <p>{data}</p>
    </div>
  );
}