var React = require('react');
var PropTypes = require('prop-types');

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px',
  }
}

class Loading extends React.Component {
  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

module.exports = Loading;