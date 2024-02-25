const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const rootRouter = require('./router');


// configure cors with express
app.use(cors())

// configure express accept the form data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//config the dot env
dotenv.config({ path: './config/config.env' })

const port = 5000 || process.env.PORT;

// database connection setup
mongoose.connect(process.env.MONGO_DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then((response) => {
    console.log(`Connected to Mongo DB Successfully...........`);
}).catch((err) => {
    console.error(err);
    process.exit(1); // stop the node js process if unable to connect to mongodb
});

// test url
app.get('/', (req, res) => {
    res.send(`<h2>Express server loaded</h2>`)
});

app.listen(port,() => {
    console.log(`Express Server is Started at a :${port}`);
})

// configuring the root routers
app.use('/api',rootRouter)