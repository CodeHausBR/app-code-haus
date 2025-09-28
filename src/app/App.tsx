import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import Infra from "./pages/Infra";
import AnimatedRoutes from "../lib/components/AnimatedRoutes";
import ScrollToTop from "../lib/components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes/>
    </BrowserRouter>
  );
}