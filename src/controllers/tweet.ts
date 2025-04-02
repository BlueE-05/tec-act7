import TweetDB from '../db/tweets';

export default class TweetController {
    private db = new TweetDB();

    async getAllTweets() {
        return this.db.getAllTweets();
    }

    async getTweetPairIds() {
        return this.db.getTweetPairIds();
    }

    async getTweetById(id: string) {
        return this.db.getTweetById(id);
    }

    async updateTweet(id: string, data: string) {
        return this.db.updateTweet(id, data);
    }
    
    async deleteTweet(id: string) {
        return this.db.deleteTweet(id);
    }
}