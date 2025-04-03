import { Request, Response, NextFunction } from 'express';
import TweetController from '../controllers/tweet';

export default class TweetHTTPHandler {
    private tweetController: TweetController;

    constructor() {
        this.tweetController = new TweetController();
    }

    async getTweets(req: Request, res: Response, next: NextFunction) {
        try {
            const tweets = await this.tweetController.getAllTweets();
            res.json(tweets);
        } catch (error) {
            next(error);
        }
    }

    async getTweetPairIds(req: Request, res: Response, next: NextFunction) {
        try {
            const tweet = await this.tweetController.getTweetPairIds();
            res.json(tweet);
        } catch (error) {
            next(error);
        }
    }

    async getTweetById(req: Request, res: Response, next: NextFunction) {
        try {
            const tweet = await this.tweetController.getTweetById(req.params.id);
            res.json(tweet);
        } catch (error) {
            next(error);
        }
    }

    async updateTweet(req: Request, res: Response, next: NextFunction) {
        try {
            const tweet = await this.tweetController.updateTweet(req.params.id, req.body);
            res.json(tweet);
        } catch (error) {
            next(error);
        }
    }

    async deleteTweet(req: Request, res: Response, next: NextFunction) {
        try {
            await this.tweetController.deleteTweet(req.params.id);
            res.json({ message: 'Tweet deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

    async createTweet(req: Request, res: Response, next: NextFunction) {
        try {
            const tweet = await this.tweetController.createTweet(req.body.text);
            res.json(tweet);
        } catch (error) {
            next(error);
        }
    }
}