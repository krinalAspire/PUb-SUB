const Redis = require('ioredis');

// Create a publisher client
const subscriber = new Redis();

subscriber.subscribe('my-channel', (err, count) => {
    if (err) {
      console.error('Subscriber failed to subscribe:', err);
    } else {
      console.log(`Subscriber subscribed to ${count} channel(s)`);
    }
  });
  
  // Handle received messages
  subscriber.on('message', (channel, message) => {
    console.log(`Received message from ${channel}: ${message}`);
    
    // Unsubscribe and close the subscriber connection
    subscriber.unsubscribe('my-channel');
    subscriber.quit();
  });

  module.exports=subscriber;