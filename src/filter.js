
import React from 'react';
import './filter.css';

class Filter extends React.Component{
  constructor(props){
    super(props);
    this.state = {filterItems: ['Senior','Midweight','Junior',
                                'Front-End', 'Back-End', 'FullStack',
                                'HTML', 'CSS', 'JavaScript', 'Ruby', 'Python',
                                'Sass','React','Vue','RoR','Django']};
    this.filter = this.filter.bind(this);
    this.clearBtn = this.clearBtn.bind(this);
  }

  filter(e){
    let filter_item = e.target;
    if(filter_item.classList.contains('filtered')){
      filter_item.classList.remove('filtered');
    }else{
    filter_item.classList.add('filtered');
    }
  }

  clearBtn(){
    const filters = document.getElementsByClassName('formOption');
    console.log(filters.length);
    for(let i = 0; i<filters.length; i++){
      if(filters[i].classList.contains('filtered')){
        filters[i].classList.remove('filtered');
      }
    }
    }


  render(){

    return(
      //Filter set to hide by default
      <div id="filter" className="show">
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
    );
  }
}

export default Filter;
