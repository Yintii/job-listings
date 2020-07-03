import React from 'react';
import './App.css';
import Job from './job.js';
//usually you would use webpack
//to bundle all these in a module but
//that was a lot of work so we're just typing it out for now
import photosnap   from "./images/photosnap.svg";
import manage      from "./images/manage.svg";
import account     from "./images/account.svg";
import myHome      from "./images/myhome.svg";
import loopStudios from "./images/loop-studios.svg";
import faceIt      from "./images/faceit.svg";
import shortly     from "./images/shortly.svg";
import insure      from "./images/insure.svg";
import eyeCamCo    from "./images/eyecam-co.svg";
import theAFC      from "./images/the-air-filter-company.svg";

function Listings(){
  return(
    <div id="Listings">
    {/*photosnap*/}
    <Job
     img={photosnap}
     employer={"Photosnap"}
     specialDetails={["New!","Featured"]}
     position={"Senior Frontend Developer"}
     age={"1d ago"}
     workTime={"Full Time"}
     jobLocation={"USA only"}
     requisites={['Frontend','Senior','HTML','CSS','JavaScript']}
     />
    {/*manage*/}
    <Job
    img={manage}
     employer={"Manage"}
     specialDetails={["New!","Featured"]}
     position={"Fullstack Developer"}
     age={"1d ago"}
     workTime={"Part Time"}
     jobLocation={"Remote"}
     requisites={['Midweight','Fullstack','Python', 'React']}
      />
    {/*Account*/}
    <Job
    img={account}
    employer={"Account"}
    specialDetails={["New!"]}
    position={"Junior Frontend Developer"}
    age={"2d ago"}
    workTime={"Part Time"}
    jobLocation={"USA only"}
    requisites={['Frontend','Junior','Javascript', 'React', 'Sass']}
    />
    {/*MyHome*/}
    <Job
    img={myHome}
    employer={"MyHome"}
    specialDetails={[]}
    position={"Junior Frontend Developer"}
    age={"5d ago"}
    workTime={"Contract"}
    jobLocation={"USA only"}
    requisites={['Junior','Frontend','Javascript', 'CSS']}
    />
    {/*Loop Studios*/}
    <Job
    img={loopStudios}
    employer={"Loops Studios"}
    specialDetails={[]}
    position={"Software Engineer"}
    age={"1w ago"}
    workTime={"Full Time"}
    jobLocation={"Worldwide"}
    requisites={['FullStack','Midweight','Javascript','Ruby','Sass']}
    />
    {/*FaceIt*/}
    <Job
    img={faceIt}
    employer={"FaceIt"}
    specialDetails={[]}
    position={"Junior Backend Developer"}
    age={"2w ago"}
    workTime={"Full Time"}
    jobLocation={"UK only"}
    requisites={['Junior','Backend','Ruby','RoR']}
    />
    {/*Shortly*/}
    <Job
    img={shortly}
    employer={"Shortly"}
    specialDetails={[]}
    position={"Junior Developer"}
    age={"2w ago"}
    workTime={"Full Time"}
    jobLocation={"Worldwide"}
    requisites={['Frontend','Junior','Javascript', 'Sass']}
    />
    {/*Insure*/}
    <Job
    img={insure}
    employer={"Insure"}
    specialDetails={[]}
    position={"Junior Frontend Developer"}
    age={"2w ago"}
    workTime={"Full Time"}
    jobLocation={"USA only"}
    requisites={['Junior','Frotend','Javascript', 'Vue', 'Sass']}
    />
    {/*Eyecam Co.*/}
    <Job
    img={eyeCamCo}
    employer={"Eyecam Co."}
    specialDetails={[]}
    position={"FullStack Engineer"}
    age={"3w ago"}
    workTime={"Full Time"}
    jobLocation={"Worldwide"}
    role={"Fullstack"}
    roleLevel={"Midweight"}
    requisites={['Midweight','Fullstack','Javascript', 'Python', 'Django']}
    />
    {/*The Air Filter Conpany*/}
    <Job
    img={theAFC}
    employer={"The Air Filter Company"}
    specialDetails={[]}
    position={"Front-end Dev"}
    age={"1mo ago"}
    workTime={"Part Time"}
    jobLocation={"Worldwide"}
    requisites={['Frontend','Junior','Javascript', 'React', 'Sass']}
    />
    </div>
  );
}

export default Listings;
