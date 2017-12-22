import './index.css';

import _ from 'lodash';
import React, { Component } from 'react';
import {
  Accordion,
  Header,
  Image,
  Label,
  List,
  Loader,
  Transition
} from 'semantic-ui-react';

import groups from './groups';

const { latencyLabelColor, latencyDecimalPlaces } = global.config;

export default class InfoPanel extends Component {
  state = {};

  activeTestToHtml = test => {
    //console.log(test);
    const { activeTest, setActiveTest, clearActiveTest } = this.props;
    const color = latencyLabelColor || 'red';
    const size = 'big';
    const decimalAmt = latencyDecimalPlaces || 2;
    const isActive = test.id === activeTest.id;
    const thisGroup = _.find(groups, g => {
      return g.name === test.type;
    });
    const name = test.fullName || test.name;
    const location = test.address || `${test.city_state}, ${test.country}`;

    const ref = isActive ? 'active-infopanel-listitem' : '';

    const avg = test.averageLatency;

    const latency = avg ? (
      <Label circular color={color} size={size}>{`
      ${avg.toFixed(
        decimalAmt
      )}`}</Label>
    ) : (
      <Loader active inline />
    );

    return (
      <List.Item
        key={`infopanel-listitem-${test.id}`}
        className="test-listitem"
        onClick={() => {
          if (isActive) {
            clearActiveTest();
          } else {
            setActiveTest(test);
          }
        }}
        active={isActive}
        ref={ref}
      >
        <List.Content floated="right" className="speed">
          {latency}
        </List.Content>
        <List.Content floated="left" className="icon">
          <Image src={thisGroup.icon} size="mini" />
        </List.Content>
        <List.Content>
          <List.Header>{name}</List.Header>
          <List.Description>{location}</List.Description>
        </List.Content>
      </List.Item>
    );
  };

  scrollToElement = () => {};

  renderTestlist = tests => {
    const testsHtml = _.map(tests, this.activeTestToHtml);

    return (
      <List divided relaxed="very" selection>
        {testsHtml}
      </List>
    );
  };

  renderGroupPanels = groups => {
    return _.map(groups, this.groupToPanelHtml);
  };

  handleClick = (e, titleProps) => {
    const { openInfoPanel, activeInfoPanelIndex } = this.props;
    const { index } = titleProps;
    const newIndex = activeInfoPanelIndex === index ? -1 : index;

    openInfoPanel(newIndex);
  };

  groupToPanelHtml = (group, index) => {
    const { active, activeInfoPanelIndex } = this.props;

    const groupedTests = _.groupBy(active.tests, 'type');
    const animation = 'fade right';
    const duration = 750;

    const isActive = activeInfoPanelIndex === index;

    return (
      <div
        key={`infopanel-accordionpanel-${group.id}`}
        className="infopanel-group"
      >
        <Accordion.Title
          active={isActive}
          index={index}
          onClick={this.handleClick}
          className="group-title"
        >
          <Image src={group.logo} height={'100%'} className="group-logo" />
        </Accordion.Title>
        <Accordion.Content active={isActive}>
          <Transition
            animation={animation}
            duration={duration}
            visible={isActive}
          >
            {this.renderTestlist(groupedTests[group.name])}
          </Transition>
        </Accordion.Content>
      </div>
    );
  };

  renderTestGroups = groups => {
    return (
      <Accordion fluid styled>
        {this.renderGroupPanels(groups)}
      </Accordion>
    );
  };

  render() {
    const { height, width, visible } = this.props;
    const animation = 'fade right';
    const duration = 750;

    const contents = (
      <div
        className="infopanel"
        style={{ height: `${height}px`, width: `${width}px` }}
      >
        <div className="infopanel-header">
          <Header size="large">Average Latency</Header>
        </div>
        <div className="infopanel-groups">{this.renderTestGroups(groups)}</div>
      </div>
    );

    return (
      <Transition animation={animation} duration={duration} visible={visible}>
        <div className="infopanel-frame">{contents}</div>
      </Transition>
    );
  }
}
