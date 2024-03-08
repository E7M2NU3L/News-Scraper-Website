const express = require('express');
const { FetchAllNews, SendRequest, FetchSingleNews } = require('../../controllers/Feed/FeedCtrl');

// router
const FeedRouter = express.Router();

// Routes

// 1. Fetch News Page
FeedRouter.post('/fetch', SendRequest);

// 2. get
FeedRouter.get('/', FetchAllNews);

// 3. Get Single Route
FeedRouter.get('/:id', FetchSingleNews);

// exporting the router
module.exports = FeedRouter;