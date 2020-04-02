const Tweet = require('../models/Tweet');

module.exports ={
    async store (req, res){

        const id = req.params.id;
        const tweet = await Tweet.findById(id)

        tweet.set({likes: tweet.likes + 1})
        await tweet.save();

        req.io.emit('like', tweet);
        
        return res.json(tweet);
    }
}