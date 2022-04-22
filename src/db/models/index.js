import Blog from "./Blog.js";
import Product from './Product.js'
import Review from "./Review.js";
import User from './User.js'

// Blog.hasMany(Review, {onDelete: 'CASCADE'}); // delete all reviews when delete Blog
// Review.belongsTo(Blog,  {onDelete: 'CASCADE'}); 

// User.hasMany(Blog)
// Blog.belongsTo(User)

User.hasMany(Review)
Review.belongsTo(User)

Product.hasMany(Review, {onDelete: 'CASCADE'})
Review.belongsTo(Product, {onDelete: 'CASCADE'})

export default { Blog, Product, Review, User }