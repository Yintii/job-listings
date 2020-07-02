import React from 'react';
import './App.css';
import Job from './job.js';


function Listings(){
  return(
    <div id="Listings">
    {/*photosnap*/}
    <Job
     img={'photosnap.svg'}
     employer={"Photosnap"}
     specialDetails={["New!","Featured"]}
     position={"Senior Frontend Developer"}
     age={"1d ago"}
     workTime={"Full Time"}
     jobLocation={"USA only"}
     role={"Frontend"}
     roleLevel={"Senior"}
     requisites={['HTML','CSS','JavaScript']}
     />
    {/*manage*/}
    <Job
     employer={"Manage"}
     specialDetails={["New!","Featured"]}
     position={"Fullstack Developer"}
     age={"1d ago"}
     workTime={"Part Time"}
     jobLocation={"Remote"}
     role={"Fullstack"}
     roleLevel={"Midweight"}
     requisites={['Python', 'React']}
      />
    {/*Account*/}
    <Job
    employer={"Account"}
    specialDetails={["New!"]}
    position={"Junior Frontend Developer"}
    age={"2d ago"}
    workTime={"Part Time"}
    jobLocation={"USA only"}
    role={"Frontend"}
    roleLevel={"Junior"}
    requisites={['Javascript', 'React', 'Sass']}
    />
    {/*MyHome*/}
    <Job
    employer={"MyHome"}
    specialDetails={[]}
    position={"Junior Frontend Developer"}
    age={"5d ago"}
    workTime={"Contract"}
    jobLocation={"USA only"}
    role={"Frontend"}
    roleLevel={"Junior"}
    requisites={['Javascript', 'CSS']}
    />
    {/*Loop Studios*/}
    <Job
    employer={"Loops Studios"}
    specialDetails={[]}
    position={"Software Engineer"}
    age={"1w ago"}
    workTime={"Full Time"}
    jobLocation={"Worldwide"}
    role={"Fullstack"}
    roleLevel={"Midweight"}
    requisites={['Javascript','Ruby','Sass']}
    />
    {/*FaceIt*/}
    <Job
    employer={"FaceIt"}
    specialDetails={[]}
    position={"Junior Backend Developer"}
    age={"2w ago"}
    workTime={"Full Time"}
    jobLocation={"UK only"}
    role={"Backend"}
    roleLevel={"Junior"}
    requisites={['Ruby','RoR']}
    />
    {/*Shortly*/}
    <Job
    employer={"Shortly"}
    specialDetails={[]}
    position={"Junior Developer"}
    age={"2w ago"}
    workTime={"Full Time"}
    jobLocation={"Worldwife"}
    role={"Frontend"}
    roleLevel={"Junior"}
    requisites={['Javascript', 'Sass']}
    />
    {/*Insure*/}
    <Job
    employer={"Insure"}
    specialDetails={[]}
    position={"Junior Frontend Developer"}
    age={"2w ago"}
    workTime={"Full Time"}
    jobLocation={"USA only"}
    role={"Frontend"}
    roleLevel={"Junior"}
    requisites={['Javascript', 'Vue', 'Sass']}
    />
    {/*Eyecam Co.*/}
    <Job
    employer={"Eyecam Co."}
    specialDetails={[]}
    position={"FullStack Engineer"}
    age={"3w ago"}
    workTime={"Full Time"}
    jobLocation={"Worldwide"}
    role={"Fullstack"}
    roleLevel={"Midweight"}
    requisites={['Javascript', 'Python', 'Django']}
    />
    {/*The Air Filter Conpany*/}
    <Job
    employer={"The Air Filter Company"}
    specialDetails={[]}
    position={"Front-end Dev"}
    age={"1mo ago"}
    workTime={"Part Time"}
    jobLocation={"Worldwide"}
    role={"Frontend"}
    roleLevel={"Junior"}
    requisites={['Javascript', 'React', 'Sass']}
    />
    </div>
  );
}

export default Listings;
