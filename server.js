const express = require('express');

// Load environment variables
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// GET / route

// case 1 : Leave it empty

// case 2 : Return empty JSON object
// app.get('/', (req, res) => {
//     res.status(200).json({  });
// });

// case 3 : Return JSON object with message property
// app.get('/', (req, res) => {
//     const data = {
//         message: 'My name is José!'
//     };
//     res.status(200).json(data);
// });

// case 4 : Return JSON object with message property equal to "Jambo"
app.get('/', (req, res) => {
    const data = {
        message: 'Jambo'
    };
    res.status(200).json(data);
});


// POST / route

// case 1 : Leave it empty

// case 2 : Return empty JSON object

// app.post('/', (req, res) => {
//     res.status(201).json({  });
// });

// case 3 : Return JSON object with message property equal to "Jambo (From José)"

// app.post('/', (req, res) => {
//     res.status(201).json({ message: 'Jambo (From José)' });
// });

// case 4 : Return JSON object with message property equal to "Jambo (From José)" if the message property is equal to "Jambo"

app.post('/', (req, res) => {
    const { message } = req.body;
    if (message === 'Jambo') {
        res.status(201).json({ message: 'Jambo (From José)' });
    } else {
        res.status(400).end();
    }
});


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
module.exports = app; // for testing