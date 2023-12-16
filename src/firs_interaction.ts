import { OpenAI } from 'langchain/llms/openai'

console.clear()
console.log('Running project')

const text = 'Me dê um nome de chácara'

const llm = new OpenAI({
  openAIApiKey: process.env.OPEN_API_KEY,
  temperature: 0.5,
})

const response = await llm.predict(text)

console.log(response)
