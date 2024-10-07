import './App.css';

import NavBar from "./frontEnd/Components/NavBar";
import StockDisplay from "./frontEnd/Components/StockDisplay";

function App() {
  return (
    <div className={"full-page"}>
        <NavBar />
        <StockDisplay />
    </div>
  );
}

export default App;
