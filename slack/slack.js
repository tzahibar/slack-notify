const { WebClient } = require('@slack/web-api');

// Slack OAuth token
const token = process.argv[2];
const web = new WebClient(token);

const service_name = process.argv[3];
const run_number = process.argv[4];
const branch_name = process.argv[5];


const message = `:white_check_mark: ${service_name} release summary:\nrun ${run_number} finished successfully on\n${branch_name}\n\n *Released Services:*\n${service_name}`;
console.log(message);

async function sendSlackNotification(channel, text) {
    try {
        const result = await web.chat.postMessage({
            channel: channel,
            text: text,
        });

        console.log(`Successfully sent message ${result.ts} in conversation ${channel}`);
    } catch (error) {
        console.error(`Error posting message: ${error}`);
    }
}

sendSlackNotification('#tzahi', message);
