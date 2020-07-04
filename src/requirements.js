import React from 'react';
import './requirements.css'
class Requirements extends React.Component{
  constructor(props){
    super(props);
    this.state = {filtered: false};
    this.filter = this.filter.bind(this);
    this.requirements = props.requisites;
    this.theRequisites = this.requirements.map((requisite)=>
    <div key={requisite.toString()} className="requisite" onClick={this.filter}>
      <div className="requisite-text">
        {requisite}
      </div>
    </div>
    );
  }
  filter(){
    this.setState(state => ({
      filtered: !state.filtered
    }));
    console.log("click")
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
