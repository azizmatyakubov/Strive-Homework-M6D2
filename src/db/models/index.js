import Blog from "./Blog.js";
import Product from './Product.js'
import Review from "./Review.js";


Blog.hasMany(Review, {onDelete: 'CASCADE'}); // delete all reviews when delete Blog
Review.belongsTo(Blog,  {onDelete: 'CASCADE'}); 

export default { Blog, Product, Review }