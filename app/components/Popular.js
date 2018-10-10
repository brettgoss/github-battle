var React = require('react');

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    })
  }

  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'PHP', 'CSS', 'Python'];

    return (
      <ul className='languages'>
        <p>Selected Language: {this.state.selectedLanguage}</p>
        {languages.map(function (lang) {
          return (
            <li
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

module.exports = Popular;