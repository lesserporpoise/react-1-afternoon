import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super()
        this.state={
            num1:0,
            num2:0,
            sum:null
        }
    }
    updateNum1(vala){
        this.setState({num1:vala})
    }
    updateNum2(valb){
        this.setState({num2:valb})
    }
    add(a,b){
        this.setState({sum:(a-0)+(b-0)})
    }

    render(){

            return (
              <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" type="number" onChange={ (e) => this.updateNum1(e.target.value) }></input>
                <input className="inputLine" type="number" onChange={ (e) => this.updateNum2(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.add(this.state.num1, this.state.num2) }> Add </button>
                <span className="resultsBox"> Sum: {this.state.sum} </span>
              </div>
            )
          }
        }
export default Sum;