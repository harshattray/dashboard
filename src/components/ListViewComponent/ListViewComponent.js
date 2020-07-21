/**
 * @Author: harsha
 * @Date:   2020-07-21T07:22:03+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T11:20:52+02:00
 */

import React, { Fragment, Component } from "react";
import ListViewStyles from "./ListViewStyles";
import { setEntityData } from "../../actions/listViewActions";
import { Grid, Segment, Icon } from "semantic-ui-react";
import { List, Avatar, Spin, Progress } from "antd";
import { listData } from "../../helpers/listDataHelper";
import { ProgressBar, Step } from "react-step-progress-bar";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "react-step-progress-bar/styles.css";

export class ListViewComponent extends Component {
  render() {
    const { setEntityData } = this.props;
    return (
      <Fragment>
        <ListViewStyles>
          <Grid stackable columns={1} className="list-view">
            <Grid.Column>
              <RenderedListComponent setEntityData={setEntityData} />
              <div className="load-more">
                <Icon name="plus circle" size="huge" color="purple"></Icon>
              </div>
            </Grid.Column>
          </Grid>
        </ListViewStyles>
      </Fragment>
    );
  }
}

const RenderedListComponent = props => {
  const { setEntityData } = props;
  const listStack = listData.map(data => {
    const detailStack = data.machinery.map(item => {
      return (
        <div>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={item.name}
              description={`SN:${item.serial_no} in ${item.location}`}
            />
            <ProgressBar
              percent={item.progress}
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
              <p>Vormontage</p>
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 40}%)` }}
                    width="30"
                    src="https://image.flaticon.com/icons/svg/1/1625.svg"
                  />
                )}
              </Step>
              <p className="status-text">Endmontage</p>
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 40}%)` }}
                    width="30"
                    src="https://image.flaticon.com/icons/svg/1/1625.svg"
                  />
                )}
              </Step>
              <p>Inbetriebnahme</p>
            </ProgressBar>
            <Link to="/list/details">
              <div className="goto-next" onClick={() => setEntityData(item)}>
                <Icon name="arrow circle right" size="big" />
              </div>
            </Link>
          </List.Item>
        </div>
      );
    });
    return (
      <Segment>
        <p>{data.type}</p>
        {detailStack}
      </Segment>
    );
  });
  return <Fragment>{listStack}</Fragment>;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setEntityData }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(ListViewComponent);
