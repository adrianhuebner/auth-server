'use strict';

const superagent = require('superagent');
const Users = require('../users-model');
require('dotenv').config;

const authorize = (req) => {

  let code = req.query.code;
  console.log('1. CODE:', code);
  
  return superagent.post('https://api.login.yahoo.com/oauth2/get_token')
    .type('form')
    .send({
      code:code,
      client_id: process.env.YAHOO_CLIENT_ID,
      client_secret: process.env.YAHOO_CLIENT_SECRET,
      redirect_uri:`${process.env.API_URL}/oauth`,
      grant_type: 'authorization_code',
    })
    .then(response => {
      let access_token = response.body.access_token;
      console.log('2. ACCESS TOKEN: ', access_token);
      return access_token;
    })
    .then(token => {
      return superagent.get('https://social.yahooapis.com/v1/user/abcdef123/profile?format=json')
      // parse properly
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        let user = response.body;
        user.access_token = token;
        console.log('3. Yahoo User', user);
      });
    })
    .then(oauthUser => {
      console.log('4. Create Account');
      return Users.createForOAth(oauthUser);
    })
    .catch(error => error);
}
module.exports = {authorize};
