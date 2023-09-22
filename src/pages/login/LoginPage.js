import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useMutation, gql } from "@apollo/client";

import {
  AUTH_TOKEN,
  IMG_EIFFEL_DESKTOP,
  IMG_EIFFEL_MOBILE,
  IMG_EIFFEL_TABLET,
} from "../../constants";
import diorLogo from "../../icons/diorLogo.svg";

import "./loginPage.scss";
import { useDevice } from "../../hooks/useDevice";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default function LoginPage() {
  const device = useDevice();
  const imgUrl =
    device === "desktop"
      ? IMG_EIFFEL_DESKTOP
      : device === "tablet"
      ? IMG_EIFFEL_TABLET
      : IMG_EIFFEL_MOBILE;
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
      navigate("/home");
    },
    onError: () => console.log("Not logged in"),
  });

  return (
    <div className="container-flex-v login-page">
      <div className="logo-center slide-top">
        <img alt="logo-dior" src={diorLogo} />
      </div>
      <div className="title-multi slide-left">
        <span>BIENVENUE</span>
        <span>WELCOME</span>
        <span>いらっしゃいませ</span>
      </div>
      <div className="slide-bottom">
        <div
          className={classNames("container-flex-v", "input-text", {
            "error-field": Boolean(error),
          })}
        >
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
        <button onClick={login} className="btn-login">
          LOGIN
        </button>
      </div>
      <div className="bg-image slide-right">
        <img alt="eiffel" src={imgUrl} />
      </div>
    </div>
  );
}
