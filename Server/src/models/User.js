const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {

      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },

      email:{
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isEmail: true
         }
      },

      password: {
         type: DataTypes.STRING(6),
         allowNull: false,
         validate: {
           is: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/i
         }
       }

   }, { timestamps: false });
};
