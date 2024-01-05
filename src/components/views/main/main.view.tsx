import React, { Component } from "react";
import Main from "../../parts/main/main.component";

interface Props {}
interface States {}

export default class MainView extends Component<Props, States> {
  render(): JSX.Element {
    return <Main />;
  }
}
