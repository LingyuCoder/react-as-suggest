import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Input from 'react-as-input';
import ClassNames from 'classnames';
const noop = () => {};
class Suggest extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      value: props.value || props.defaultValue
    };
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSuggestClick = this._handleSuggestClick.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleDocClick = this._handleDocClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this._handleDocClick, false);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.value != null) this.setState({ value: newProps.value });
  }
  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocClick);
  }
  _handleInputChange(e) {
    let value = e.target.value;
    this.setState({ value });
    this.props.onChange(value);
  }
  _handleSuggestClick(e) {
    const index = parseInt(e.target.getAttribute('data-index'));
    const value = this.props.suggests[index];
    this.setState({ show: false, value });
    this._focus = false;
    this.props.onChange(value);
    this.props.onBlur(value);
  }
  _handleDocClick(e) {
    let dom = null;
    try {
      dom = ReactDOM.findDOMNode(this);
    } catch (e) {
      return 1;
    }
    if (e.target === dom.querySelector('.ra-input')) return 2;
    if (!this._focus) return 3;
    this._focus = false;
    this.setState({ show: false });
    this.props.onBlur(this.state.value);
    return 4;
  }
  _handleFocus() {
    if (this.props.disabled || this.props.readOnly) return;
    this._focus = true;
    this.setState({ show: true });
    this.props.onFocus(this.state.value);
  }
  _getSuggests() {
    return this.props.suggests.map((suggest, index) => {
      const shouldShow = this.props.useFilter ? suggest.indexOf(this.state.value) !== -1: true;
      const classes = ClassNames({
        'ra-suggest-item': true,
        selected: suggest === this.state.value
      });
      return shouldShow ? <li className={classes} data-index={index} key={`${suggest}-${index}`} onMouseDown={this._handleSuggestClick}>{suggest}</li> : null;
    }).filter(s => !!s);
  }
  render() {
    const suggests = this._getSuggests();
    let show = this.state.show && suggests.length > 0;
    const classes = ClassNames({
      [this.props.className]: true,
      show: show
    });
    return (
      <div className={classes} style={{width: this.props.width}}>
        <Input
            ref="input"
            {...this.props}
            className={this.props.inputClassName}
            onBlur={noop}
            onChange={this._handleInputChange}
            onFocus={this._handleFocus}
            placeholder={this.props.placeholder}
            type="text"
            value={this.state.value}
          />
        <ul className="ra-suggest-list" ref="suggest" style={{maxHeight: this.props.maxHeight}}>{suggests}</ul>
      </div>
    );
  }
}
Suggest.displayName = 'Suggest';
Suggest.defaultProps = {
  defaultValue: '',
  useFilter: true,
  name: null,
  skin: 'default',
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  className: 'ra-suggest',
  inputClassName: 'ra-input',
  width: 280,
  maxHeight: 160,
  suggests: [],
  placeholder: ''
};
Suggest.propTypes = {
  /**
   * class name of the suggest input
   */
  className: React.PropTypes.string,
  /**
   * default value of the suggest input
   */
  defaultValue: React.PropTypes.string,
  /**
   * whether the suggest input is disabled
   */
  disabled: React.PropTypes.bool,
  /**
   * class name of the input
   */
  inputClassName: React.PropTypes.string,
  /**
   * max height of the suggest panel
   */
  maxHeight: React.PropTypes.number,
  /**
   * name of the suggest input in the form
   */
  name: React.PropTypes.string,
  /**
   * callback when blur
   */
  onBlur: React.PropTypes.func,
  /**
   * callback when value change
   */
  onChange: React.PropTypes.func,
  /**
   * callback when focus
   */
  onFocus: React.PropTypes.func,
  /**
   * placeholder of the suggest input
   */
  placeholder: React.PropTypes.string,
  /**
   * wheher this suggest input is readonly
   */
  readOnly: React.PropTypes.bool,
  /**
   * skin of the suggest input
   */
  skin: React.PropTypes.oneOf(['success', 'error', 'default']),
  /**
   * suggset list
   */
  suggests: React.PropTypes.arrayOf(React.PropTypes.string),
  /**
   * whether suggest is auto filter by current value
   */
  useFilter: React.PropTypes.bool,
  /**
   * current value
   */
  value: React.PropTypes.string,
  /**
   * width of the suggest input
   */
  width: React.PropTypes.number
};
module.exports = Suggest;
