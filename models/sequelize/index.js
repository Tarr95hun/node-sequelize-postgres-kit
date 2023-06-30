const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "WDJ",
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Doe",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // freezeTableName: true,
      tableName: "Employees",
      timestamps: true,
      createdAt: false,
      updatedAt: "updateTimeStamp", // rename field
    }
  );

  // delete table if name_test with force: true, match: /_test$/
  sequelize.sync({ alter: true }); // force: true
};
