import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class HomeFooter extends Component {
  render() {
    return (
      <div className=" home-footer">
        <p>
          &copy; 2024 Web Booking Care.
          <a target="_bank" href="https://www.youtube.com/@bookingcare7575">
            More information, please visit my youtube channel. &#8594; Click
            here &#8592;
          </a>
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
