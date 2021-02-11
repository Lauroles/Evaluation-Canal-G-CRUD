import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../home/HomePage';
import { Routes } from '../../constantes/routes';
import LoginPage from "../login/LoginPage";
import RegisterPage from "../register/RegisterPage";

function App() {
    return (
        <Router>
            <Switch className="container">
                <Route path={Routes.ExemplePage} component={ExemplePage} />
                <Route path={Routes.DetailConcert + '/:id'} component={DetailConcertPage} />
                <Route path={Routes.LoginPage} component={LoginPage} />
                <Route path={Routes.RegisterPage} component={RegisterPage} />

                {/* Last page */}
                <Route path={Routes.Home} component={HomePage} />
            </Switch>
        </Router>
    );
}

export default App;
