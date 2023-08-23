import React, { useState } from 'react'
type Props = {
  header: string;
  body: string;
  updateMessage: (header: string, body: string) => void;
}
const Form: React.FC<Props> = () => {

  const [localHeader, setLocalHeader] = useState("")
  const [localBody, setLocalBody] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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