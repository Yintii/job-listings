
import React from 'react';
import './filter.css';
import Listings from './listings.js';


class Filter extends React.Component{
  constructor(props){
    super(props);
    this.state = {filterItems: ["Front-End", "Back-End", "Fullstack",
                                "Senior", "Midweight", "Junior",
                                "Full-Time", "Part-Time", "Contract",
                                "HTML","CSS","Sass", "JavaScript","Python",
                                "Ruby","React", "Vue", "Django", "RoR"
                              ],
                  activeFilters: []
                            };

    this.filter = this.filter.bind(this);
    this.clearBtn = this.clearBtn.bind(this);
  }

  filter(e){
    {/*This function currently only changes the color of the filter
      I need to make it sort the content now*/}
    let filter_item = e.target;
    if(filter_item.classList.contains('filtered')){
      filter_item.classList.remove('filtered');
    }else{
    filter_item.classList.add('filtered');
    var addme = this.state.activeFilters.concat(filter_item.innerHTML);
    this.setState(state =>({
      activeFilters: addme
    }));
    console.log(this.state.activeFilters);
    }
  }

  clearBtn(){
    //removes all the styling for the filtered selections
    const filters = document.getElementsByClassName('formOption');
    for(let i = 0; i<filters.length; i++){
      if(filters[i].classList.contains('filtered')){
        filters[i].classList.remove('filtered');
      }
    }
    var empty = [];
    this.setState(state=>({
      activeFilters: empty
    }));
    }
  render(){
    return(
      //Filter set to hide by default
      <div>
        <div id="filter">
            <ul>
              {this.state.filterItems.map((value, index) => {
                let item = <li key={index} className="formOption" onClick={this.filter}>
                              {value}
                          </li>;
                return item;
              })}
            </ul>
          <div id="clear-btn" onClick={this.clearBtn}>
            Clear
          </div>
        </div>
        <Listings filtration_items={this.state.activeFilters}/>
      </div>
    );
  }
}

export default Filter;
