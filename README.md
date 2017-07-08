# node-js-user-auth-using-jwt

This nodejs app authenticate user using JWT.

## How to configure nodejs app
* Clone the repo
* cd to the ~/node-js-user_aut-using-jwt
* Run 'npm install'
* ~/node-js-user_aut-using-jwt: node app.js


## How to configure Mysql wiwth nodejs app
* Create 'test' databse into mysql server.
* Import login.sql table file into test database.
* Create .env file into root of ~/nodejs_user_authentication_using_jwt folder.
* Add database parameters into this file
 
```
DB_HOST=localhost
DB_NAME =test
DB_USER =root
DB_PASS=''
```

#Test nodejs application
open http://project_name:3000 on browser.

### Prerequisite
Node js (v0.12.3 or greater)