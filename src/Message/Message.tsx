import React from 'react'
type Props = {
  header: string;
  body: string;
}
const Message: React.FC<Props> = ({ header, body }) => {
  return (
    <div>
      <h3>{header}</h3>
      <p>{body}</p>
    </div>
  )
}
export default Message