const {Router} = require('express');

const routes = Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.post ('/likes/:id', LikeController.store);

routes.get('/', (req, res)=>{
    return res.json({message: "Hello Twitter Clone"})
})

module.exports = routes;