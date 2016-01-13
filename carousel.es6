import React from 'react';
import { findDOMNode } from 'react-dom'; // eslint-disable-line id-match
import Icon from '@economist/component-icon';
export default class Carousel extends React.Component {

  constructor() {
    super(...arguments);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      targetIndex: 0,
    };
  }

  componentDidMount() {
    const Scroller = require('ftscroller'); // eslint-disable-line global-require
    const containerElement = findDOMNode(this.refs.scroller);
    this.scroller = new Scroller(containerElement, {
      scrollbars: false,
      scrollingX: true,
      updateOnWindowResize: true,
    });
  }

  handleClick(event) {
    if (event && event.target) {
      if (event.target.parentElement === findDOMNode(this.refs.nextArrow)) {
        this.setActiveTarget(Math.min(this.state.targetIndex + 1, this.props.children.length - 1));
      } else if (event.target.parentElement === findDOMNode(this.refs.previousArrow)) {
        this.setActiveTarget(Math.max(this.state.targetIndex - 1, 0));
      } else if (event.target.getAttribute('data-carousel-item') === 'true') {
        this.setActiveTarget(Array.from(event.target.parentElement.children).indexOf(event.target));
      }
    }
  }

  setActiveTarget(targetIndex) {
    this.setState({ targetIndex });
    const scrollerList = findDOMNode(this.refs.scrollerList);
    const targetElement = scrollerList.children[targetIndex];
    const carouselHalfWidth = findDOMNode(this).clientWidth / 2;
    const top = 0;
    const autoDuration = true;
    this.scroller.scrollTo(targetElement.offsetLeft - carouselHalfWidth, top, autoDuration);
    if (typeof this.props.onChangeActiveTarget === 'function') {
      this.props.onChangeActiveTarget(targetIndex);
    }
  }

  render() {
    let previousArrow = null;
    let nextArrow = null;
    if (this.props.prevNext === 'arrows') {
      previousArrow = (
        <div className="carousel--previous-arrow" ref="previousArrow">
          <Icon icon="left" background={this.props.icon.background} color={this.props.icon.color} />
        </div>
      );
      nextArrow = (
        <div className="carousel--next-arrow" ref="nextArrow">
          <Icon icon="right" background={this.props.icon.background} color={this.props.icon.color} />
        </div>
      );
    }

    return (
      <div className="carousel" onClick={this.handleClick}>
        {previousArrow}
        <div ref="scroller">
          <ul className="carousel--innerlist" ref="scrollerList">
            {this.props.children.map((child, key) => (
              <li
                className="carousel--element"
                key={key}
                data-carousel-active={key === this.state.targetIndex}
                data-carousel-item="true"
              >
                {child}
              </li>
            ))}
          </ul>
        </div>
        {nextArrow}
      </div>
    );
  }

}

if (process.env.NODE_ENV !== 'production') {
  Carousel.propTypes = {
    children: React.PropTypes.node,
    prevNext: React.PropTypes.string,
    onChangeActiveTarget: React.PropTypes.func,
    icon: React.PropTypes.shape(Icon.PropTypes),
  };
}
