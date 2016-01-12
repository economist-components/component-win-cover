import React from 'react';
import Icon from '@economist/component-icon';


export default class WinCover extends React.Component {

  static get propTypes() {
    return {
      test: React.PropTypes.node,
      sceneTotal: React.PropTypes.number,
      defaultSceneIndex: React.PropTypes.number,
      prevNext: React.PropTypes.string,
      icon: React.PropTypes.object,
      onChangeIndex: React.PropTypes.func,
      entries: React.PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      sceneTotal: 30,
      defaultSceneIndex: 0,
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
    this.state = { sceneIndex: this.props.defaultSceneIndex };
    this.handlePrevNext = this.handlePrevNext.bind(this);
    this.handleIndexClicked = this.handleIndexClicked.bind(this);
  }

  componentDidMount() {
    const containerElement = document.getElementById('scrollcontainer'); //eslint-disable-line
    const Scroller = require('ftscroller'); //eslint-disable-line
    return new Scroller(containerElement, {
      scrollbars: false,
      scrollingX: true, //eslint-disable-line
      updateOnWindowResize: true,
    });
  }

  handlePrevNext(event) {
    if (!event && !event.currentTarget) {
      return;
    }

    const arrow = event.currentTarget.dataset.move;
    let index = this.state.sceneIndex;
    if (arrow === 'left') {
      if (index > 0) {
        index--;
      }
    } else if (index < (this.props.sceneTotal - 1)) {
      index++;
    }
    this.changeIndex(index);
  }

  handleIndexClicked(event) {
    if (!event && !event.currentTarget) {
      return;
    }
    const index = Number(event.currentTarget.dataset.itemId);
    this.changeIndex(index);
  }

  changeIndex(newIndex) {
    if (this.props.onChangeIndex) {
      this.props.onChangeIndex(newIndex, this.state.sceneIndex);
    }
    this.setState({ sceneIndex: newIndex });
  }

  render() {
    const sceneIndex = this.state.sceneIndex;
    const sceneTotal = this.props.sceneTotal;
    let leftClass = 'win-cover-scroller-previous';
    let rightClass = 'win-cover-scroller-next';
    if (sceneIndex === 0) {
      leftClass += ' win-cover-scroller-arrow-hidden';
    } else if (sceneIndex === (sceneTotal - 1)) {
      rightClass += ' win-cover-scroller-arrow-hidden';
    }

    let previousArrow = null;
    let nextArrow = null;
    let previous = null;
    let next = null;
    if (this.props.prevNext === 'arrows') {
      previousArrow = <Icon icon="left" background={this.props.icon.background} color={this.props.icon.color} />;
      nextArrow = <Icon icon="right" background={this.props.icon.background} color={this.props.icon.color} />;
    }

    previous = (
      <div className={leftClass}
        key="left"
        data-move="left"
        onClick={this.handlePrevNext}
      >
        {previousArrow}
        <span></span>
      </div>
    );

    next = (
      <div className={rightClass}
        key="right"
        data-move="right"
        onClick={this.handlePrevNext}
      >
        {nextArrow}
        <span></span>
      </div>
    );

    const index = [];
    const bodycopy = [];
    const images = [];
    if (sceneIndex === 0) {
      this.props.entries.map((entry, i) => {
        images.push(
          <img src={entry.image} key={`image-all-selected-${i}`} className="image--allselected" />
        );
      });
    } else {
      this.props.entries.map((entry, i) => {
        let imageClass = null;
        if (i === sceneIndex) {
          imageClass = 'image--selected';
        }
        images.push(
          <a href={entry.url} className={imageClass}>
          <img src={entry.image} className={imageClass}key={`single-image-${i}`}/>
          </a>
      );
      });
    }

    this.props.entries.map((entry, i) => {
      let indexClass = null;
      let bodyClass = null;
      if (i === sceneIndex) {
        indexClass = 'win-cover-scrollerIndex--selected';
        bodyClass = 'bodyCopy--selected';
      }

      index.push(
        <li
          key={`list-item-${i}`}
          data-item-id={i}
          onClick={this.handleIndexClicked}
        >
          <div className={indexClass}>{entry.tabtitle}</div>
        </li>
      );

      function bodyCopy() {
        return {
          __html: entry.bodycopy //eslint-disable-line
        };
      }

      /* eslint-disable react/no-danger */
      bodycopy.push(
        <div className={bodyClass} key={`bodycopy-${i}`}>
        <a href={entry.url}>
          <div dangerouslySetInnerHTML={bodyCopy()}></div>
          <span className="win-cover-byline">{entry.byline}</span>
          <div className="win-cover-readmore">
          Read more
            <Icon className="win-cover-readmore-arrow" icon="right"/>
          </div>
          </a>
        </div>
      );
      /* eslint-enable react/no-danger */
    });

    return (
      <div className="win-cover">
        <div className="win-cover--imagecontainer">
          {images}
        </div>
        <div className="win-cover-scroller">
          {previous}
          <div id="scrollcontainer">
            <ul className="win-cover-scroller--inner">
              {index}
            </ul>
          </div>
          {next}
        </div>
          <div className="win-cover--bodyCopy">
            {bodycopy}
          </div>
        </div>
    );
  }
}
