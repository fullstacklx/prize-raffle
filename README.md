# Fullstack LX's Prize Raffle [![Build Status](https://travis-ci.org/fullstacklx/prize-raffle.svg?branch=master)](https://travis-ci.org/fullstacklx/prize-raffle)

## About

This is the web app that we use at every Fullstack LX event to raffle some prizes randomly from tweets with the #FullstackLX hashtag.

It was showcased at the first edition for the "Let's build a React + Redux application" live coding talk.

## TODO

This app is currently a work in progress. If you find a bug or have an improvement feel free to submit a Pull Request.


## Install

Just git clone the repo:

```
git clone https://github.com/fullstacklx/prize-raffle
```

Then inside the folder run:

```
npm install
```

## Run

### Dev server

To start the dev server locally with hot reloading (`http://localhost:8080`)

```
npm start
```

### Twitter Proxy

You also need to start the server that fetched the tweets:

```
npm run server
```

### Tests

```
npm test
```

If you wish to keep the tests running on changes:

```
npm test:watch
```

### Build

```
npm run build
```

## License

MIT (see LICENSE file)
