import { hello } from '../lib/greetingsUtil'

export function createHelloResponse (event, context, callback) {
  /** exit function immediately if invoked by serverless-warmup */
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUP - Lambda is warm!')
    return callback(null, 'Lambda is warm!')
  }

  // create a response object
  const response = {
    statusCode: 200,
    body: JSON.stringify(hello())
  }
  callback(null, response)
}