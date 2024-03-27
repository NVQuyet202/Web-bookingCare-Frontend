import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import { FormattedMessage } from "react-intl";
import "./DetailSpecialty.scss";
import HomeHeader from "../../HomePage/HomeHeader";
import DoctorSchedule from "../Doctor/DoctorSchedule";

class DetailSpecialty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctorId: [1, 2, 4],
    };
  }

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
      //   this.setState({});
    }
  }

  render() {
    let { language } = this.props;
    let { arrDoctorId } = this.state;
    return (
      <Fragment>
        <div className="detail-specialty-container">
          <HomeHeader />
          Hello world
          <div className="description-specialty"></div>
          <div className="each-doctor">
            <div className="content-left"></div>
            <div className="content-right"></div>
          </div>
          {arrDoctorId &&
            arrDoctorId.length > 0 &&
            arrDoctorId.map((item, index) => {
              return (
                <div className="each-doctor">
                  <div className="content-left"></div>
                  <div className="content-right">
                    <DoctorSchedule doctorIdFromParent={item} key={index} />;
                  </div>
                </div>
              );
            })}
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
