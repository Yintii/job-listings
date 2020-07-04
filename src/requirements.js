import React from 'react';
import closebtn from './images/icon-remove.svg';
import './requirements.css'
import './filter.css';


class Requirements extends React.Component{
  constructor(props){
    super(props);
    this.state = {listArr: []};
    this.requirements = props.requisites;
    this.theRequisites = this.requirements.map((requisite)=>
    <div className="requisite" onClick={this.handleClick}>
      <div className="requisite-text">
        {requisite}
      </div>
    </div>
    );
  }
  render(){
    return(
    <div className="requirements">
      {this.theRequisites}
    </div>
    );
  }
}

export default Requirements;
