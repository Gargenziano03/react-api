import { useState } from 'react'

import './App.css'

function App() {
  const [postsData, setPostsData] = useState({})

  function handleClick(e) {
    fetchData()
  }

  return (
    <>
      <button type='button' onClick={handleClick}>fetch posts</button>
    </>
  )
}

export default App
