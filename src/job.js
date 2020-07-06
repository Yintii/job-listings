import React from 'react';
import Requirements from './requirements.js'
import './job.css';

class Job extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    const specialDetails = this.props.specialDetails;
    const reqs = this.props.requisites;
    const filters = this.props.filter;
    const specialItems = specialDetails.map((specialDetail)=>
      <div key={specialDetail.toString()} className="specialDetail">
        <div className="detail-text">
          {specialDetail}
        </div>
      </div>
    );
    const hasFilters = (function(){
      for(let i = 0; i<reqs.length;i++){
        for(let ii = 0; ii<filters.length;ii++){
          if(filters[ii] === reqs[i]){
            return true;
        }else{
          return false;
        }
      }
    }
    })();


  return (
    <div>
      {hasFilters &&
      <div className="job-listing">
        {specialItems.length > 1 &&
          <div className="stylishline2"></div>
        }
          <img src={this.props.img} alt="company logo"/>
          <div className="details">
            <div className="listing-header">
              <div className="employer">{this.props.employer}</div>
              <div className="specialDetails">{specialItems}</div>
            </div>
            <div className="job-position">{this.props.position}</div>
            <div className="sub-details">
              <li className="listing-age">{this.props.age}</li>
              <li className="job-time">{this.props.workTime}</li>
              <li className="job-location">{this.props.jobLocation}</li>
            </div>
            <div className="stylishline"></div>
          </div>
          <Requirements requisites={reqs}/>
        </div>
      }
      </div>
    );
  }
}

export default Job;
