import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from '../../constantes/routes';
import HomePage from '../home/HomePage';
import LoginPage from "../login/LoginPage";
import RegisterPage from "../register/RegisterPage";
import DetailArticlePage from "../article/DetailsArticlePage";

function App() {
    return (
        <Router>
            <Switch className="container">
                <Route path={Routes.DetailsArticle + '/:id'} component={DetailArticlePage} />
                <Route path={Routes.LoginPage} component={LoginPage} />
                <Route path={Routes.RegisterPage} component={RegisterPage} />

                {/* Last page */}
                <Route path={Routes.Home} component={HomePage} />
            </Switch>
        </Router>
    );
}

export default App;
