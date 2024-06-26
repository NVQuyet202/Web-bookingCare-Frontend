import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserRedux from "../containers/System/Admin/UserRedux";
import Header from "../containers/Header/Header";
import ManageDoctor from "../containers/System/Admin/ManageDoctor";
import ManageSpecialty from "../containers/System/Specialty/ManageSpecialty";
import ManageClinic from "../containers/System/Clinic/ManageClinic";
import ManageSchedule from "../containers/System/Doctor/ManageSchedule";

class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props;
    return (
      <Fragment>
        {isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/system/user-redux" component={UserRedux} />
              <Route path="/system/manage-doctor" component={ManageDoctor} />
              <Route
                path="/system/manage-schedule"
                component={ManageSchedule}
              />
              <Route
                path="/system/manage-speciality"
                component={ManageSpecialty}
              />
              <Route path="/system/manage-clinic" component={ManageClinic} />

              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
