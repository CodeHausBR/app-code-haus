import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Infra from "./pages/Infra";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/infra" element={<Infra />} />
        {/* outras rotas futuras */}
      </Routes>
    </BrowserRouter>
  );
}
