const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req. res) => res.send('IU-Discord-Music-Bot'));

app.listen(port, () => console.log('IU-Discord-Music-Bot is connected to http://localhost:${port}`));
