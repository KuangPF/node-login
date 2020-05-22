const express = require('express')

const app = express()

// Ejs
app.set('view engine', 'ejs');

app.use('/', require('./routes/index.js'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));