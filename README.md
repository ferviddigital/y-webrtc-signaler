# WebSocket signaling server for [y-webrtc](https://github.com/yjs/y-webrtc)
A WebSocket signaling server for [y-webrtc](https://github.com/yjs/y-webrtc) peers.

## About
This WebSocket signaling server listens for messages sent by y-webrtc implementations responding to `subscribe`, `unsubscribe`, `publish`, and `ping` messages from peers.

## Getting Started
To get a local copy up and running follow these simple steps.

### Installation

1. Clone repository
```sh
git clone git@github.com:ferviddigital/y-webrtc-signaler.git
```

2. Install NPM packages
```sh
cd y-webrtc-signaler
npm install
```

## Usage
```sh
npm run dev
```

### Client code
```js
const provider = new WebrtcProvider('your-room-name', ydoc, {
  //...
  signaling: [
    'ws://localhost:8787'
  ]
});
```

## Deployment
You can deploy this code on:

### Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ferviddigital/y-webrtc-signaler)

### Render
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/ferviddigital/y-webrtc-signaler)

### Google Cloud
[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run?git_repo=https://github.com/ferviddigital/y-webrtc-signaler)

## Roadmap
- [ ] Make easily deployable to cloud services

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
y-webrtc-signaler is licensed under the [MIT License](./LICENSE).

Roy McKenzie - [roy@fervid.digital](mailto:roy@fervid.digital)