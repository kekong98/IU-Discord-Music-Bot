const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req. res) => res.send('IU-Discord-Music-Bot'));

app.listen(port, () => console.log('Connected to http://localhost:${port}`));
