import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super()
        this.state={
            employees:[
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput:"",
            filteredEmployees:[]
        }
    }
    filtonator(prop) {
        var employees = this.state.employees;
        var filteredEmployees = [];
        
        for ( var i = 0; i < employees.length; i++ ) {
          if ( employees[i].hasOwnProperty(prop) ) {
            filteredEmployees.push(employees[i]);
          }
        }
    
        this.setState({ filteredEmployees: filteredEmployees });
      }
    changeHandler(val){
        // tracks changes in the input field
        this.setState({userInput:val})
    }
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.employees,null,10)}</span>
                <input className="inputLine" onChange={(e)=>{this.changeHandler(e.target.value)}}/>
                <button className="confirmationButton" onClick={()=>{this.filtonator(this.state.userInput)}}>Click Me if You Dare</button>
                <span className="resultsBox filterObjectRB">Filtered:{JSON.stringify(this.state.filteredEmployees, null, 10)} </span>
            </div>
        )
    }
}
export default FilterObject;