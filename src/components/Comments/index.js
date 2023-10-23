import {useState} from 'react'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [comment, setComment] = useState({name: '', commentText: ''})

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeCommentText = event => {
    setCommentText(event.target.value)
  }

  const onAddComment = event => {
    event.preventDefault()
    setComment({name, commentText})
    setName('')
    setCommentText('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentItem commentDetails={comment} />
    </CommentsContainer>
  )
}

export default Comments
