import React from 'react';
import logo from './logo.svg';
import './App.css';
import Job from './job.js'

function App() {
  return (
    <div>
    <Job employer={"Photosnap"}
     specialDetails={["New!","Featured"]}
     position={"Senior Frontend Developer"}
     age={"1d ago"}
     workTime={"Full Time"}
     jobLocation={"USA only"}
     role={"Frontend"}
     roleLevel={"Senior"}
     requisites={['HTML','CSS','JavaScript']}
     />
    </div>
  );
}

export default App;
