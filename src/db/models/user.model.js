import { DataTypes } from "sequelize";
import { ROLE } from "../../constants/role.constants.js";

const user = (sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      role: {
        type: DataTypes.ENUM,
        values: Object.values(ROLE),
        allowNull: false,
        defaultValue: ROLE.USER,
      },
    },
    { timestamps: true }
  );
  User.associate = (models) => {
    User.hasMany(models.Loan);
    User.hasMany(models.Review);
  };
  return User;
};

export default user;
