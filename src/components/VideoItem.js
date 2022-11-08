import React from 'react'
import './VideoItem.css'

class VideoItem extends React.Component {
  render() {
    const video = this.props.video
    const { thumbnails, title } = video.snippet
    return (
      <div className='mb-4'>
        <div className='thumbnailWrapper'>
          <img src={thumbnails.high.url} alt={title} width="100%" onClick={(e) => this.props.onVideoSelect(video)} />
        </div>
        <h4 onClick={(e) => this.props.onVideoSelect(video)}>{title}</h4>
      </div>
    )
  }
}

export default VideoItem