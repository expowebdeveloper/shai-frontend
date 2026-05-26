import AboutUsSectionFour from "./AboutUsSectionFour";
import AboutUsSectionFive from "./AboutUsSectionFive";
import AboutUsSectionOne from "./AboutUsSectionOne";
import AboutUsSectionSix from "./AboutUsSectionSix";
import AboutUsSectionThree from "./AboutUsSectionThree";
import AboutUsSectionTwo from "./AboutUsSectionTwo";

export default function AboutUsPage() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <main className="flex-1">
        <AboutUsSectionOne />
        <AboutUsSectionTwo />
        <AboutUsSectionThree />
        <AboutUsSectionFour />
        <AboutUsSectionFive />
        <AboutUsSectionSix />
      </main>
    </div>
  );
}
