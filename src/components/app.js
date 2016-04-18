import React, {
  Component
} from 'react';
import _ from 'lodash';
import Config from './../config/config';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './search-bar';
import VideoList from './video-list';
import VideoDetail from './video-detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YouTubeSearch({
      key: Config.youTube.key,
      term: term
    }, (videos) => { //Deve usilizado arrow function
      // ou pode usar this.setState({videos})
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // Adiciona um delay de 300ms para enviar parâmetro
    let videoSearch = _.debounce(this.videoSearch.bind(this), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
