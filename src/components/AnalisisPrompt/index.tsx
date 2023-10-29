import './styles.scss'
import { useState } from 'react'

const AnalisisPrompt = () => {
  const [messages, setMessages] = useState([
    {
      text: `Olá, sou a Adila!
      Sou uma IA treinada para identificar e sugerir correções  em petições iniciais. Utilizo uma base de dados e contextos disponíveis na internet, o que me permite identificar padrões de linguagem racista. Meu objetivo é ajudar os advogados a elaborar petições iniciais mais justas e equitativas.
      Como posso te ajudar? Redija sua petição ou faça upload de arquivo PDF.`
    }
  ])

  return (
    <section className='analisis__section'>
        <div className="analisis__container">
          <div className="analisis__chat">

          </div>
        </div>
    </section>
  )
}

export default AnalisisPrompt