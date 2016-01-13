import React from 'react';
import Icon from '@economist/component-icon';
import Carousel from './carousel';

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
    this.setState({ targetIndex });
  }

  render() {
    const targetIndex = this.state.targetIndex;
    const currentEntry = this.props.entries[targetIndex];
    const images = this.props.entries.map((entry, i) => {
      let imageClass = 'wincover--image';
      if (targetIndex === 0) {
        imageClass = 'wincover--image--allselected';
      } else if (i === targetIndex) {
        imageClass = 'wincover--image--singleselected';
      }
      return (
        <a key={`image-${i}`} href={entry.url} className={imageClass}>
          <img src={entry.image}/>
        </a>
      );
    });
    return (
      <div className="wincover">
        <div className="wincover--imagecontainer">
          {images}
        </div>
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
