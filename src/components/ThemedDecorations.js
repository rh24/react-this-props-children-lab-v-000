import React from 'react';
import PropTypes from 'prop-types';

class ThemedDecorations extends React.Component {
  render() {
    return (
      <div className="themed-decorations">
        {this.props.children.map(child => <div className="heaven">{child}</div>)}
      </div>
    );
  }
}

export default ThemedDecorations;

//test
