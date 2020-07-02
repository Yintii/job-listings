import React from 'react';
function Job(props) {
  return (
    <div class="job-listing">
    <div class="details">
      <div class="employer">{props.employer}</div>
      <div class="specialDetails">{props.specialDetails}</div>

      <div class="job-position">{props.position}</div>
      <div class="listing-age">{props.age}</div>
      <div class="job-time">{props.workTime}</div>
      <div class="job-location">{props.jobLocation}</div>
      <div class="job-role">{props.role}</div>
      <div class="job-level">{props.roleLevel}</div>
    </div>
    <div class="requirements">
      <div class="requisites">{props.requisites}</div>
    </div>
  </div>
  );
}

export default Job;
