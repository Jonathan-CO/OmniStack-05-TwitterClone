const {Router} = require('express');

const routes = Router();

const TweeterControler = require('./controllers/TweetController');

routes.get('/tweets', TweeterControler.index);
routes.post('/tweets', TweeterControler.store);

routes.get('/', (req, res)=>{
    return res.json({message: "Hello Twitter Clone"})
})

module.exports = routes;