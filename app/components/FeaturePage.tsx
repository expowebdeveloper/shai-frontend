import FeatureSectionFour from "./FeatureSectionFour";
import FeatureSectionFive from "./FeatureSectionFive";
import FeatureSectionOne from "./FeatureSectionOne";
import FeatureSectionSix from "./FeatureSectionSix";
import FeatureSectionThree from "./FeatureSectionThree";
import FeatureSectionTwo from "./FeatureSectionTwo";

export default function FeaturePage() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <main className="flex-1">
        <FeatureSectionOne />
        <FeatureSectionTwo />
        <FeatureSectionThree />
        <FeatureSectionFour />
        <FeatureSectionFive />
        <FeatureSectionSix />
      </main>
    </div>
  );
}
