# aviasales-test

## To run locally:

### Server app

* Fill env configs (example in `env.example`)
* ```npm install```
* ```sequelize db:migrate```
* ```npm run start```

### Client app

* Fill env configs (example in `env.example`)
* ```npm install```
* ```npm run start```

## Introduction

Aviasales's test task for fullstack position [https://github.com/KosyanMedia/test-tasks/tree/master/marketing] 

### Server

#### Stack
* Expess 
* Postgresql
* Express-validator
* sequelize

#### Known issues and features
* prettier and linter checking (will be soon)
* need to include typescript
* need to be coverage by tests
* running in docker containers

### Client

#### Stack
* React 
* Typescript
* Mobx
* react-hook-form
* material-ui
* superagent

#### Known issues and features
* prettier and linter checking (will be soon)
* mobx instead redux (mobx is better :D and faster for me to developing now, but redux will be in separate branch soon)
* some css problems (i tried my best, but can be css problems)
* testing (i like to write usefull tests, but it can takes a lot of time in making tests in tasks)
* running in docker containers