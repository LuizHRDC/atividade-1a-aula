import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";



function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>      
    );
}


export default AppRoutes;