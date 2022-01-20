import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import data from "./resources/data";

function App() {
  const [celebrants, setCelebrants] = useState(data);
  return (
    <div className="App">
      <Header title="Birthday Reminder" />
      <List list={celebrants} />
    </div>
  );
}

export default App;
