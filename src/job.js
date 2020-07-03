import React from 'react';
import './job.css';
function Job(props) {
  const specialDetails = props.specialDetails;
  const requisites = props.requisites;

  const specialItems = specialDetails.map((specialDetail)=>
    <li key={specialDetail.toString()} class="specialDetail">
      {specialDetail}
    </li>
  );

  const theRequisites = requisites.map((requisite)=>
  <li key={requisite.toString()} class="requisite">
    {requisite}
  </li>
  );

  return (
    <div class="job-listing">
    <div class="details">
      <img src={props.img} />
      <div class="employer">{props.employer}</div>
      <div class="specialDetails">{specialItems}</div>
      <div class="job-position">{props.position}</div>
      <div class="listing-age">{props.age}</div>
      <div class="job-time">{props.workTime}</div>
      <div class="job-location">{props.jobLocation}</div>
    </div>
    <div class="requirements">{theRequisites}</div>
  </div>
  );
}

export default Job;
