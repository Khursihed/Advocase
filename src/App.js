import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./LayoutComponent/Layout";
import Basicpage from "./BasicComponent/BasicPage";
import Basicpage2 from "./BasicComponent/BasicPage2";
import Basicpage3 from "./BasicComponent/BasicPage3";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Layout children={<Basicpage/>} />}  />
        <Route  path="/Page2" element={<Layout children={<Basicpage2/>} />}  />
        <Route  path="/Page3" element={<Layout children={<Basicpage3/>} />}  />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
