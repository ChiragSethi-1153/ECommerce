const amqp = require('amqplib');

const exchangeName = process.env.RABBIT_SUB_EXCHANGE_NAME

const exchange = process.env.RABBIT_EXCHANGE

const user_data =  process.env.RABBIT_SUBSCRIBE_USER_DATA 
const user_updated =  process.env.RABBIT_SUBSCRIBE_USER_UPDATED
const user_deleted =  process.env.RABBIT_SUBSCRIBE_USER_DELETED 
const user_restored = process.env.RABBIT_SUBSCRIBE_USER_RESTORED 

exports.recieveMsg = async () => {

  const connection = await global.rabbit_mq_connection;

  const channel = await connection.createChannel();

  await channel.assertExchange(exchangeName, exchange, {durable: true});
  const q = await channel.assertQueue('', {exclusive: true})
  console.log(`Waiting for messages in queue: ${q.queue}`);
  channel.bindQueue(q.queue, exchangeName, user_data);
  channel.bindQueue(q.queue, exchangeName, user_updated);
  channel.bindQueue(q.queue, exchangeName, user_deleted);
  channel.bindQueue(q.queue, exchangeName, user_restored);
  channel.consume(q.queue, msg => {
    if(msg.content) {
        console.log("The msg is: ", msg.content.toString())
    }
  }, {noAck: true})
}

