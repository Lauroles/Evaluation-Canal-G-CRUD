import './LoginPage.css';
import { LoginService } from '../../services/login.service';
import {Component} from "react";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
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
}

export default LoginPage;