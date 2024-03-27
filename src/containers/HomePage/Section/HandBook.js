import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { FormattedMessage } from "react-intl";

class HandBook extends Component {
  render() {
    // let setting = {
    //       dots: false,
    //       infinite: true,
    //       speed: 500,
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //     };

    return (
      <div className="section-share section-handbook">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">
              <FormattedMessage id="home-page.HandBook" />
            </span>
            <button className="btn-section">
              <FormattedMessage id="home-page.more-info" />
            </button>
          </div>
          <div className="section-body">
            <Slider {...this.props.setting}>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Hệ thống Thu cúc 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Hệ thống Thu cúc 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Hệ thống Thu cúc 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Hệ thống Thu cúc 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Hệ thống Thu cúc 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Hệ thống Thu cúc 6</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Hệ thống Thu cúc</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
