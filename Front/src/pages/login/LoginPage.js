import './LoginPage.scss';
import { LoginService } from '../../services/login.service';
import { Redirect } from "react-router-dom";


class LoginPage extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            lastName: '',
            firstName: '',
            email: '',
            emailConfirmation: '',
            password: '',
            passwordConfirmation: '',
            phone: '',
            birthdate: '',
            gender: 'M',
            line1: '',
            building: '',
            namedPlace: '',
            postalCode: '',
            city: '',
            country: '',
            newAccount: undefined,
            error: '',
            roles: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

    }


    handleChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.init(this.state);
    }

    async init(data) {
        const response = await LoginService.getlogin(data);
        this.users = response.data;
        if (this.users['status'] == 400) {
            this.setState({ error: <div class="alert alert-danger" role="alert">Connexion impossible, mauvaise combinaison</div> });
        }
        else {
            this.setState(this.users);
            const user = this.state;
            localStorage.setItem('user', JSON.stringify(user));
            console.log('local : ' + localStorage.getItem('user'));
            const route = "/"
            this.setState({ redirect: route });
        }
    }

    async update(e) {
        e.preventDefault()
        await this.init(this.state);
        const response = await ReservationCoordonneesService.updateUserData(this.state);
        this.users = response.data;
        this.setState(this.users);
        const user = this.state;
        localStorage.setItem('user', JSON.stringify(user));
        const route = "/"
        this.setState({ redirect: route });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            return (
                <div>
                    <NavbarComponent />
                    <div>
                        <h1>VERIFIEZ VOS INFORMATIONS PERSONNELLES</h1>
                        <form className="container register-page__form" onSubmit={this.update}>
                            <div>
                                <label>
                                    Email *
                                </label>
                                <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>
                                    Civilité *
                                </label>
                                <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                                    <option value="M">Homme</option>
                                    <option value="F">Femme</option>
                                    <option value="A">Autres</option>
                                </select>
                            </div>
                            <div>
                                <label>
                                    Nom *
                                </label>
                                <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
                            </div>

                            <div>
                                <label>
                                    Prénom *
                                </label>
                                <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>
                                    N° et libellé de la voie *
                                </label>
                                <input name="line1" type="text" value={this.state.line1} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>
                                    Immeuble, Bâtiment, Résidence
                                </label>
                                <input name="building" type="text" value={this.state.building} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>
                                    Lieu-dit, boîte postale, etc
                                </label>
                                <input name="namedPlace" type="text" value={this.state.namedPlace} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>
                                    Code postal *
                                </label>
                                <input name="postalCode" type="number" value={this.state.postalCode} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>
                                    Ville *
                                </label>
                                <input name="city" type="text" value={this.state.city} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>
                                    Pays *
                                </label>
                                <input name="country" type="text" value={this.state.country} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>
                                    Téléphone *
                                </label>
                                <input name="phone" type="number" value={this.state.phone} onChange={this.handleChange} />
                            </div>

                            <div>
                                <label>
                                    Date de naissance *
                                </label>
                                <input name="birthdate" type="date" value={this.state.birthdate} onChange={this.handleChange} />
                            </div>
                            <a className="btn btn-secondary" onClick={() => this.handleClick(undefined)}>Annuler</a>
                            <button className="btn btn-primary" type="submit">Valider</button>
                        </form>
                    </div>
                    <FooterComponent></FooterComponent>

                </div>
            )
        }
        return (

            <div>
                <NavbarComponent />

                <div className="login-page">
                    <h1>Bonjour</h1>
                    <form className="container login-page__form" onSubmit={this.handleSubmit}>
                        {this.state.error}
                        <div>
                            <label>
                                Email :
                            </label>
                            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div>
                            <label>
                                Mot de passe :
                            </label>
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        </div>


                        <button className="btn btn-primary" type="submit">Se connecter</button>
                    </form>
                </div>

                <FooterComponent></FooterComponent>

            </div>

        );
    }
}

export default LoginPage;
