import React, {
  Component
} from 'react';
import VideoListItem from './video-list-item';

class VideoList extends Component {
  render() {
    return (
      <ul className="col-md-12 list-group">
        { this.getVideoItems() }
      </ul>
    );
  }

  getVideoItems() {
    return this.props.videos.map((video) => {
     return (
       <VideoListItem
         onVideoSelect={this.props.onVideoSelect}
         key={video.etag}
         video={video} />
     );
   });
  }
}

export default VideoList;
