/* 
A queue cannot be made without exchange. By default any queue is linked to direct exchange
exchanges
    direct : routing keys are used to publish the message in direct exchange
             Consumer uses the exchange name to consume the message  
    fanout : there are no routing keys in fanout exchange
             messages are published using the exchange name
             the same message gets placed in all the queues connected to fanout exchange
    header
    topic

*/ 


var amqp = require('amqplib/callback_api');