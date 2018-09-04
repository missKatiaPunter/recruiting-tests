import React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Radio, HelpBlock } from 'react-bootstrap';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h3 class="text-center text-primary">What type of idea do you have?</h3>
        <Grid>
          <form>
            <Row className="show-grid text-center">
              <Col xs={12} sm={4}>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    Innovation
                  </Radio>
                </FormGroup>
              </Col>
              <Col xs={12} sm={4}>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    Innovation response to campaign
                  </Radio>
                </FormGroup>
              </Col>
              <Col xs={12} sm={4}>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    Campaign
                  </Radio>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4}>
              </Col>
              <Col xs={12} sm={4}>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Idea title</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Idea title" />
                </FormGroup>
              </Col>
              <Col xs={12} sm={4}>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4}>
              </Col>
              <Col xs={12} sm={4}>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Your elevator pitch</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Your elevator pitch" />
                </FormGroup>
              </Col>
              <Col xs={12} sm={4}>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4}>
              </Col>
              <Col xs={12} sm={4}>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Your idea summary</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Your idea summary" />
                </FormGroup>
              </Col>
              <Col xs={12} sm={4}>
              </Col>
            </Row>
          </form>
        </Grid>
      </React.Fragment>
    );
  }
}
