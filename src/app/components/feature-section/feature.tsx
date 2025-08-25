import "./feature.css";
import FeatureProps from "@/types/feature";

export default function Feature({ featureName, featureDesc, featureImage } : FeatureProps) { 
  return (
    <div className="feature-section">
      <img className="feature-image" src={featureImage} alt="Create team feature"/>

      <div className="feature-text">
        <h2 className="feature-title">{featureName}</h2>
        <p className="feature-description">{featureDesc}</p>
      </div>
    </div>
  );
}