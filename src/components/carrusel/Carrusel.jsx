"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import axios from "axios";

export function Carrusel() {
  const [estado, setEstado] = useState([]);
  useEffect(() => {
    axios
      .get("/api/get-info-Lenguajes.json")
      .then((res) => setEstado(res.data));
  }, []);
  return (
    (<div
      className="rounded-md flex flex-col antialiased bg-black items-center gap-5 justify-center relative overflow-hidden">
        <span className="container mx-auto">
           <h2 className="font-bold text-3xl">CONOCIMIENTOS</h2>
        </span>
     
      <InfiniteMovingCards items={estado} direction="right" speed="fast"  />
    </div>)
  );
}

