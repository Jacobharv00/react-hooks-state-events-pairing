function Comment(props) {
  // console.log('Comments Component' , props.comment)
  return (
    <div>
      <h2>{props.comment.user}</h2>
      <p>{props.comment.comment}</p>
    </div>
  )
}

export default Comment