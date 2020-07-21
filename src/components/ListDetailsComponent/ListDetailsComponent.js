/**
 * @Author: harsha
 * @Date:   2020-07-21T10:53:12+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T14:59:53+02:00
 */

import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ListDetailsStyles from "./ListDetailsStyles";
import { Grid, Segment, Icon, Button } from "semantic-ui-react";
import { List, Avatar, Spin, Progress, Empty } from "antd";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export class ListDetailsComponent extends Component {
  render() {
    const { selectedDetailsStack } = this.props;
    console.log(selectedDetailsStack, "selectedDetailsStack");
    return (
      <Fragment>
        {selectedDetailsStack.length == 0 && <Empty />}
        {selectedDetailsStack && selectedDetailsStack.length !== 0 && (
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
        )}
      </Fragment>
    );
  }
}

const RenderedListComponent = props => {
  const { item } = props;
  console.log(item, "item");
  return (
    <Segment>
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <List.Item.Meta
              avatar={<Avatar src={item.detailsStack.image} />}
              title={item.detailsStack.name}
            />
            <List.Item.Meta title="Start Date" description="12.02.20" />
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <List.Item.Meta title="KUNDE" description="Compost ltd." />
            </Segment>
            <Segment>
              <List.Item.Meta title="BA-FA" description="3225722" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <List.Item.Meta title="KOSTENTRÄGER" description="K-34235" />
            </Segment>
            <Segment>
              <List.Item.Meta
                title="SN"
                description={item.detailsStack.serial_no}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid.Column>
        <Segment>
          <ProgressBar
            percent={item.detailsStack.progress}
            filledBackground="linear-gradient(to right, #3262a8, #21d936, #f0bb31)"
          >
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  style={{ filter: `grayscale(${accomplished ? 0 : 40}%)` }}
                  width="30"
                  src="https://image.flaticon.com/icons/svg/1/1625.svg"
                />
              )}
            </Step>
            <div className="progress-step">Vormontage</div>
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  style={{ filter: `grayscale(${accomplished ? 0 : 40}%)` }}
                  width="30"
                  src="https://image.flaticon.com/icons/svg/1/1625.svg"
                />
              )}
            </Step>
            <div className="progress-step">Endmontage</div>
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  style={{ filter: `grayscale(${accomplished ? 0 : 40}%)` }}
                  width="30"
                  src="https://image.flaticon.com/icons/svg/1/1625.svg"
                />
              )}
            </Step>
            <div className="progress-step">Inbetriebnahme</div>
          </ProgressBar>
        </Segment>
      </Grid.Column>
    </Segment>
  );
};

function mapStateToProps({ detailsDataStack }) {
  return {
    selectedDetailsStack: detailsDataStack
  };
}

export default connect(mapStateToProps)(ListDetailsComponent);
