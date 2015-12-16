import WinCover from '../index.es6';
import React from 'react';

describe(`Cover`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      WinCover.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(
        <WinCover/>).should.equal(true);
    });
  });
});
