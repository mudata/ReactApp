import React from "react";
import { Link } from "react-router-dom";
import Services from "../components/Services";

export default function About() {
  return (
    <>
      <section className="about">
        <h2>Why Choose Us</h2>

        <div className="info-about">
          <img src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/MIAMI/BH-MIAMI-3.jpg/jcr%3Acontent" alt="" />
          <article>
            <h3>To open in 2024: Bvlgari Hotel Miami Beach</h3>
            {}
<p>Located on the waterfront with access to Miami's beautiful beaches, the Bvlgari Hotel Miami Beach will offer stunning ocean views just a few steps from the exciting Miami Art Deco district.

The building that will become Bvlgari Hotel Miami Beach was originally designed as a hotel by Miami architect Albert Anis in the late 1950's, as part of the city's Modernist movement, and its restoration will be overseen by the Italian architectural firm Antonio Citterio Patricia Viel. Blending a glamourous past with a just-as-glamourous present, décor will reflect the property’s legacy as winter destination for the Old Hollywood set. The Hotel will have some 100 rooms, most of which will be Suites, and will also be home a large outdoor pool, spa and signature bar and dining from Chef Niko Romito. </p>
          </article>
        </div>
        <Services />
        <div className="reserve-botton">
          <Link to="/rooms" className="btn-primary">
          Reserve Now
          </Link>
            </div>
        
      </section>
    </>
  );
}
