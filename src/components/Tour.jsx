import React from "react";
import Title from "./Title";
import { tours } from "../data";
import Tours from "./Tours";

const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subtitle="Tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tours {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};

export default Tour;
