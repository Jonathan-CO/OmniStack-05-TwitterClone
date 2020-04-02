const Tweet = require('../models/Tweet');


module.exports = {

    async index(req, res){
        const tweets = await Tweet.find({}).sort('-createdAt');
        return res.json(tweets);
    },

    async store (req, res) {
        const {author, content} = req.body
        const tweet = await Tweet.create({
            author,
            content,
        })

        return res.json(tweet);
    }

}