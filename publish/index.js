const redis = require('redis');

const client = redis.createClient(6379, '127.0.0.1');

client.on('error', function (err) {
  console.log('err' + err);
});

client.on('ready', function () {
  setInterval(() => {
    client.publish('testSecond', 'hi! second!');
    client.publish('message', 'hi! message!');
  },1000);
});
