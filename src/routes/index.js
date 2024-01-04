import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PainelAgendamento from "../pages/PainelAgendamento";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/agendamentos" element={<PainelAgendamento />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
