const { Comment } = require('../models');

const commentData = [{
    user_id: 1,

    comment_text: "Technology blog"
}];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;