import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { LANGUAGES, CommonUtils } from "../../../utils";
import { FormattedMessage } from "react-intl";
import "./ManageSpecialty.scss";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { createNewSpecialty } from "../../../services/userService";
import { toast } from "react-toastify";

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageSpecialty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageBase64: "",
      descriptionHtml: "",
      descriptionMarkdown: "",
    };
  }

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
      //   this.setState({});
    }
  }

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  handleEditorChange = ({ html, text }) => {
    this.setState({
      descriptionHtml: html,
      descriptionMarkdown: text,
    });
  };

  handleOnChangeImage = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      this.setState({
        imageBase64: base64,
      });
    }
  };

  handleSaveNewSpecialty = async () => {
    console.log(this.state);
    let res = await createNewSpecialty(this.state);
    if (res && res.errCode === 0) {
      toast.success("Create New Specialty Succeed!");
      this.setState({
        name: "",
        imageBase64: "",
        descriptionHtml: "",
        descriptionMarkdown: "",
      });
    } else {
      toast.error("Create New Specialty error!");
    }
  };

  render() {
    let { language } = this.props;
    return (
      <Fragment>
        <div className="manage-specialty-container">
          <div className="title">
            <FormattedMessage id="manage-specialty.title" />
          </div>
          <div className="add-new-specialty row">
            <div className="col-6 form-group left">
              <label>
                <FormattedMessage id="manage-specialty.name-specialty" />
              </label>
              <input
                className="form-control"
                type="text"
                value={this.state.name}
                onChange={(event) => this.handleOnChangeInput(event, "name")}
              />
            </div>
            <div className="col-5 form-group">
              <label>
                <FormattedMessage id="manage-specialty.image-specialty" />
              </label>
              <input
                className="form-control-file "
                type="file"
                onChange={(event) => this.handleOnChangeImage(event)}
              />
            </div>

            <div className="col-12">
              <MdEditor
                style={{ height: "500px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={this.handleEditorChange}
                value={this.state.descriptionMarkdown}
              />
            </div>
            <div className="col-12 mt-2">
              <button
                className="btn btn-primary btn-save-specialty"
                onClick={() => this.handleSaveNewSpecialty()}
              >
                <FormattedMessage id="manage-specialty.save-infor" />
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSpecialty);
