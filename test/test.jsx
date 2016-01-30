import 'should';
import Suggest from '../src/index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
mocha.ui('bdd');
describe('test', function() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('Hello', function() {
    let cp = ReactDOM.render(<Suggest/>, container);
    return ReactDOM.findDOMNode(cp).innerText.should.be.eql('Hello world');
  });
  it('Element', function() {
    let cp = <Suggest/>;
    TestUtils.isElement(cp).should.be.true();
  });
});
if (window.mochaPhantomJS) {
  window.mochaPhantomJS.run();
} else {
  mocha.run();
}
