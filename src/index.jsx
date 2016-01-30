import './index.less';
import React from 'react';
class Suggest extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>{this.props.content}</div>;
  }
}
Suggest.displayName = 'Suggest';
Suggest.propTypes = {
  /**
   * content of element
   */
  content: React.PropTypes.string
};
Suggest.defaultProps = {
    content: 'Hello world'
};
module.exports = Suggest;
