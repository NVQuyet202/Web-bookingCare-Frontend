import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import { FormattedMessage } from "react-intl";
import "./ManagePatient.scss";
import DatePicker from "../../../components/Input/DatePicker";

class ManagePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
      //   this.setState({});
    }
  }

  handleOnChangeDatePicker = (date) => {
    this.setState({
      currentDate: date[0],
    });
  };

  render() {
    let { language } = this.props;
    return (
      <Fragment>
        <div className="manage-patient-container">
          <div className="m-p-title title">Quản lý bệnh nhân khám bệnh</div>

          <div className="manage-patient-body row">
            <div className="col-4 form-group">
              <label>Chọn Ngày Khám:</label>
              <DatePicker
                onChange={this.handleOnChangeDatePicker}
                className="form-control"
                value={this.state.currentDate}
              />
            </div>

            <div className="col-12 table-manage-patient">
              <table id="TableManageUser">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <th>
                      <FormattedMessage id="manage-user.firstname" />
                    </th>
                    <th>
                      <FormattedMessage id="manage-user.lastname" />
                    </th>
                    <th>
                      <FormattedMessage id="manage-user.address" />
                    </th>
                    <th>
                      <FormattedMessage id="manage-user.action" />
                    </th>
                  </tr>

                  <tr>
                    <td>item.email</td>
                    <td>item.firstName</td>
                    <td>item.lastName</td>
                    <td>item.address</td>
                    <td>
                      <button
                        className="btn-edit"
                        //   onClick={() => this.handleEditUser(item)}
                      >
                        <i className="fas fa-edit fa-fw"></i>
                      </button>
                      <button
                        className="btn-delete"
                        //   onClick={() => this.handleDeleteUser(item)}
                      >
                        <i className="far fa-trash-alt fa-fw"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
