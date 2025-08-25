import Link from "next/link";
import Feature from "./components/feature-section/feature";

import "./style/home.css"; 
import features from "@/model/features.json";

export default function Home() {
  const featureComponents = features.map((feature, index) => (
    <Feature 
      key={index}
      featureName={feature.featureName}
      featureDesc={feature.featureDesc}
      featureImage={feature.featureImage}
    />
  ));

  return (
    <div className="home-page">
      <section className="teamwork-moto" aria-labelledby="Teamwork - Overview" title="Teamwork - Overview"> 
        <h1 className="section-title">Collaborate Smarter. <br /> Work Together Better.</h1>
        <p className="teamwork-description">All-in-one platform for team scheduling, file sharing, and organization.</p>
        <div className="teamwork-content">
          <div className="teamwork-buttons">
            <button>
              Try Teamworks
            </button>
            <Link href="/">Login</Link>
          </div>

          <div className="teamwork-images">
            <img src="/home/collaboration.png" alt="collaboration" loading="lazy" className="collaboration-image"/>
          </div>
        </div>
      </section>

      {featureComponents}
      
    </div>
  );
}
