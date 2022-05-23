const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // id - Int, not null , PK and auto inc
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement:true
    },
    // product_it - INT and ref to `Product` models' id
    product_id: {
      type: DataTypes.INTEGER,
      references: { 
        model: "product",
        key: "id",
        unique: false
      }
    },
    // tag_id - ing and ref to Tag models; id.
    tag_id:{
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
