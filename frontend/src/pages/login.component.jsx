import React from 'react';

import './login.styles.scss';
import logo from '../assets/img/logo.svg';

const Login = () => {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuário do Github"
                />
                <button type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Login;