import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PainelAgendamento from "../pages/PainelAgendamento";
import Header from "../components/Header";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/agendamentos" element={<PainelAgendamento />} />
                <Route path="/teste" element={<Header/>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
