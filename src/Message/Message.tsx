import React from 'react'
import "./Message.scss"

type Props = {
  header: string;
  body: string;
}
const Message: React.FC<Props> = ({ header, body }) => {
  return (
    <div className='messageContainer'>
      <h3>{header}</h3>
      <p>{body}</p>
    </div>
  )
}
export default Message