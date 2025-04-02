import express from 'express';
import TweetHTTPHandler from '../handlers/tweet';

const router = express.Router();
const tweetHandler = new TweetHTTPHandler();

router.get('/', (req, res, next) => tweetHandler.getTweets(req, res, next));
router.get('/pair', (req, res, next) => tweetHandler.getTweetPairIds(req, res, next));
router.get('/:id', (req, res, next) => tweetHandler.getTweetById(req, res, next));
router.put('/:id', (req, res, next) => tweetHandler.updateTweet(req, res, next));
router.delete('/:id', (req, res, next) => tweetHandler.deleteTweet(req, res, next));

export default router;