import React from 'react';
import '../styles/App.css';
import Job from './job.js';
import DATA from './data.js'


function Listings(props){
  const jobList = DATA.map(job => (
              <Job
                id={job.employer}
                employer={job.employer}
                specialDetails={job.specialDetails}
                position={job.position}
                age={job.age}
                workTime={job.workTime}
                jobLocation={job.jobLocation}
                requisites={job.requisites}
                img={job.img}
                filter={props.filtration_items}/>));

  return(
    <main>
        <div id="Listings">
          {jobList}
        </div>
      </main>
    );

}

export default Listings;
