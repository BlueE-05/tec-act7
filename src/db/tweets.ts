export default class TweetDB {
    private tweets: any[] = [
        { id: '1', text: 'Hello World' },
        { id: '2', text: 'This is a tweet' },
        { id: '3', text: 'listening to Dualipa while doin this' },
        { id: '4', text: 'you want me, i want you baby. Im levitatiiingg' },
        { id: '5', text: 'Training season' }
    ];

    async getAllTweets() {
        return this.tweets;
    }

    async getTweetPairIds() {
        return this.tweets.filter(tweet => parseInt(tweet.id) % 2 === 0);
    }

    async getTweetById(id: string) {
        return this.tweets.find(tweet => tweet.id === id);
    }

    async updateTweet(id: string, data: string) {
        const tweet = this.tweets.find(tweet => tweet.id === id);
        if (tweet) {
            Object.assign(tweet, data);
            return tweet;
        }
        return null;
    }
    
    async deleteTweet(id: string) {
        this.tweets = this.tweets.filter(tweet => tweet.id !== id);
    }
}