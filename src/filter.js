
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
      let filter_item = e.target.innerHTML;
      let filtered_items = this.state.activeFilters;
      let alreadyFiltered = filtered_items.find(element => element == filter_item);
      if(alreadyFiltered){
        console.log(`${filter_item} is already filtered`);
      }else{
        e.target.classList.add("filtered");
        filtered_items = this.state.activeFilters.concat(filter_item);
        this.setState(state =>({
          activeFilters: filtered_items
        }));
        console.log(filtered_items);
        console.log(`We just added, ${filter_item}`);
      }
  }

  clearBtn(){
    const filters = document.getElementsByClassName('formOption');
    for(let i = 0; i<filters.length; i++){
      if(filters[i].classList.contains('filtered')){
        filters[i].classList.remove('filtered');
      }
    }
    let empty = [];
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
