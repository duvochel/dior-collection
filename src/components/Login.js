import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

import { AUTH_TOKEN, IMG_EIFFEL } from "../constants";
import diorLogo from "../icons/diorLogo.svg";

import "../styles/login.scss";
import classNames from "classnames";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      navigate("/");
    },
    onError: () => console.log('Not logged in')
  });

  return (
    <div className="container-flex-v login-page">
      <div className="logo-center">
        <img alt="logo-dior" src={diorLogo} />
      </div>
      <div className="title-multi">
        <span>BIENVENUE</span>
        <span>WELCOME</span>
        <span>いらっしゃいませ</span>
      </div>
      <div className={classNames('container-flex-v', 'input-text', { 'error-field' : Boolean(error) })}>
        {error && <p>{error.message}</p>}
        <div className="container-flex-v">
          <label htmlFor="email">LOGIN</label>
          <input
            name="email"
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value,
              })
            }
            type="text"
          />
        </div>
        <div className="container-flex-v">
          <label htmlFor="pwd">PASSWORD</label>
          <input
            name="pwd"
            value={formState.password}
            onChange={(e) =>
              setFormState({
                ...formState,
                password: e.target.value,
              })
            }
            type="password"
          />
        </div>
      </div>

      <div >
        <button onClick={login} className="btn-login">LOGIN</button>
      </div>
      <div className="bg-image">
        <img alt="eiffel" src={IMG_EIFFEL} />
      </div>
    </div>
  );
};

export default Login;
