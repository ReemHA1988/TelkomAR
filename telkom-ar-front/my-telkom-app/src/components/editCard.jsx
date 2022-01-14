import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import cardService from "../services/cardService";
import { toast } from "react-toastify";

class EditCard extends Form {
  state = {
    form: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
  };

  schema = {
    _id: Joi.string(),
    bizName: Joi.string().min(2).max(255).required().label("Name"),
    bizDescription: Joi.string()
      .min(2)
      .max(1024)
      .required()
      .label("Description"),
    bizAddress: Joi.string().min(2).max(400).required().label("Address"),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/)
      .label("Phone"),
    bizImage: Joi.string().min(11).max(1024).label("Image").allow(""),
  };

  async doSubmit() {
    const { form } = this.state;
    await cardService.editCard(form);
    toast("Card is Updated");
    this.props.history.replace("/my-cards");
  }

  mapToViewModel({
    _id,
    bizName,
    bizDescription,
    bizAddress,
    bizPhone,
    bizImage,
  }) {
    return {
      _id,
      bizName,
      bizDescription,
      bizAddress,
      bizPhone,
      bizImage,
    };
  }

  async componentDidMount() {
    const cardId = this.props.match.params.id;
    const { data } = await cardService.getCard(cardId);
    this.setState({ form: this.mapToViewModel(data) });
  }

  handleCancel = () => {
    this.props.history.push("/my-cards");
  };

  render() {
    return (
      <div className="container">
        <PageHeader title="Edit a Card" />
        <div className="row">
          <div className="col-12">
            <p>Edit a Biz Card</p>
          </div>
        </div>
        <form
          onSubmit={this.handleSubmit}
          noValidate="novalidate"
          autoComplete="off"
        >
          {this.renderInput("bizName", "Name")}
          {this.renderInput("bizDescription", "Description")}
          {this.renderInput("bizAddress", "Address")}
          {this.renderInput("bizPhone", "Phone")}
          {this.renderInput("bizImage", "Image")}
          <div className="mt-2">{this.renderButton("Update Card")}</div>
          <button
            onClick={this.handleCancel}
            className="btn btn-secondary ml-2"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default EditCard;
