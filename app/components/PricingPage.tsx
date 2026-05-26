import PricingSectionOne from "./PricingSectionOne";
import PricingSectionThree from "./PricingSectionThree";
import PricingSectionTwo from "./PricingSectionTwo";

export default function PricingPage() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <main className="flex-1">
        <PricingSectionOne />
        <PricingSectionTwo />
        <PricingSectionThree />
      </main>
    </div>
  );
}
