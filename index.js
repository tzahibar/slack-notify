const core = require('@actions/core');
const fetch = require('node-fetch');

async function sendSlackMessage() {
    try {
        // Retrieve inputs from the workflow YAML file
        const webhookUrl = core.getInput('webhook-url');
        const message = core.getInput('message');

        // Construct the payload for the Slack message
        const payload = {
            text: message
        };

        // Define request options
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };

        // Send the message to Slack
        const response = await fetch(webhookUrl, options);
        const responseCode = response.status;
        console.log('Slack Response Code:', responseCode);
    } catch (error) {
        console.error('Error sending Slack message:', error);
        core.setFailed(error.message);
    }
}

// Call the function to send the Slack message
sendSlackMessage();
