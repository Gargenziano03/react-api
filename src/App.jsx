import { useState } from 'react'

import './App.css'

function App() {
  const [postsData, setPostsData] = useState({})

  function handleClick(e) {
    fetchData()
  }

  function fetchData(url = 'http://127.0.0.1:3000/posts') {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setPostsData(data)

      })
  }

  return (
    <>
      <h1>Blog</h1>
      <button type='button' onClick={handleClick}>fetch posts</button>
    </>
  )
}

export default App
