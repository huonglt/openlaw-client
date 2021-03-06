# OpenLaw - Web Client app

This is a Webpack, Bootstrap 4, React v16, Redux, Redux-Saga, axios app to upload an ASCII file for parsing<br/>
It uses Bootstrap for responsiveness, mobile friendly, and extensive css classes<br/>
It uses Redux for state management<br/>
It uses Redux-saga to manage side-effects<br/>
It uses axios for http requests and responses<br/>

When receive response from the server, if successful, it displays a table with total word count, and the count of each word occurrence<br/>
If fails, it display the error the server send it<br/>

To upload file to the server, a file must be selected, and its size must be < 10MB.<br/>
A messsage will be displayed if either of those two criteria not met<br/>

It uses Webpack for bundling, and webpack-dev-server as a development server<br/>

## Prerequisites
You need to have node, npm or yarn install<br/>
I am using node version 10.2.1, yarn version 1.7.0, npm version 5.6.0

### Installing

Clone the repo to your directory<br/>
To install npm dependencies<br/>
```
npm install
```
or<br/>
```
yarn install
```

## To run the app
```
npm start
```
or<br/>
```
yarn install
```

## To run unit test
The app using jest as a test runner<br/>
```
npm run test
```
or<br/>
```
yarn test
```

## Further improvement
A lot more things could be done to make this a better app including<br/>
Unit tests for each component<br/>
End to end tests<br/>
Better UI design<br/>
