'use strict';
const Sequelize = require('sequelize')
const db = require('../index.js')
const Campus = require('./campus')

module.exports = db.define('student', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
}, {
  getterMethods: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
}, {
  defaultScope: {
    include: [Campus]
  }
})
