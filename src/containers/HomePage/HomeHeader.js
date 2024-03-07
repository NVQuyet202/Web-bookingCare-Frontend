import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils/constant";
import { changeLanguageApp } from "../../store/actions/appActions";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };

  render() {
    let language = this.props.language;
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars fa-fw"></i>
              <div className="header-logo"></div>
            </div>

            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.speciality" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="home-header.search-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.health-facility" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="home-header.choose-clinic" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.doctor" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="home-header.select-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.fee" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="home-header.check-health" />
                </div>
              </div>
            </div>

            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle fa-fw"></i>
                <FormattedMessage id="home-header.support" />
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "flag language-vi active"
                    : "flag language-vi"
                }
              >
                <span
                  onClick={() => {
                    this.changeLanguage(LANGUAGES.VI);
                  }}
                >
                  VN
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "flag language-en active"
                    : "flag language-en"
                }
              >
                <span
                  onClick={() => {
                    this.changeLanguage(LANGUAGES.EN);
                  }}
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title-1">
              <FormattedMessage id="banner.title-1" />
            </div>
            <div className="title-2">
              <FormattedMessage id="banner.title-2" />
            </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i class="far fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child-1" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child-2" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-ambulance"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child-3" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-flask"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child-4" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-hand-holding-heart"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child-5" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-user-md"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
