import Fastify from 'fastify'


export const app = Fastify({ logger: true })

app.get('/', async (request, reply) => {
  return { hello: 'world' }
})

app.listen({
  port: 3000,
}).then((address) => {
  console.log(`Server listening on ${address}`)
})
