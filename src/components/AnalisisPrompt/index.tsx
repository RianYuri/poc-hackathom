import './style.scss'
import { useState } from 'react'
import sendMessageIcon from '../../assets/img/send-message-icon.png'
import uploadIcon from '../../assets/img/upload-icon.png'

const AnalisisPrompt = () => {
  const [messages, setMessages] = useState([
    {
      text: 'Olá, sou a Adila! \n Sou uma IA treinada para identificar e sugerir correções  em petições iniciais. Utilizo uma base de dados e contextos disponíveis na internet, o que me permite identificar padrões de linguagem racista. Meu objetivo é ajudar os advogados a elaborar petições iniciais mais justas e equitativas. Como posso te ajudar? Redija sua petição ou faça upload de arquivo PDF.'
    }
  ])

  const [inputValue, setInputValue] = useState('')

  const handleTextInput = (event: any) => {
    setInputValue(event.target.value)
  }

  const handleSubmitText = () => {
    if (inputValue) {
      setMessages([
        ...messages,
        {
          text: inputValue
        }
      ])
      setInputValue('')
    }
  }

  return (
    <section className='analisis__section'>
        <div className="analisis__container">
          <div className="analisis__chat">
            <div className="analisis__chat-messages">
              {messages.map((message, index) => (
                <div key={index} className="analisis__chat-message">
                  <span>{message.text}</span>
                </div>
              ))}
            </div>
            <div className="analisis__chat-input-area">
              <div className="analisis__chat-file-area">
              <img src={uploadIcon} alt="" />
              <input className='analisis__chat-file' type="file" name="" id="" />
              </div>
              <input className='analisis__chat-input' type="text" placeholder="Redija sua petição" value={inputValue} onChange={handleTextInput} />
              <button className='analisis__chat-btn' onClick={handleSubmitText}>
                <img src={sendMessageIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AnalisisPrompt