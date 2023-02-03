import "./App.css";
import Pagination from "./component/Pagination";
import Page from "./component/Page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/page/:id" element={<Page />} />
      </Routes>
      <Pagination path="/page/:id" />
    </div>
  );
}

export default App;
