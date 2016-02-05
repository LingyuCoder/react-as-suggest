import 'should';
import Suggest from '../src/index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
mocha.ui('bdd');
describe('test', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('Should render', () => {
    let cp = ReactDOM.render(<Suggest suggests={['aaa', 'bbb', 'ccc']}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    $(ReactDOM.findDOMNode(cp)).attr('class').should.be.eql('ra-suggest');
  });
  it('Should show suggest when focus', () => {
    let cp = ReactDOM.render(<Suggest suggests={['aaa', 'bbb', 'ccc']}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    $(ReactDOM.findDOMNode(cp)).hasClass('show').should.be.true();
  });
  it('Should not show suggests when disabled', () => {
    let cp = ReactDOM.render(<Suggest disabled suggests={['aaa', 'bbb', 'ccc']}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    $(ReactDOM.findDOMNode(cp)).hasClass('show').should.be.false();
  });
  it('Should not show suggests when readonly', () => {
    let cp = ReactDOM.render(<Suggest readOnly suggests={['aaa', 'bbb', 'ccc']}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    $(ReactDOM.findDOMNode(cp)).hasClass('show').should.be.false();
  });
  it('Should change value when suggest clicked', () => {
    let cp = ReactDOM.render(<Suggest suggests={['value1', 'value2', 'value3']}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    let suggestItems = TestUtils.scryRenderedDOMComponentsWithClass(cp, 'ra-suggest-item');
    TestUtils.Simulate.mouseDown(suggestItems[0]);
    $(input).val().should.be.eql('value1');
  });
  it('Should hide when suggest clicked', () => {
    let cp = ReactDOM.render(<Suggest suggests={['value1', 'value2', 'value3']}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    let suggestItems = TestUtils.scryRenderedDOMComponentsWithClass(cp, 'ra-suggest-item');
    TestUtils.Simulate.mouseDown(suggestItems[0]);
    $(ReactDOM.findDOMNode(cp)).hasClass('show').should.be.false();
  });
  it('Should auto filter suggest', () => {
    let cp = ReactDOM.render(<Suggest suggests={['abc', 'abd', 'fff']} value="ab"/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    let suggestItems = TestUtils.scryRenderedDOMComponentsWithClass(cp, 'ra-suggest-item');
    suggestItems.length.should.be.eql(2);
  });
  it('Should not auto filter suggest when useFilter is false', () => {
    let cp = ReactDOM.render(<Suggest suggests={['abc', 'abd', 'fff']} useFilter={false} value="ab"/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    let suggestItems = TestUtils.scryRenderedDOMComponentsWithClass(cp, 'ra-suggest-item');
    suggestItems.length.should.be.eql(3);
  });
  it('Should set width', () => {
    let cp = ReactDOM.render(<Suggest suggests={['abc', 'abd', 'fff']} width={200}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    $(input).outerWidth().should.be.eql(200);
  });
  it('Should set skin', () => {
    let cp = ReactDOM.render(<Suggest skin="success" suggests={['abc', 'abd', 'fff']} width={200}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    $(input).hasClass('success').should.be.true();
  });
  it('Should change value when input value changed', done => {
    let cb = value => {
      value.should.be.eql('abc');
      done();
    };
    let cp = ReactDOM.render(<Suggest onChange={cb} skin="success" suggests={['abc', 'abd', 'fff']} width={200}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    input.value = 'abc';
    TestUtils.Simulate.change(input);
  });
  it('Should handle blur when suggest clicked', done => {
    let cb = value => {
      value.should.be.eql('abc');
      done();
    };
    let cp = ReactDOM.render(<Suggest onBlur={cb} skin="success" suggests={['abc', 'abd', 'fff']} width={200}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    let suggestItems = TestUtils.scryRenderedDOMComponentsWithClass(cp, 'ra-suggest-item');
    TestUtils.Simulate.mouseDown(suggestItems[0]);
  });
  it('Should handle blur when document clicked', done => {
    let cb = value => {
      value.should.be.eql('aabbcc');
      done();
    };
    let cp = ReactDOM.render(<Suggest onBlur={cb} suggests={['abc', 'abd', 'fff']} useFilter={false} value="aabbcc"/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    cp._handleDocClick({});
  });
  it('Should use arrow down to select the suggest', () => {
    let cp = ReactDOM.render(<Suggest suggests={['abc', 'abd', 'fff']} useFilter={false} value="aabbcc"/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    TestUtils.Simulate.keyDown(input, {key: 'Down', keyCode: 40, which: 40});
    TestUtils.Simulate.keyDown(input, {key: 'Down', keyCode: 40, which: 40});
    TestUtils.Simulate.keyDown(input, {key: 'Enter', keyCode: 13, which: 13});
    input.value.should.be.eql('abd');
  });
  it('Should use arrow up to select the suggest', () => {
    let cp = ReactDOM.render(<Suggest suggests={['abc', 'abd', 'fff']}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    TestUtils.Simulate.keyDown(input, {key: 'Up', keyCode: 38, which: 38});
    TestUtils.Simulate.keyDown(input, {key: 'Up', keyCode: 38, which: 38});
    TestUtils.Simulate.keyDown(input, {key: 'Enter', keyCode: 13, which: 13});
    input.value.should.be.eql('abd');
  });
  it('Should use arrow and hover to select the suggest', () => {
    let cp = ReactDOM.render(<Suggest suggests={['abc', 'abd', 'fff']}/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Suggest);
    let input = TestUtils.findRenderedDOMComponentWithClass(cp, 'ra-input');
    TestUtils.Simulate.focus(input);
    let suggestItems = TestUtils.scryRenderedDOMComponentsWithClass(cp, 'ra-suggest-item');
    TestUtils.Simulate.mouseEnter(suggestItems[1]);
    TestUtils.Simulate.keyDown(input, {key: 'Down', keyCode: 40, which: 40});
    TestUtils.Simulate.keyDown(input, {key: 'Enter', keyCode: 13, which: 13});
    input.value.should.be.eql('fff');
  });
});
if (window.mochaPhantomJS) {
  window.mochaPhantomJS.run();
} else {
  mocha.run();
}
