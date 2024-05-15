import Fastify from 'fastify'

export const app = Fastify({ logger: true })

app.get('/', async (request, reply) => {
  return { hello: 'worsld' }
})

app.listen({
  port: Number(process.env.PORT) || 3000,
  host: '0.0.0.0'
}).then((address) => {
  console.log(`Server listening on ${address}`)
})
