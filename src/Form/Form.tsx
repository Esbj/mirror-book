import React, { useState } from 'react'
import './Form.scss'

type Props = {
  updateMessage: (header: string, body: string) => void;
}
const Form: React.FC<Props> = ({ updateMessage }) => {


  //single source of truth, react / state ska äga inehållet, inte formuläret
  const [header, setHeader] = useState("")
  const [body, setBody] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMessage(header, body)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Rubrik..." type="text" name="header" id="header" onChange={(e) => setHeader(e.target.value)} />
      <textarea placeholder='Skriv något kul' name="body" id="body" onChange={(e) => setBody(e.target.value)} />
      <button type="submit">Spara</button>
    </form>
  )
}
export default Form