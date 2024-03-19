const express = require('express');
const app = express();
const morgan = require('morgan')
const database = require('./database/config/config')

// Configuring Routes
const resourceRouter = require('./routes/resourceRouter')
const shortsRouter = require('./routes/shortsRouter')

// Configuring DotEnv
const dotenv = require('dotenv')
dotenv.config()

// Configuring Required things
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/resource',resourceRouter)
app.use('/api/shorts',shortsRouter)



// Start the server
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Resource-Server started at port ${port}`);
});
