const name = 'slack';
const axios = require('axios');
const url = process.argv[2];
const message = process.argv[3];

console.log(`Hello from ${name}!`);
console.log(`message ${message}!`);

const data = {
    text: message,
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

