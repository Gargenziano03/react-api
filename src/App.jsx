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
      <section className='posts'>
        <div className="container">
          <div className="rov row-cols-1 row-cols-md-2 row-cols-lg-3 g-">
            {postsData.data ? postsData.data.map(post => (
              <div className="col" key={post.id}>
                <div className="card">
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </div>
              </div>
            )) :
              <p>no results yet</p>}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
