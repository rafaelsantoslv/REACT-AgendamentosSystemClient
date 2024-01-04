import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PainelAgendamento from "../pages/PainelAgendamento";
import Home from "../pages/Home";
import Header from "../components/Header";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/agendamentos" element={<PainelAgendamento />} />
                <Route path="/teste" exact element={<Header/>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
