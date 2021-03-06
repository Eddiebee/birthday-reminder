import { useState } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";
import Header from "./components/Header";
import List from "./components/List";
import data from "./resources/data";

function App() {
  const [celebrants, setCelebrants] = useState(data);

  const handleClear = () => {
    setCelebrants([]);
  };
  return (
    <main>
      <section className="section">
        <Header
          title="Birthday Reminder"
          icon={<FaBirthdayCake />}
          numberOfReminders={celebrants.length}
        />
        <List list={celebrants} badge={<GiGlassCelebration />} />
        <button onClick={handleClear} className="btn-clear">
          Clear
        </button>
      </section>
    </main>
  );
}

export default App;
