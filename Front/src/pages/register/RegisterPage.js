import './RegisterPage.scss';
import { RegisterService } from '../../services/register.service';
import { BasePage } from '../_base-page';
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { FooterComponent } from "../../components/footer/FooterComponent";
import {Redirect} from "react-router-dom";

class RegisterPage extends BasePage {
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
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        await this.init(this.state);
    }

    async init(data) {
        const response = await RegisterService.postRegister(data);
        this.users = response.data;
        console.log(this.users);
        this.setState(this.users);
        const user = this.state;
        localStorage.setItem('user', JSON.stringify(user));
        const route = "/"
        this.setState({redirect: route});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (

            <div>

                <NavbarComponent />

                <div className="register-page">
                    <h1>Bonjour</h1>
                    <h1>Création de votre compte</h1>
                    <form className="container register-page__form" onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                Email *
                            </label>
                            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>
                                Confirmation e-mail *
                            </label>
                            <input name="emailConfirmation" type="text" value={this.state.emailConfirmation} onChange={this.handleChange} />
                            <label>
                                Votre mot de passe doit comprendre au moins 8 caractères, une lettre majuscule, une lettre minusculte et un chiffre (0-9)
                            </label>
                        </div>
                        <div>
                            <label>
                                Mot de passe *
                            </label>
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>
                                Confirmation mot de passe *
                            </label>
                            <input name="passwordConfirmation" type="password" value={this.state.passwordConfirmation} onChange={this.handleChange} />
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
                        <a className="btn btn-secondary" onClick={() => this.handleClick(false)}>Annuler</a>
                        <button className="btn btn-primary" type="submit">Valider</button>
                    </form>
                </div>
                <FooterComponent></FooterComponent>
            </div>

        );
    }
}

export default RegisterPage;