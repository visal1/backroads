import React from "react";
import Title from "./Title";
import { servicedata } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subtitle="Services" />
      <div className="section-center services-center">
        {servicedata.map((serdata) => {
          return (
            <article key={serdata.id} className="service">
              <span className="service-icon">
                <i className={serdata.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{serdata.texthead}</h4>
                <p className="service-text">{serdata.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
