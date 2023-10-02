const express = require('express');
const ws = require('ws');

/** @type {Map<string, Set<ws>>} */
const topics = new Map();

/** @type {number} */
const PORT = process.env.PORT || 8787;

const server = express()
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new ws.Server({ server });

wss.on('connection', (socket) => {

  /** @type {Set<string>} */
  const subscribedTopics = new Set();

  socket.on('message', (data) => {
    const message = JSON.parse(data.toString());
    
    switch (message.type) {
      case 'subscribe':
        message.topics.forEach(topicName => {
          subscribedTopics.add(topicName);

          const subscribers = topics.get(topicName) || new Set();

          subscribers.add(socket);

          if (!topics.has(topicName)) {
            topics.set(topicName, subscribers);
          }
        });
        break;
      case 'publish':
        const subscribers = topics.get(message.topic) || new Set();
        message.clients = subscribers.size;
        subscribers.forEach(subscriber => {
          subscriber.send(JSON.stringify(message));
        });
        break;
      case 'unsubscribe':
        message.topics.forEach(topicName => {
          const subscribers = topics.get(topicName);
          if (subscribers) {
            subscribers.delete(socket);
          }
        });
        break;
      case 'ping':
        socket.send(JSON.stringify({ type: 'pong' }));
        break;
      default:
        break;
    }
  });

  socket.on('close', () => {
    subscribedTopics.forEach(topicName => {
      const subscribers = topics.get(topicName) || new Set();
      subscribers.delete(socket);
      if (subscribers.size === 0) {
        topics.delete(topicName);
      }
    });
    subscribedTopics.clear();
  });

});
