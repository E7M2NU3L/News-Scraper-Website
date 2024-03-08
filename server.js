require('dotenv').config()
const express = require('express');

// initialize the express app
const app = express();

// middleware

// 1. to pass json data
app.use(express.json());

// 2. to pass form data
app.use(express.urlencoded({
    extended:true,
}));

// 3. cors middleware
app.use(cors());

// Routes

// 1. Login Routes
app.use('/api/v1/users/', );

// 2. Profile Dashboard
app.use('/api/v1/profile/', );

// 3. news fetch
app.use('/api/v1/fetch', );

// server initialization
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});