import { useState } from 'react'
import './App.scss'
import Form from './Form/Form'
import Message from './Message/Message'

function App() {
  const [header, setHeader] = useState("")
  const [body, setBody] = useState("")


  const uppdateMessage = (header: string, body: string) => {
    setHeader(header);
    setBody(body)
  }

  return (
    <div className='container'>
      <Form updateMessage={uppdateMessage} />
      <Message header={header} body={body} />
    </div>
  )
}

export default App
