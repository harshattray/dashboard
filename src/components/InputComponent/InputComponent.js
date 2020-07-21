/**
 * @Author: harsha
 * @Date:   2019-04-17T23:57:06+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T07:17:10+02:00
 */

import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { reduxForm, Field, reset } from "redux-form";
import { renderInputFields } from "../renderInputFieldComponent/renderInputFieldComponent";
import { dispatchLoginData } from "../../actions/loginFormActions";
import { validate } from "../../helpers/validate";
import { Link } from "react-router-dom";

/**
 * [InputComponent]
 * @extends Component
 */

class InputComponent extends Component {
  dispatchRepoRequest = data => {
    this.props.dispatchLoginData(data);
    console.log(data, "data");
  };

  render() {
    const { handleSubmit, invalid, submitting, selectedLoginForm } = this.props;
    return (
      <form
        name="repoSearchForm"
        onSubmit={handleSubmit(this.dispatchRepoRequest)}
        noValidate
        className="form-section"
      >
        <div className="username-field">
          <div className="login-label">Standort</div>
          <Field
            className="input-values"
            name="Username"
            component={renderInputFields}
            placeholder="Oldenburg"
            type="text"
            required
          />
        </div>
        <div className="username-field">
          <div className="login-label">Passwort</div>
          <Field
            className="input-values"
            name="password"
            component={renderInputFields}
            placeholder="Enter your Passwort"
            type="password"
            required
          />
        </div>
        <Link to="/list">
          <Button
            className="search-button"
            disabled={invalid}
            loading={submitting}
          >
            {selectedLoginForm == "tester" && <p>Tester Anmelden</p>}
            {selectedLoginForm == "worker" && <p>Worker Anmelden</p>}
          </Button>
        </Link>
      </form>
    );
  }
}

function mapStateToProps({ loginFormStack }) {
  return {
    selectedLoginForm: loginFormStack.selectedLoginForm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ dispatchLoginData }, dispatch);
}

const afterSubmitdata = (result, dispatch) => dispatch(reset("repoSearchForm"));

InputComponent = reduxForm({
  validate,
  form: "repoSearchForm",
  destroyOnUnmount: false,
  onSubmitSuccess: afterSubmitdata
})(InputComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent);
