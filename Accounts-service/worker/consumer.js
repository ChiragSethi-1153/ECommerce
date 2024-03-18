const amqp = require('amqplib');

const exchangeName = process.env.RABBIT_EXCHANGE_NAME
const exchange = process.env.RABBIT_EXCHANGE


exports.recieveMsg = async (routing_key) => {

  const connection = await global.rabbit_mq_connection;

  const channel = await connection.createChannel();

  await channel.assertExchange(exchangeName, exchange, {durable: true});
  const q = await channel.assertQueue('', {exclusive: true})
  console.log(`Waiting for messages in queue: ${q.queue}`);
  channel.bindQueue(q.queue, exchangeName, routing_key);
  channel.consume(q.queue, msg => {
    if(msg.content) {
        console.log("The msg is: ", msg.content.toString())
    }
    
  }, {noAck: true})
}

