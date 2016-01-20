import React from 'react';
import Icon from '@economist/component-icon';
import Carousel from './carousel';
import { findDOMNode } from 'react-dom'; // eslint-disable-line id-match

export default class WinCover extends React.Component {

  static get propTypes() {
    return {
      test: React.PropTypes.node,
      sceneTotal: React.PropTypes.number,
      startingTargetIndex: React.PropTypes.number,
      prevNext: React.PropTypes.string,
      icon: React.PropTypes.object,
      onChangeIndex: React.PropTypes.func,
      entries: React.PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      sceneTotal: 30,
      startingTargetIndex: 0,
      sceneTitle: null,
      icon: {
        color: '#fff',
        background: 'transparent',
      },
      prevNext: 'arrows',
    };
  }

  // Set default state:
  constructor() {
    super(...arguments);
    this.handleActiveTargetChange = this.handleActiveTargetChange.bind(this);
    this.state = { targetIndex: this.props.startingTargetIndex };
  }

  handleActiveTargetChange(targetIndex) {
    const topImage = findDOMNode(this.refs.svgObject).contentDocument.getElementById('top');
    topImage.style.clipPath = `url(#${this.props.entries[targetIndex].clipPath})`;
    this.setState({ targetIndex });
  }

  render() {
    const targetIndex = this.state.targetIndex;
    const currentEntry = this.props.entries[targetIndex];
    return (
      <div className="wincover">
      <a href={currentEntry.url}>
        <div className="wincover--object--container">
        <object className="wincover--object" ref="svgObject" data="/assets/cover.svg"
          type="image/svg+xml"
        >
        </object>
        </div>
      </a>

        <div className="wincover--scroller">
          <Carousel
            onChangeActiveTarget={this.handleActiveTargetChange}
            icon={this.props.icon}
            prevNext={this.props.prevNext}
            children={this.props.entries.map((entry) => entry.tabtitle)}
          />
        </div>
          <div className="wincover--body-copy">
            <a href={currentEntry.url}>
              <div
                dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
                  __html: currentEntry.bodycopy, // eslint-disable-line id-match
                }}
              ></div>
              <span className="wincover-byline">{currentEntry.byline}</span>
              <div className="wincover-readmore">
              <span>Read more</span>
              <Icon className="wincover-readmore-arrow" icon="right"/>
              </div>
            </a>
          </div>
        </div>
    );
  }
}
