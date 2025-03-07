import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";
import Test from "./pages/Test";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Product />} />
          <Route index path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
