const Redis = require('ioredis');

// Create a publisher client
const publisher = new Redis();

publisher.on('connect', () => {
  console.log('Publisher connected to Redis');
});

publisher.on('error', (error) => {
  console.error('Publisher Redis error:', error);
});

// Publish a message to a channel
publisher.publish('my-channel', 'Hello, subscribers!', (err, result) => {
  if (err) {
    console.error('Publisher failed to publish message:', err);
  } else {
    console.log('Message published:', result);
  }
  
  // Close the publisher connection
  publisher.quit();
});


module.exports=publisher;