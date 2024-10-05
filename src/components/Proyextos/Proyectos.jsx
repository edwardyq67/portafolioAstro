import axios from "axios";
import React, { useEffect, useState } from "react";
import { SlArrowRightCircle } from "react-icons/sl";

function Proyectos() {
  const [estado, setEstado] = useState([]);
  useEffect(() => {
    axios
      .get("/api/get-info-Proyectos.json")
      .then((res) => setEstado(res.data));
  }, []);
  console.log(estado);
  return (
    <div className="container mx-auto gap-5 flex flex-col">
      <h2 className="font-bold text-3xl">PROYECTOS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {estado
          .slice()
          .reverse()
          .map((estad) => (
            <div
              key={estad.id}
              className="flex flex-col justify-center gap-1 items-start bg-zinc-900 rounded-lg p-4"
            >
              <div className="w-full flex justify-between items-center">
                <h3 className="text-2xl font-bold">{estad.title}</h3>
                <a href={estad.url} target="_blank">
                  {" "}
                  <SlArrowRightCircle className="cursor-pointer text-3xl transition-all duration-200 hover:text-zinc-400" />
                </a>
              </div>
              <p className="text-sm font-semibold text-zinc-400">
                {estad.description}
              </p>
              <div className="flex my-2 overflow-x-auto items-center justify-center gap-2 hide-scrollbar">
                {estad?.lenguajes?.map((lenguaje) => (
                  <picture className="overflow-hidden" key={lenguaje.id}>
                    <img
                      style={{ width: `${lenguaje.size}px`, height: "100%" }}
                      src={lenguaje?.logo}
                      alt={lenguaje?.logo}
                    />
                  </picture>
                ))}
              </div>

              <picture>
                <img
                  className="w-full h-full rounded-md"
                  src={estad.image}
                  alt=""
                />
              </picture>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Proyectos;
