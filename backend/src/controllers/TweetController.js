const Tweet = require('../models/Tweet');


module.exports = {

    async index(req, res){
        const tweets = await Tweet.find({}).sort('-createdAt');
        return res.json(tweets);
    },

    async store (req, res) {
        const {} = req.body
        const tweet = await tweet.create({
            author,
            content,
            likes,
        })
    }

}