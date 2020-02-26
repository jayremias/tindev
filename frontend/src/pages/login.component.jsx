import React from 'react';
import api from '../services/api';

import './login.styles.scss';

import logo from '../assets/img/logo.svg';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    handleChange = (e) => {
        this.setState({username: e.target.value})
    }

    handleSubmit = async (e) => {
        const { history } = this.props;
        e.preventDefault();
        try {
            const response = await api.post('devs', {
                username: this.state.username
            });
            const { _id } = response.data;
            history.push(`/dev/${_id}`);
        } catch (error) {
            //TODO: handle error
            console.log(error);
        }
    }
    render = () => (
        <div className="login-container">
            <form onSubmit={this.handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    type="text"
                    placeholder="Digite seu usuário do Github"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <button type="submit">
                    Enviar
                </button>
            </form> 
        </div>
    );
}

export default Login;