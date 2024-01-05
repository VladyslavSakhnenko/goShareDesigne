import { Component } from "react";
import EmptyFolder from "../../parts/empty-folder/empty-folder-modal.component";

interface Props {}
interface States {}

export default class Empty extends Component<Props, States> {
  render(): JSX.Element {
    return <EmptyFolder />;
  }
}
