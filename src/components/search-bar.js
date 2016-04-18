import React, {
  Component
} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  render() {
    // Em onChange Set cada novo caracter em state.term
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange.bind(this)} />
      </div>
    );
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });

    this.props.onSearchTermChange(this.state.term);
  }
}

export default SearchBar;
