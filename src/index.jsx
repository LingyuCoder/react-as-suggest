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
      value: props.value || props.defaultValue,
      focus: -1
    };
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSuggestClick = this._handleSuggestClick.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleDocClick = this._handleDocClick.bind(this);
    this._handleItemMouseEnter = this._handleItemMouseEnter.bind(this);
    this._handleItemMouseLeave = this._handleItemMouseLeave.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
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
    this.setState({ value, show: true });
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
      return;
    }
    if (e.target === dom.querySelector('.ra-input')) return;
    if (!this._focus) return;
    this._focus = false;
    this.setState({ show: false });
    this.props.onBlur(this.state.value);
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
        selected: suggest === this.state.value,
        focus: this.state.focus === index
      });
      return shouldShow ? <li className={classes} data-index={index} key={`${suggest}-${index}`} onMouseDown={this._handleSuggestClick} onMouseEnter={this._handleItemMouseEnter} onMouseLeave={this._handleItemMouseLeave}>{suggest}</li> : null;
    }).filter(s => !!s);
  }
  _handleItemMouseEnter(e) {
    const focus = parseInt(e.target.getAttribute('data-index'));
    this.setState({ focus });
  }
  _handleItemMouseLeave() {
    this.setState({ focus: -1 });
  }
  _handleKeyPress(e) {
    let focus = this.state.focus;
    const suggests = this.props.suggests;
    if (e.which === 38 || e.which === 40) {
      e.preventDefault();
      if (focus === -1)
        focus = e.which === 38 ? suggests.length - 1 : 0;
      else
        focus = e.which === 38 ? (focus - 1 + suggests.length) % suggests.length : (focus + 1) % suggests.length;
      this.setState({ focus });
    } else if (e.which === 13 && focus !== -1) {
      this.setState({ show: false, value: suggests[focus], focus: -1 });
      this._focus = false;
      this.props.onChange(suggests[focus]);
      this.props.onBlur(suggests[focus]);
    }
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
            onKeyDown={this._handleKeyPress}
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
