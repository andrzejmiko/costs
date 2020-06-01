Demo app

How to run:
1. download node.js: https://nodejs.org/en/
2. in app dir run: npm install
3. run in debug mode: npm run dev:debug

used technologies are listed in package.json

config files description:

lunch.json -> configuration of vs code to debug typescript app

.env -> app variables

.gitignore -> obvious

nodemon.json -> configuration hot reload library 

tsconfig.json -> typescript compilator config

tslint.json -> config of tslint

important ts files:

app.ts -> lounches whole app

used table schema: 

CREATE TABLE account (

    user_id integer PRIMARY KEY ,

    username character varying(200) NOT NULL,

    password character varying(200) NOT NULL,

    permissions character varying(200)
    
);

create .env file with your config 

DB_USER=

DB_PASSWORD=

DB_HOST=

DB_DATABASE=

DB_PORT=

JWT_SECRET=