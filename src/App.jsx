import { useState } from 'react'
import Blogs from './component/Blogs/blogs'
import Bookmark from './component/Bookmark/Bookmark'
import Header from './component/header/header'

function App() {

const [bookmarks,setBookmarks] = useState([]);
const [readTime ,setReadTime] = useState(0);

const addToBookmark = prams =>{
  const newBookmarks = [...bookmarks,prams]
  setBookmarks(newBookmarks)
}



const addReadTime = (time , id) =>{
  console.log(readTime)
  setReadTime(readTime+time)

  const reaminingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)

  setBookmarks(reaminingBookmark)
  

}

  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <main className='md:flex gap-5' >
        
        <Blogs 
        addToBookmark={addToBookmark}
        addReadTime ={addReadTime}
        ></Blogs>

        <Bookmark 
          bookmarks={bookmarks}
          readTime ={readTime}
        ></Bookmark>

      </main>
    </div>
  )
}



export default App
