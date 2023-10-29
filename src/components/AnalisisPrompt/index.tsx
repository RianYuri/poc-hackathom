import './style.scss'
import { useState, useRef,useEffect } from 'react'
import sendMessageIcon from '../../assets/img/send-message-icon.png'
import uploadIcon from '../../assets/img/upload-icon.png'

const AnalisisPrompt = () => {
  const chatRef = useRef<HTMLDivElement>(null)

  const [messages, setMessages] = useState([
    {
      text: 'Olá, sou a Adila! \n Sou uma IA treinada para identificar e sugerir correções  em petições iniciais. Utilizo uma base de dados e contextos disponíveis na internet, o que me permite identificar padrões de linguagem racista. Meu objetivo é ajudar os advogados a elaborar petições iniciais mais justas e equitativas.\n Como posso te ajudar? Redija sua petição ou faça upload de arquivo PDF.'
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

  const handleSubmitFile = () => {
      setMessages([
        ...messages,
        {
          text: `
          Laura Santos
          Rua das Flores, 123
Cidade Imaginária
Telefone: (123) 456-7890
Email: laura.santos@emailficticio.com

20 de março de 2023

Tribunal de Justiça de Cidade Imaginária
Avenida da Justiça, 789
Cidade Imaginária, Estado Imaginário, CEP: 12345-678

RE: PETIÇÃO PRELIMINAR

AO EXCELENTÍSSIMO JUÍZO DA TRIBUNAL DE JUSTIÇA DA CIDADE IMAGINÁRIA

Eu, Laura Santos, brasileira, solteira, engenheira de software, portadora do CPF nº 123.456.789-00 e do RG nº 12.345.678-9 residente na Rua das Flores, 123, Cidade Imaginária, venho, respeitosamente, perante Vossa Excelência, por meio desta petição preliminar, apresentar o seguinte:

1. DOS FATOS

No dia 20 de março de 2023, o Sr. João da Silva proferiu declarações difamatórias a meu respeito, afirmando publicamente que eu estava envolvida em atividades ilegais relacionadas ao meu trabalho como engenheira de software na empresa TechSol S.A. Essas alegações infundadas foram feitas em um evento empresarial e foram amplamente disseminadas nas redes sociais e em fóruns online, prejudicando minha reputação profissional e <strong> denegrindo a minha imagem </strong>.
2. DO DIREITO

De acordo com a legislação trabalhista vigente, o assédio moral e a discriminação no ambiente de trabalho são proibidos e sujeitos a penalidades. Cito como fundamentação legal os artigos imaginários e a jurisprudência que reconhece a gravidade dessas questões.

3. DO PEDIDO

Diante do exposto, venho requerer a este respeitável Tribunal que:

a) Seja concedida uma liminar para a suspensão das práticas de assédio e discriminação no ambiente de trabalho, a fim de garantir minha integridade física e mental;

b) Seja designada uma audiência para que as partes envolvidas possam apresentar suas versões dos fatos;

c) Seja proferida uma decisão que condene a empresa TechSol S.A. por assédio moral e discriminação, e que estabeleça as medidas cabíveis para a reparação dos danos causados.

4. DOS DOCUMENTOS ANEXOS

Anexo 1: Contrato de Trabalho
Anexo 2: Comprovantes das situações de assédio e discriminação (e-mails, registros, testemunhos, etc.)

5. DOS REQUERIMENTOS FINAIS

Diante do exposto, peço deferimento deste pedido para que se faça justiça e que sejam coibidas as práticas abusivas no ambiente de trabalho.

Laura Santos
[ASSINATURA]
          `
        },
        {
          text: '"Denegrindo a minha imagem" pode ser considerada uma frase racista. Que tal trocar por "manchando a minha imagem"?'
        }
      ])
      setInputValue('')
      setTimeout(() => {
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight
        }
      }, 0)
    }
    const handleModal = () => {
      console.log('teste');
    };
    const addClickEvents = () => {
      const clickableElements = document.querySelectorAll('.clickable');
  
      clickableElements.forEach((element) => {
        element.addEventListener('click', handleModal);
      });
    };
    useEffect(() => {
      addClickEvents();
    }, [])
  return (
    <>
    <section className='analisis__section'>
        <div className="analisis__container">
          <div className="analisis__chat">
            <div className="analisis__chat-messages" ref={chatRef}>
            {messages.map((message, index) => (
              <div key={index} className="analisis__chat-message">
                <span className='analisis__animation'
                  dangerouslySetInnerHTML={{
                    __html: message.text.replace(/<strong>(.*?)<\/strong>/g, '<span style="background-color: red;" class="clickable">$1</span>')
                  }}
                />
              </div>
            ))}
            </div>
            <div className="analisis__chat-input-area">
              <div className="analisis__chat-file-area">
              <img src={uploadIcon} alt="" />
              <input className='analisis__chat-file' type="file" onChange={() => handleSubmitFile()}/>
              </div>
              <input className='analisis__chat-input' type="text" placeholder="Redija sua petição" value={inputValue} onChange={handleTextInput} />
              <button className='analisis__chat-btn' onClick={handleSubmitText}>
                <img src={sendMessageIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default AnalisisPrompt