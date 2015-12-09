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
      entries: React.PropTypes.array
    };
  }

  static get defaultProps() {
    return {
      sceneTotal: 5,
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
  constructor(props) {
    super(props);
    this.state = { sceneIndex: props.defaultSceneIndex };
  }

  componentDidMount() {
    require('ftscroller');

    var containerElement, containerElement2, scroller;
    containerElement = document.getElementById('scrollcontainer');

    const FTScroller = require('ftscroller');
    scroller = new FTScroller(containerElement, {
    scrollbars: false,
    scrollingX: true,
    updateOnWindowResize: true
  });
}


  // EVENT LISTENERS
  prevNext(arrow) {
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
  // page indexes:
  indexClicked(index) {
    this.changeIndex(index);
  }
  //
  changeIndex(newIndex) {
    if (this.props.onChangeIndex) {
      this.props.onChangeIndex(newIndex, this.state.sceneIndex);
    }
    this.setState({ sceneIndex: newIndex });
  }


  // RENDER
  render() {
    const sceneIndex = this.state.sceneIndex;
    const sceneTotal = this.props.sceneTotal;
    let leftClass = 'pager-previous';
    let rightClass = 'pager-next';
    if (sceneIndex === 0) {
      leftClass += ' pager-arrow-hidden';
    } else if (sceneIndex === (sceneTotal - 1)) {
      rightClass += ' pager-arrow-hidden';
    }
    let previousArrow;
    let nextArrow;
    let previous;
    let next;
    if (this.props.prevNext === 'arrows') {
      previousArrow = <Icon icon="left" background={this.props.icon.background} color={this.props.icon.color}/>;
      nextArrow = <Icon icon="right" background={this.props.icon.background} color={this.props.icon.color}/>;
    }
    previous = (
      <div className={leftClass} key="left" onClick = {this.prevNext.bind(this, 'left')}>
        {previousArrow}
        <span></span>
      </div>
    );
    next = (
      <div className={rightClass} key="right" onClick = {this.prevNext.bind(this, 'right')}>
        {nextArrow}
        <span></span>
      </div>
    );

    // Page index
    const index = [];
    const bodycopy = [];
    const desktopimages = [];
    this.props.entries.map((entry, i) => {
    let indexClass, bodyClass, desktopImageClass;
      if (i === sceneIndex) {
        indexClass = 'pagerIndex--selected';
        bodyClass = 'bodyCopy--selected';
        desktopImageClass = 'desktopImage--selected';
      }
      index.push(
        <li key={i} onClick={this.indexClicked.bind(this, i)}>
          <div className={indexClass}>{entry.tabtitle}</div>
        </li>
      );

      bodycopy.push(
          <div className={bodyClass} dangerouslySetInnerHTML={ { __html: entry.bodycopy } }></div>
      );
      desktopimages.push(
          <img src={entry.imagedesktop} className={desktopImageClass}/>
      );
    })

    // Glue it all together
    return (
      <div className="win-cover">
        <div className="win-cover--imagecontainer">
        {desktopimages}
        </div>
          <div className="pager">
            {previous}
              <div id="scrollcontainer">
                <ul className="pager--inner">
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
