// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category 
Product.belongsTo(Category, {
  foreignKey: "category_id",
  // When we delete a category of product, we also delete the associated product.
  onDelete: "CASCADE",
});

// Categories have many Products - hasMany
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag) 
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag) 
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag-id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
