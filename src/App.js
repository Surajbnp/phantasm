import "./App.css";
import Homepage from "./pages/Homepage";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);


function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
