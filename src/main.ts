import { ChatOpenAI } from 'langchain/chat_models/openai'
import { ChatPromptTemplate } from 'langchain/prompts'

console.clear()
console.log('Running project')

const configuration = {
  openAIApiKey: process.env.OPEN_API_KEY,
  temperature: 0.5,
}

const chatModel = new ChatOpenAI(configuration)

const systemMessage =
  'Você é um {profissional} {nivel} muito conhecimento e {nivel1} confiança.'

const humanMessage =
  'Qual seria um bom nome de empresa que trabalha com {tecnologia}?'

const chatPromptTemplate = ChatPromptTemplate.fromMessages([
  ['system', systemMessage],
  ['human', humanMessage],
])

const formattedPrompt = await chatPromptTemplate.formatMessages({
  profissional: 'Engenheiro de software',
  nivel: 'com',
  nivel1: 'com',
  tecnologia: 'Next.Js',
})

const response = await chatModel.predictMessages(formattedPrompt)

console.log(response)
