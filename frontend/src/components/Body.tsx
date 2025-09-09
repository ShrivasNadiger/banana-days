import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function Body() {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center mt-6 mx-auto max-w-5xl gap-6 p-6 bg-yellow-200 rounded-2xl shadow-lg">
      <LeftPanel />
      <RightPanel />
    </main>
  );
}

export default Body;
