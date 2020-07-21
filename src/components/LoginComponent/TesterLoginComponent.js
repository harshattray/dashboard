/**
 * @Author: harsha
 * @Date:   2020-07-20T12:30:04+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T04:58:25+02:00
 */
import React, { Fragment, Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import LoginFormStyles from "./LoginFormStyles";
import InputComponent from "../InputComponent/InputComponent";

export default class TesterLoginComponent extends Component {
	render() {
		return (
			<Fragment>
				<LoginFormStyles>
					<Grid stackable columns={2} className="list-view">
						<Grid.Column>
							<Segment>
								<div className="form-grid">
									<InputComponent />
								</div>
							</Segment>
						</Grid.Column>
					</Grid>
				</LoginFormStyles>
			</Fragment>
		);
	}
}
