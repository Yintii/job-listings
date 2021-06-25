import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
moving the data from off the components in listings.js
to be a data object here and then the future job listings
will be dynamically created by the data information here
*/

const DATA = [
  { //Photosnap
   employer: "Photosnap", specialDetails: ["New!", "Featured"],
   position: "Senior Frontend Developer", age: "1d ago",
   workTime: "Full-Time", jobLocation: "USA only",
   requisites: ['Front-End','Senior','HTML','CSS','JavaScript']
  },
  { //Manage
    employer: "Manage", specialDetails: ["New!", "Featured"],
    position: "Fullstack Developer", age: "1d ago",
    workTime: "Part-Time", jobLocation: "Remote",
    requisites: ['Fullstack','Midweight','Python','React']
   },
   { //Account
    employer: "Account", specialDetails: [],
    position: "Junior Frontend Developer", age: "5d ago",
    workTime: "Contract", jobLocation: "USA only",
    requisites: ['Front-End','Junior','CSS','JavaScript']
   },
   { //Loop Studios
    employer: "Loop Studios", specialDetails: [],
    position: "Software Engineer", age: "1w ago",
    workTime: "Full-Time", jobLocation: "Worldwide",
    requisites: ['Fullstack','Midweight','Sass','JavaScript','Ruby']
   },
   { //Face It
    employer: "FaceIt", specialDetails: [],
    position: "Junior Backend Developer", age: "2w ago",
    workTime: "Full-Time", jobLocation: "UK only",
    requisites: ['Back-End','Junior','Ruby','RoR']
   },
   { //Shortly
    employer: "Shortly", specialDetails: [],
    position: "Junior Developer", age: "2w ago",
    workTime: "Full-Time", jobLocation: "Worldwide",
    requisites: ['Front-End','Junior','Sass','JavaScript']
   },
   { //Insure
    employer: "Insure", specialDetails: [],
    position: "Junior Frontend Developer", age: "2w ago",
    workTime: "Full-Time", jobLocation: "USA only",
    requisites: ['Front-End','Junior','Sass','JavaScript', 'Vue']
   },
   { //Eyecam Co.
    employer: "Eyecam Co.", specialDetails: [],
    position: "Fullstack Engineer", age: "3w ago",
    workTime: "FullStack", jobLocation: "Worldwide",
    requisites: ['Fullstack','Midweight','Python','CSS','Django']
   },
   { //The Air Filter Company
    employer: "The Air filter Company", specialDetails: [],
    position: "Front-end Dev", age: "1mo ago",
    workTime: "Part-Time", jobLocation: "Worldwide",
    requisites: ['Front-End','Junior','React','Sass','JavaScript']
   },
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
