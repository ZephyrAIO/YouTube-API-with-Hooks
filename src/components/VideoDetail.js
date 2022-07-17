import React from 'react'

import "./VideoDetail.css"

class VideoDetail extends React.Component {
  
  render() {
    console.log("video", this.props.video);
    const { videoId } = this.props.video.id
    const { channelId, channelTitle, description, publishTime, thumbnails, title } = this.props.video.snippet

    return (
      <div>
        {this.props.video !== null &&
          <div>
            <div className='videoWrapper'>
              <iframe width="100%" src={`https://www.youtube.com/embed/${videoId}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div>
              <div className='m-3'>
                <h4>{title}</h4>
                <a href={`https://www.youtube.com/channel/${channelId}`} target="_blank">{channelTitle}</a>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default VideoDetail