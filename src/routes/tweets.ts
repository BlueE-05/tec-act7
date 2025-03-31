import express from 'express';
import TweetHTTPHandler from '@/handlers/tweet';

const router = express.Router();

const tweetHandler = new TweetHTTPHandler();

router.get('/', tweetHandler.getTweets);
router.get('/:id', tweetHandler.getTweetById);
router.put('/:id', tweetHandler.updateTweet);
router.delete('/:id', tweetHandler.deleteTweet);

export default router;