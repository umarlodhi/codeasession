'use strict';

module.exports = {
  mailer: {
    service: 'Gmail',
    auth: {
      user: 'your_gmail_account_here',
      pass: 'your_pw_comes_here'
    }
  },
  mongoDB: {
    dbConnString: 'mongodb://umar:umar@dev-cluster.y2pcp.mongodb.net/codeasession',
    sessionKey: 'CodaSessionYolomatic'
  },
  facebook: {
    appID: 'APP_ID_HERE',
    appSecret: 'APP_SECRET_HERE',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  }
}
