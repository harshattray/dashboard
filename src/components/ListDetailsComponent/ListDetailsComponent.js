/**
 * @Author: harsha
 * @Date:   2020-07-21T10:53:12+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T12:13:16+02:00
 */

import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ListDetailsStyles from "./ListDetailsStyles";
import { Grid, Segment, Icon, Button } from "semantic-ui-react";
import { List, Avatar, Spin, Progress } from "antd";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export class ListDetailsComponent extends Component {
  render() {
    const { selectedDetailsStack } = this.props;
    return (
      <Fragment>
        <ListDetailsStyles>
          <Grid stackable columns={1} className="list-view">
            <Grid.Column>
              <RenderedListComponent item={selectedDetailsStack} />
              <Segment>
                <List.Item>
                  <List.Item.Meta title="Maschinenzubehör" />
                  <p>öffnen</p>
                </List.Item>
              </Segment>
              <div className="load-more">
                <Button className="details-button">Zuruck</Button>
              </div>
            </Grid.Column>
          </Grid>
        </ListDetailsStyles>
      </Fragment>
    );
  }
}

const RenderedListComponent = props => {
  const { item } = props;
  return (
    <Segment>
      <List.Item>
        <List.Item.Meta
          title={[<p>KONSTENTRAGER</p>, <p>KONSTENTRAGERKONSTENTRAGER</p>]}
          description={["K-24345", "K-24345"]}
        />
        <List.Item.Meta title="KONSTENTRAGER" description="K-24345" />
        <List.Item.Meta title="KONSTENTRAGER" description="K-24345" />
        <List.Item.Meta title="KONSTENTRAGER" description="K-24345" />
      </List.Item>
    </Segment>
  );
};

function mapStateToProps({ detailsDataStack }) {
  return {
    selectedDetailsStack: detailsDataStack
  };
}

export default connect(mapStateToProps)(ListDetailsComponent);
