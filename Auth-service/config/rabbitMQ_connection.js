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


const amqp = require('amqplib');

let timeout, connection
const { recieveMsg } = require("../worker/consumer");


async function connect_rabbit_mq() {
    try {
        connection = await amqp.connect(process.env.RABBIT_MQ_SERVER);

        connection.addListener("close", () => {
            console.log("Disconnected from RabbitMQ");
            if (timeout) clearTimeout(timeout);
            reconnect();
        });

        connection.addListener("error", (e) => {
            console.log("Error in RabbitMQ connection", e);
            if (timeout) clearTimeout(timeout);
            reconnect();
        });

        console.log("RabbitMQ is connected.");
        if (timeout) clearTimeout(timeout);

        global.rabbit_mq_connection = connection;
        recieveMsg();
        return connection;

    } catch (err) {
        console.error("Error establishing connection to RabbitMQ:", err.message);
        if (timeout) clearTimeout(timeout);
        reconnect();
    }
}

function reconnect() {
    timeout = setTimeout(async () => {
        console.log("Reconnecting to RabbitMQ...");
        const rabbit_mq_connection = await connect_rabbit_mq();
        global.rabbit_mq_connection = rabbit_mq_connection;
    }, 5000); // Wait for 5 seconds before attempting to reconnect
}

module.exports = {
    connect_rabbit_mq,
    reconnect,
};
