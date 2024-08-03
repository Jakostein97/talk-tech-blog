const User = require("./User");
const Article = require("./Article");

Article.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "CASCADE"
});

module.exports = { User, Article };