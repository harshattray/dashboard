import React, { Fragment, Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import LoginFormStyles from "./LoginFormStyles";
import InputComponent from "../InputComponent/InputComponent";

export default class WorkerLoginComponent extends Component {
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
