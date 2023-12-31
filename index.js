const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5004;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));