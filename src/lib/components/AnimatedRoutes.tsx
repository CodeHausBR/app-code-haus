import React from 'react'
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Home from "../../app/pages/Home";
import Infra from "../../app/pages/Infra";
import{ AnimatePresence} from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className='min-h-screen bg-[#1A1A26]'>
        <div className='relative'>
              <AnimatePresence mode='wait' initial={false}>
                  <Routes location={location} key={location.pathname}>
                      <Route path="/" element={<Home />} />
                      <Route path="/infra" element={<Infra />} />
                      {/* outras rotas futuras */}
                  </Routes>
              </AnimatePresence>
        </div>
    </div>
    
  )
}

export default AnimatedRoutes