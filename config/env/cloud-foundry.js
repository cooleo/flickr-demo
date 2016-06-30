'use strict';

var cfenv = require('cfenv'),
  appEnv = cfenv.getAppEnv();
var cfMongoUrl = (function() {
  if (appEnv.getService('flickr-demo-mongo')) {
    var mongoCreds = appEnv.getService('flickr-demo-mongo').credentials;
    return mongoCreds.uri || mongoCreds.url;
  } else {
    throw new Error('No service names "flickr-demo-mongo" bound to the application.');
  }
}());

var getCred = function (serviceName, credProp) {
  return appEnv.getService(serviceName) ?
    appEnv.getService(serviceName).credentials[credProp] : undefined;
};

module.exports = {
  port: appEnv.port,
  db: {
    uri: cfMongoUrl,
    options: {
      user: '',
      pass: ''
    }
  },
  log: {
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: 'combined',
    // Stream defaults to process.stdout
    // By default we want logs to go to process.out so the Cloud Foundry Loggregator will collect them
    options: {}
  },
  facebook: {
    clientID: getCred('flickr-demo-facebook', 'id') || 'APP_ID',
    clientSecret: getCred('flickr-demo-facebook', 'secret') || 'APP_SECRET',
    callbackURL: '/api/auth/facebook/callback'
  },
  twitter: {
    clientID: getCred('flickr-demo-twitter', 'key') || 'CONSUMER_KEY',
    clientSecret: getCred('flickr-demo-twitter', 'secret') || 'CONSUMER_SECRET',
    callbackURL: '/api/auth/twitter/callback'
  },
  google: {
    clientID: getCred('flickr-demo-google', 'id') || 'APP_ID',
    clientSecret: getCred('flickr-demo-google', 'secret') || 'APP_SECRET',
    callbackURL: '/api/auth/google/callback'
  },
  linkedin: {
    clientID: getCred('flickr-demo-linkedin', 'id') || 'APP_ID',
    clientSecret: getCred('flickr-demo-linkedin', 'secret') || 'APP_SECRET',
    callbackURL: '/api/auth/linkedin/callback'
  },
  github: {
    clientID: getCred('flickr-demo-github', 'id') || 'APP_ID',
    clientSecret: getCred('flickr-demo-github', 'secret') || 'APP_SECRET',
    callbackURL: '/api/auth/github/callback'
  },
  paypal: {
    clientID: getCred('flickr-demo-paypal', 'id') || 'CLIENT_ID',
    clientSecret: getCred('flickr-demo-paypal', 'secret') || 'CLIENT_SECRET',
    callbackURL: '/api/auth/paypal/callback',
    sandbox: false
  },
  flickr:{
    clientID: '',
    clientSecret: ''
  },
  mailer: {
    from: getCred('flickr-demo-mail', 'from') || 'MAILER_FROM',
    options: {
      service: getCred('flickr-demo-mail', 'service') || 'MAILER_SERVICE_PROVIDER',
      auth: {
        user: getCred('flickr-demo-mail', 'username') || 'MAILER_EMAIL_ID',
        pass: getCred('flickr-demo-mail', 'password') || 'MAILER_PASSWORD'
      }
    }
  },
  seedDB: {
    seed: process.env.MONGO_SEED === 'true' ? true : false,
    options: {
      logResults: process.env.MONGO_SEED_LOG_RESULTS === 'false' ? false : true,
      seedUser: {
        username: process.env.MONGO_SEED_USER_USERNAME || 'user',
        provider: 'local',
        email: process.env.MONGO_SEED_USER_EMAIL || 'user@localhost.com',
        firstName: 'User',
        lastName: 'Local',
        displayName: 'User Local',
        roles: ['user']
      },
      seedAdmin: {
        username: process.env.MONGO_SEED_ADMIN_USERNAME || 'admin',
        provider: 'local',
        email: process.env.MONGO_SEED_ADMIN_EMAIL || 'admin@localhost.com',
        firstName: 'Admin',
        lastName: 'Local',
        displayName: 'Admin Local',
        roles: ['user', 'admin']
      }
    }
  }
};
