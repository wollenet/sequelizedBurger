module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1,50]}
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });



  return burgers;
};

