import { Request, Response, NextFunction } from "express";
import TweetController from "@/controllers/tweet";

export default class TweetHTTPHandler {

    private tweetController = new TweetController();
    
    async getTweets(req: Request, res: Response, next: NextFunction) {
        try {
            const tweets = await this.tweetController.getAllTweets();
            res.json(tweets)
        } catch (error) {
            next(error);
        }
    }

    // Revisar los metodos de aqui en adelante, ya que no se si son los correctos
    async getTweetById(req: Request, res: Response, next: NextFunction) {
        try {
            const tweet = await this.getTweetById(req, res, next);
            res.json(tweet)
        } catch (error) {
            next(error);
        }
    }

    async updateTweet(req: Request, res: Response, next: NextFunction) {
        try {
            const tweet = await this.updateTweet(req, res, next);
            res.json(tweet)
        } catch (error) {
            next(error);
        }
    }

    async deleteTweet(req: Request, res: Response, next: NextFunction) {
        try {
            const tweet = await this.deleteTweet(req, res, next);
            res.json(tweet)
        } catch (error) {
            next(error);
        }
    }

}