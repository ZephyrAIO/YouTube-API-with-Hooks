import React, { useState, useEffect } from 'react'

import useVideos from '../hooks/useVideos'

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const App = () => {
  const [video, setVideo] = useState(null)
  const [videos, search] = useVideos("Lofi")

  console.log(process.env);

  useEffect(() => {
    setVideo(videos[0])
  }, [videos]);

  return (
    <div className='container'>
      <SearchBar onFormSubmit={search} />
      <div className='row'>
        <div className='col-9'>
          {video && <VideoDetail video={video} />}
        </div>
        <div className='col-3'>
          <VideoList videos={videos} onVideoSelect={(video) => setVideo(video)} />
        </div>

      </div>

    </div>
  )
}

export default App