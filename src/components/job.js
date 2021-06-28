import React from 'react';
import Requirements from './requirements.js'
import '../styles/job.css';

class Job extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    const specialDetails = this.props.specialDetails;
    const reqs = this.props.requisites;
    const workT = this.props.workTime;
    const filters = this.props.filter;
    const specialItems = specialDetails.map((specialDetail)=>
      <div key={specialDetail.toString()} className="specialDetail">
        <div className="detail-text">
          {specialDetail}
        </div>
      </div>
    );
    /*
      this not working currently as expected
      it is supposed to check if all filters
      selected match the job listing, then 
      filter out the results accordingly
    */
    const hasFilters = (function(){
      for(let i = 0; i<reqs.length;i++){
        console.log(`Current search for ${reqs[i]}`);
        for(let ii = 0; ii<filters.length;ii++){
          let match = filters.find(element => element.match(reqs[i]))
          let match2 = filters.find(element => element.match(workT));
          if(match || match2){
            return true;
          }
      }
    }
    })();


  return (
    <div>
      <div>
      {/*Shows the filtered results*/}
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
      {/*Shows all the job listings when no filters are active*/}
      <div>
      {!hasFilters && filters.length == 0 &&
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
      </div>
    );
  }
}

export default Job;
