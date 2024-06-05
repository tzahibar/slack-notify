const name = 'slack';
const axios = require('axios');

console.log(`Hello from ${name}!`);

const url = 'https://hooks.slack.com/services/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';
const data = {
    text: 'Hello, World!',
};

axios.post(url, data, {
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => {
        console.log('Message sent:', response.data);
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });

