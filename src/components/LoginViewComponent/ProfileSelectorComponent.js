/**
 * @Author: harsha
 * @Date:   2020-07-21T06:13:32+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T06:32:04+02:00
 */
import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid, Segment, Icon } from "semantic-ui-react";
import { setLoginForm } from "../../actions/loginFormActions";
import { Link } from "react-router-dom";

export class ProfileSelectorComponent extends Component {
  render() {
    const { setLoginForm, selectedLoginForm } = this.props;
    return (
      <Fragment>
        <Grid stackable columns={2} className="list-view">
          <Grid.Column onClick={() => setLoginForm("tester")}>
            <Segment>
              <Icon name="find" size="massive" />
              Prüfer
            </Segment>
          </Grid.Column>
          <Grid.Column onClick={() => setLoginForm("worker")}>
            <Segment>
              <Icon name="suitcase" size="massive" />
              Werker
            </Segment>
          </Grid.Column>
        </Grid>
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
  null,
  mapDispatchToProps
)(ProfileSelectorComponent);
