import { Component } from "react";
import { toast } from "react-toastify";
import cardService from "../services/cardService";

class DeleteCard extends Component {
  async componentDidMount() {
    await cardService.deleteCard(this.props.match.params.id);
    toast("Card was deleted");
    this.props.history.replace("/my-cards");
  }

  render() {
    return null;
  }
}

export default DeleteCard;
