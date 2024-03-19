const uuid = require('uuid');

const exchangeName = process.env.RABBIT_PUB_EXCHANGE_NAME
const exchangeType = process.env.RABBIT_EXCHANGE_TYPE


exports.sendMsg = async (routing_key, signature, msg) => {

    const connection = await global.rabbit_mq_connection;
    const channel = await connection.createChannel();

    await channel.assertExchange(exchangeName, exchangeType, {durable: true});

    const properties = {
      type: signature
    };

    const publish_details = {
        uuid: uuid.v1(),
        fired_at: new Date(),
        user_details: msg
      };

    await channel.publish(
        exchangeName,  
        routing_key, 
        Buffer.from(JSON.stringify(publish_details)),
        properties,
        {persistant: true}
    );
    console.log(`This message is sent to exchange ${process.env.RABBIT_PUB_EXCHANGE_NAME}`);
    
}