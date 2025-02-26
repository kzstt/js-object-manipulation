const sculptureList = require('./data.js'); // Import data.js

// Create an array that stores transformed objects
const sculptureListLengths = sculptureList.map(sculpture => {
    return Object.assign({}, ...Object.entries(sculpture).map(([key, value]) => ({
        [key]: typeof value === "string" ? value.length : value
    })));
});

// Log the output to verify
console.log(sculptureListLengths);

module.exports = sculptureListLengths;
