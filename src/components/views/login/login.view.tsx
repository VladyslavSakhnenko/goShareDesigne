import React, { Component } from "react";
import Login from "../../parts/login/login.component";

interface Props {}
interface States {}

export default class LoginView extends Component<Props, States> {
  render(): JSX.Element {
    return <Login />;
  }
}
