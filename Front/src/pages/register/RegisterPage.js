import './RegisterPage.css';
import { RegisterService } from '../../services/register.service';
import { BasePage } from '../_base-page';
import {Redirect} from "react-router-dom";

class RegisterPage extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            lastname: '',
            firstname: '',
            username: '',
            password: '',
            roles: 'User',
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
                <div className="register-page">
                    <h1>Bonjour</h1>
                    <h1>Création de votre compte</h1>
                    <form className="container register-page__form" onSubmit={this.handleSubmit}>

                        <div>
                            <label>
                                Nom *
                            </label>
                            <input name="lastName" type="text" value={this.state.lastname} onChange={this.handleChange} />
                        </div>

                        <div>
                            <label>
                                Prénom *
                            </label>
                            <input name="firstName" type="text" value={this.state.firstname} onChange={this.handleChange} />
                        </div>

                        <div>
                            <label>
                                Pseudo *
                            </label>
                            <input name="firstName" type="text" value={this.state.username} onChange={this.handleChange} />
                        </div>

                        <div>
                            <label>
                                Mot de passe *
                            </label>
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        </div>

                        <a className="btn btn-secondary" onClick={() => this.handleClick(false)}>Annuler</a>
                        <button className="btn btn-primary" type="submit">Valider</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default RegisterPage;