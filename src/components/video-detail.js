import React from 'react';

// Poderia criar uma classe tbm
// video é o mesmo que this.props.video
const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  var videoId = video.id.videoId;
  var url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-detail col-md-12">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
    </div>
  );
}

export default VideoDetail;
