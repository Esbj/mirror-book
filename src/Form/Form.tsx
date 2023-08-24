import React, { useState } from 'react'
import './Form.scss'

type Props = {
  updateMessage: (header: string, body: string) => void;
}
const Form: React.FC<Props> = ({ updateMessage }) => {

  const [header, setLocalHeader] = useState("")
  const [body, setLocalBody] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMessage(header, body)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Rubrik..." type="text" name="header" id="header" onChange={(e) => setLocalHeader(e.target.value)} />
      <textarea placeholder='Skriv något kul' name="body" id="body" onChange={(e) => setLocalBody(e.target.value)} />
      <button type="submit">Spara</button>
    </form>
  )
}
export default Form