/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: true,
  autoUpdateAt: true,
  attributes: {
    username: {
      type: 'string',
      require: true
    },

    password: {
      type: 'string',
      require: true
    },

    email: {
      type: 'string',
      require: true
    },

    phone: {
      type: 'string',
      require: true
    },

    avatarURL: {
      type: 'string'
    },

    createDate: {
      type: 'TIMESTAMP'
    },

    birthday: {
      type: 'datetime'
    }

  }
};

