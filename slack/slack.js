const name = 'slack';
const axios = require('axios');
const url = process.argv[2];
const workflow_name = process.argv[3];
const run_number = process.argv[4];
const branch_name = process.argv[5];

console.log(`${workflow_name} run number: ${run_number} finished on branch ${branch_name}`);
console.log(`Hello from ${name}!`);

const message = '${workflow_name} run number: ${run_number} finished on branch ${branch_name}';

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

