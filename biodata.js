const Sequelize = require('sequelize');
const sequelize = require('./db');

const Biodata = sequelize.define('biodata', {
  nama: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tempatLahir: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tanggalLahir: {
    type: Sequelize.DATEONLY,
  },
  alamat: {
    type: Sequelize.STRING,
  },
});

module.exports = Biodata;
