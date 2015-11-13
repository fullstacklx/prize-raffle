const http = require('http')
const dispatcher = require('httpdispatcher')
const Twitter = require('twitter')
const Credentials = require('./twitter-auth.json')

const twitterClient = new Twitter({
  consumer_key: Credentials.TWITTER_CONSUMER_KEY,
  consumer_secret: Credentials.TWITTER_CONSUMER_SECRET,
  access_token_key: Credentials.TWITTER_ACCESS_TOKEN,
  access_token_secret: Credentials.TWITTER_ACCESS_TOKEN_SECRET
})

const handleRequest = function (request, response) {
  try {
    dispatcher.dispatch(request, response)
  } catch (err) {
    console.log(err)
  }
}

dispatcher.onGet('/tweets', function (req, res) {
  var headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }

  fetchTweets('#FullstackLX', function (err, data) {
    if (err) {
      res.writeHead(500, headers)
      res.end(JSON.stringify({ error: true, message: err.toString() }))
    } else {
      res.writeHead(200, headers)
      res.end(JSON.stringify(data))
    }
  })
})

const server = http.createServer(handleRequest)

const HTTP_PORT = 8888
server.listen(HTTP_PORT, function (data) {
  console.log('Server listening on %s', HTTP_PORT)
})

function fetchTweets (hashtag, cb) {
  twitterClient.get('search/tweets', { q: hashtag }, function (err, tweets) {
    if (err) { return cb(err) }
    return cb(null, tweets)
  })
}
