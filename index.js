const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World! Docker is darn cool!</h1>');
});

// PORTs
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});