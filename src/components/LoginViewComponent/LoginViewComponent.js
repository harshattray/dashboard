/**
 * @Author: harsha
 * @Date:   2020-07-20T10:19:29+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T06:41:56+02:00
 */
import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid, Segment, Icon } from "semantic-ui-react";
import LoginViewStyles from "./LoginViewSyles";
import TesterLoginComponent from "../LoginComponent/TesterLoginComponent";
import WorkerLoginComponent from "../LoginComponent/WorkerLoginComponent";
import ProfileSelectorComponent from "./ProfileSelectorComponent";
import { setLoginForm } from "../../actions/loginFormActions";

export class LoginViewComponent extends Component {
  componentDidMount() {
    const { setLoginForm, selectedLoginForm } = this.props;
    setLoginForm(selectedLoginForm);
  }

  render() {
    const { selectedLoginForm } = this.props;
    return (
      <Fragment>
        <LoginViewStyles>
          <ProfileSelectorComponent></ProfileSelectorComponent>
          {selectedLoginForm === "tester" && (
            <TesterLoginComponent></TesterLoginComponent>
          )}
          {selectedLoginForm === "worker" && (
            <WorkerLoginComponent></WorkerLoginComponent>
          )}
        </LoginViewStyles>
      </Fragment>
    );
  }
}

function mapStateToProps({ loginFormStack }) {
  return {
    selectedLoginForm: loginFormStack.selectedLoginForm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setLoginForm }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginViewComponent);
