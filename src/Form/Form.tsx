import React, { useState } from 'react'
import './Form.scss'

type Props = {
  updateMessage: (header: string, body: string) => void;
}
const Form: React.FC<Props> = ({ updateMessage }) => {


  //single source of truth, react / state ska äga inehållet, inte formuläret
  const [header, setHeader] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMessage(header, message)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Rubrik..." value={header} type="text" name="header" id="header" onChange={(e) => setHeader(e.target.value)} />
      <textarea placeholder='Skriv något kul' value={message} name="body" id="body" onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Spara</button>
    </form>
  )
}
export default Form