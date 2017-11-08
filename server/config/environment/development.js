'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://admin:password@ds255265.mlab.com:55265/interviewquestions'
  },

  // Seed database on startup
  seedDB: true
};
