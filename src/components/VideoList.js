import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component {
  render() {
    const renderVideos = this.props.videos.map((video, index) => {
      return <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect} />
    })
    
    return (

      <div>
        {renderVideos}
      </div>

    )
  }
}

export default VideoList