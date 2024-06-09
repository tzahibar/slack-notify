const { WebClient } = require('@slack/web-api');// Your Slack OAuth token
const token = process.argv[3];
const web = new WebClient(token);

const workflow_name = process.argv[4];
const run_number = process.argv[5];
const branch_name = process.argv[6];

console.log(`${workflow_name} run number: ${run_number} finished on branch ${branch_name}`);

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

sendSlackNotification('#tzahi', 'Hello, Slack!');
