import React from 'react';
import './job.css';
function Job(props) {
  const specialDetails = props.specialDetails;
  const requisites = props.requisites;

  const specialItems = specialDetails.map((specialDetail)=>
    <div key={specialDetail.toString()} className="specialDetail">
      <div className="detail-text">
        {specialDetail}
      </div>
    </div>
  );

  const theRequisites = requisites.map((requisite)=>
  <div key={requisite.toString()} className="requisite">
    <div className="requisite-text">
      {requisite}
    </div>
  </div>
  );

  return (
      <div className="job-listing">
      {specialItems.length > 1 &&
        <div className="stylishLine2"></div>
      }
        <img src={props.img} />
        <div className="details">
          <div className="listing-header">
            <div className="employer">{props.employer}</div>
            <div className="specialDetails">{specialItems}</div>
          </div>
          <div className="job-position">{props.position}</div>
          <div className="sub-details">
            <li className="listing-age">{props.age}</li>
            <li className="job-time">{props.workTime}</li>
            <li className="job-location">{props.jobLocation}</li>
          </div>
          <div className="stylishline"></div>
        </div>
        <div className="requirements">{theRequisites}</div>
    </div>
    );

}

export default Job;
