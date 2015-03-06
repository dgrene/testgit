var redis = require('redis');
var client = redis.createClient();
/*creates a new client By default, redis.createClient() will use 127.0.0.1 and 6379 as the hostname and port respectively. 
 If you have a different host/port you can supply them as following:
 //var client = redis.createClient(port, host);*/

client.on('connect', function () {
    console.log('connected');
});

client.set('framework', 'AngularJS', function (err, reply) {
    console.log(reply);
});
client.get('framework', function (err, reply) {
    console.log(reply);
});
client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');

client.hgetall('frameworks', function (err, object) {
    console.log(object);
});
client.hmset('frameworks', {
    'javascript': 'AngularJS',
    'css': 'Bootstrap',
    'node': 'Express'
});