const client = require('redis').createClient(6379, '127.0.0.1');
const ArrayList = [];
client.on('error', function (err) {
  console.log('err' + err);
});
client.subscribe('testSecond');
client.subscribe('message');
client.on('subscribe', function (channel, count) {
  console.log('subscribe channel:' + channel + ', count:' + count);
});
client.on('message', function (channel, message) {
  ArrayList.push({ channel, message });
});
client.on('unsubscribe', function (channel, count) {
  console.log('channel:' + channel + ', count:' + count);
});

setInterval(()=>{
    console.log(ArrayList,'ArrayList')
},2000)