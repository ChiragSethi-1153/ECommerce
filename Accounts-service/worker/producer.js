const uuid = require('uuid');
const exchangeName = process.env.RABBIT_EXCHANGE_NAME
const exchange = process.env.RABBIT_EXCHANGE


exports.sendMsg = async (routing_key, msg) => {
    const connection = await global.rabbit_mq_connection;
    const channel = await connection.createChannel();
    await channel.assertExchange(exchangeName, exchange, {durable: true});

    const publish_details = {
        uuid: uuid.v1(),
        fired_at: new Date(),
        user_details: msg
      };

    channel.publish(exchangeName,  
        routing_key, 
        Buffer.from(JSON.stringify(publish_details)),
        // {persistant: true}
    );
    console.log(`This message is sent to exchange ${process.env.RABBIT_EXCHANGE}`);
    
  }

  