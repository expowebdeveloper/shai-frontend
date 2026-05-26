import SolutionSectionFour from "./SolutionSectionFour";
import SolutionSectionOne from "./SolutionSectionOne";
import SolutionSectionThree from "./SolutionSectionThree";
import SolutionSectionTwo from "./SolutionSectionTwo";

export default function SolutionPage() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <main className="flex-1">
        <SolutionSectionOne />
        <SolutionSectionTwo />
        <SolutionSectionThree />
        <SolutionSectionFour />
      </main>
    </div>
  );
}
