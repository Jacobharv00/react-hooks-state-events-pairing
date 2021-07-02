import Comment from './Comment'
import { useState } from 'react'

function Video(props) {
  // console.log('Video Component', props.videoData)

  const [commentView, setCommentView] = useState(true)
  const [likes, setLikes] = useState(props.videoData.upvotes)
  const [dislikes, setDislikes] = useState(props.videoData.downvotes)

  function handleDislikes() {
    setDislikes(dislikes - 1)
  }

  function handleLikes() {
    setLikes(likes + 1)
  }

  function renderComments() {
    return props.videoData.comments.map(comment => (
      <Comment comment={comment} />
    ))
  }

  function toggleComments() {
    setCommentView(!commentView)
  }

return (
    <div>
      <iframe
        width="919"
        height="525"
        src={props.videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={props.videoData.title}
      />
      <h1>{props.videoData.title}</h1>
      <p>{props.videoData.views} Views | {props.videoData.createdAt}</p>

        <button onClick={handleLikes}> 
          <span> {likes} 👍 </span>
        </button>

        <button onClick={handleDislikes}>
          <span> {dislikes} 👎 </span>
        </button>

        <br/>
        <h1>2 Comments</h1>
        <button onClick={toggleComments}>{commentView ? 'Hide Comments' : 'Show Comments'}</button>
        {commentView ? renderComments() : null}
     </div> 
  )
}

export default Video

