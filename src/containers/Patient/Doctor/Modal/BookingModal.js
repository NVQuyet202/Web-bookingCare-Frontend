import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./BookingModal.scss";
import { Modal } from "reactstrap";
import { FormattedMessage } from "react-intl";
import ProfileDoctor from "../ProfileDoctor";
import _ from "lodash";

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
      //   this.setState({});
    }
  }

  render() {
    let { isOpenModal, isCloseModal, dataTime } = this.props;
    let { language } = this.props;
    let doctorId = "";
    if (dataTime && !_.isEmpty(dataTime)) {
      doctorId = dataTime.doctorId;
    }
    return (
      <Fragment>
        <Modal
          isOpen={isOpenModal}
          className="booking-modal-container"
          size="lg"
          centered
        >
          <div className="booking-modal-content">
            <div className="booking-modal-header">
              <span className="left">Thông tin đặt lịch khám bệnh</span>
              <span className="right" onClick={isCloseModal}>
                <i class="fas fa-times fa-fw"></i>
              </span>
            </div>
            <div className="booking-modal-body">
              <div className="doctor-infor">
                <ProfileDoctor doctorId={doctorId} />
              </div>
              <div className="row">
                <div className="col-6 form group">
                  <label>Họ tên</label>
                  <input className="form-control" />
                </div>
                <div className="col-6 form group">
                  <label>Số điện thoại</label>
                  <input className="form-control" />
                </div>
                <div className="col-6 form group">
                  <label>Email</label>
                  <input className="form-control" />
                </div>
                <div className="col-6 form group">
                  <label>Địa chỉ</label>
                  <input className="form-control" />
                </div>
                <div className="col-12 form group">
                  <label>Lý do Khám</label>
                  <input className="form-control" />
                </div>
                <div className="col-6 form group">
                  <label>Đặt cho ai</label>
                  <input className="form-control" />
                </div>
                <div className="col-6 form group">
                  <label>Giới tính </label>
                  <input className="form-control" />
                </div>
              </div>
            </div>
            <div className="booking-modal-footer">
              <button className="btn-booking-confirm btn btn-primary">
                Xác nhận
              </button>
              <button
                className="btn-booking-cancel btn btn-primary"
                onClick={isCloseModal}
              >
                Hủy
              </button>
            </div>
          </div>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);