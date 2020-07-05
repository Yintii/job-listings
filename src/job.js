import React from 'react';
import Requirements from './requirements.js'
import './job.css';

class Job extends React.Component{
  constructor(props){
    super(props);
    this.state = {
                  filterThese: this.props.filter
                 }
  }
  render(){
    console.log(this.state.filterThese);
    const specialDetails = this.props.specialDetails;
    const reqs = this.props.requisites;
    const filters = this.state.filterThese;
    const containsFilter = false;
    const show = () => {
      let counter = 0;
      while(counter < filters.length){
        if(reqs[counter] === filters[counter]){
          containsFilter = true;
        }else{
          containsFilter = false;
          counter++;
        }
      }

      return containsFilter;
    };

    const specialItems = specialDetails.map((specialDetail)=>
      <div key={specialDetail.toString()} className="specialDetail">
        <div className="detail-text">
          {specialDetail}
        </div>
      </div>
    );
  return (
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
    );
  }
}

export default Job;
