# fbpages

App to list the Facebook pages a person manages

**Back-end** using **Express**

**Front-end** using **React**, and **Materialize**

This app could be implemented without a back-end, making the calls to Facebook Graph API straight from the React client.
It is done using an Express back-end as a playground for implementing a full stack app with Facebook Graph API calls on the backend.

# Downloading and running instructions

## Pre-requisites

1.  Node.js: <https://nodejs.org/en/>
2.  (optional, for deployment) Now: <https://zeit.co/now>

## General

1.  Clone repository

```
git clone git@github.com:acaua/fbpages.git
```

2.  cd into repo folder

```
cd fbpages
```

3.  install server dependencies

```
npm install
```

4.  install client dependencies

```
npm run client-install
```

## Run development enviroment

1.  run dev script

```
npm run dev
```

You can access the app at <http://localhost:3000/>

The back-end will be listening at <http://localhost:5000/api>

## Build app for deploy

1.  run build script

```
npm run client-build
```

## Deploy app to now

1.  run deploy script

```
npm run deploy
```

# Enjoy it! :)

# Next steps / missing features

- Create tests

- Beter visuals

- Display pictures for user and pages
