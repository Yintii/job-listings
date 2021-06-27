/* DATA CHUNK */
//usually you would use webpack
//to bundle all these in a module but
//that was a lot of work so we're just typing it out for now
import photosnap   from "../images/photosnap.svg";
import manage      from "../images/manage.svg";
import account     from "../images/account.svg";
import myHome      from "../images/myhome.svg";
import loopStudios from "../images/loop-studios.svg";
import faceIt      from "../images/faceit.svg";
import shortly     from "../images/shortly.svg";
import insure      from "../images/insure.svg";
import eyeCamCo    from "../images/eyecam-co.svg";
import theAFC      from "../images/the-air-filter-company.svg";

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
   requisites: ['Front-End','Senior','HTML','CSS','JavaScript'],
   img: photosnap
  },
  { //Manage
    employer: "Manage", specialDetails: ["New!", "Featured"],
    position: "Fullstack Developer", age: "1d ago",
    workTime: "Part-Time", jobLocation: "Remote",
    requisites: ['Fullstack','Midweight','Python','React'],
    img: manage
   },
   { //Account
    employer: "Account", specialDetails: [],
    position: "Junior Frontend Developer", age: "5d ago",
    workTime: "Contract", jobLocation: "USA only",
    requisites: ['Front-End','Junior','CSS','JavaScript'],
    img: account
   },
   { //myHome
    employer: "myHome", specialDetails: [],
    position: "Junior Frontend Developer", age: "5d ago",
    workTime: "Contract", jobLocation: "USA only",
    requisites: ['Front-End','Junior','CSS','JavaScript'],
    img: myHome
   },
   { //Loop Studios
    employer: "Loop Studios", specialDetails: [],
    position: "Software Engineer", age: "1w ago",
    workTime: "Full-Time", jobLocation: "Worldwide",
    requisites: ['Fullstack','Midweight','Sass','JavaScript','Ruby'],
    img: loopStudios
   },
   { //Face It
    employer: "FaceIt", specialDetails: [],
    position: "Junior Backend Developer", age: "2w ago",
    workTime: "Full-Time", jobLocation: "UK only",
    requisites: ['Back-End','Junior','Ruby','RoR'],
    img: faceIt
   },
   { //Shortly
    employer: "Shortly", specialDetails: [],
    position: "Junior Developer", age: "2w ago",
    workTime: "Full-Time", jobLocation: "Worldwide",
    requisites: ['Front-End','Junior','Sass','JavaScript'],
    img: shortly
   },
   { //Insure
    employer: "Insure", specialDetails: [],
    position: "Junior Frontend Developer", age: "2w ago",
    workTime: "Full-Time", jobLocation: "USA only",
    requisites: ['Front-End','Junior','Sass','JavaScript', 'Vue'],
    img: insure
   },
   { //Eyecam Co.
    employer: "Eyecam Co.", specialDetails: [],
    position: "Fullstack Engineer", age: "3w ago",
    workTime: "FullStack", jobLocation: "Worldwide",
    requisites: ['Fullstack','Midweight','Python','CSS','Django'],
    img: eyeCamCo
   },
   { //The Air Filter Company
    employer: "The Air filter Company", specialDetails: [],
    position: "Front-end Dev", age: "1mo ago",
    workTime: "Part-Time", jobLocation: "Worldwide",
    requisites: ['Front-End','Junior','React','Sass','JavaScript'],
    img: theAFC
   },
]
 /*data chunk end */

export default DATA;