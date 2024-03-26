const amqp = require('amqplib');
const { authProcessor } = require('../processor');
const {changeStatus, updateUser} = authProcessor

const exchangeName = process.env.RABBIT_SUB_EXCHANGE_NAME

const exchangeType = process.env.RABBIT_EXCHANGE_TYPE
const queueName = process.env.RABBIT_QUEUE_NAME

const processors = {
  [process.env.RABBIT_SUB_USER_DETAILS_SIGN]: changeStatus,
  [process.env.RABBIT_SUB_USER_DELETED_SIGN]: changeStatus,
  [process.env.RABBIT_SUB_USER_RESTORED_SIGN]: changeStatus,
  [process.env.RABBIT_SUB_USER_UPDATED_SIGN]: updateUser
};

exports.recieveMsg = async () => {
  try{

    const connection = await global.rabbit_mq_connection;
    const channel = await connection.createChannel();
    
    await channel.assertExchange(exchangeName, exchangeType);
    const q = await channel.assertQueue(queueName, {durable: true})
  
    await channel.bindQueue(q?.queue, exchangeName, '');
    
    console.log(`Waiting for messages in queue: ${q.queue}`);
    channel.consume(q?.queue, async (msg) => {
  
      console.log('\n\n================= NEW MESSAGE CONSUMING ====================');
      console.log('msg: ', 'headers: ', msg?.properties?.headers, 'type: ', msg?.properties?.type, '\n');
  
      const handle_processor = processors[msg?.properties?.type] || processors[msg?.properties?.headers?.type];
  
      if (handle_processor) {
        try {
          const data = JSON.parse(msg?.content?.toString());
          console.log("Consumer: data: ", data);
          await handle_processor(data);
          channel.ack(msg);
        } catch (error) {
          console.log("error", error.message);
          channel.nack(msg, false, false);
        }
      } else {
        console.log(`Messages ignore with id: ${msg?.properties?.messageId}`);
        channel.nack(msg, false, false);
      }
      
    })
  }catch(err){
    console.log(err)
  }
}

