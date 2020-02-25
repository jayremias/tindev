const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;
        
        const loggedUser = await Dev.findById(user);
        
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } },
            ]
        });
        
        res.json(users);
    },
    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if(userExists) {
            return res.json(userExists);
        }
        
        response = await axios.get(`https://api.github.com/users/${username}`);
        
        const { avatar_url:avatar, name, bio } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });
        
        return res.json(dev);
    }
};