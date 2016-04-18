import React from 'react';

// Poderia criar uma classe tbm
// video é o mesmo que this.props.video
const VideoListItem = ({video, onVideoSelect}) => {
  var imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
