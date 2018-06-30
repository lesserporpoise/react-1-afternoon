import React, {Component} from 'react';

class EvenAndOdd extends Component{
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input type="text" className="inputLine" value={this.state.userInput}onChange={(e)=>this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={()=>{this.splitter()}}>Split</button>
                <span className="resultsBox">Evens : [{this.state.evenArray.join(", ")}]</span>
        <span className="resultsBox">Odds : [{this.state.oddArray.join(", ")}]</span>
            </div>

        )
    }
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }

    }
    handleChange(input){
        this.setState({userInput:input});
    }
    splitter(){
        let splitMe = this.state.userInput;
        let arrEvens = []
        let arrOdds = []
        let splitMe1 = splitMe.split(",")
        for (let i = 0; i < splitMe1.length; i++){
            if(splitMe1[i]%2===0){arrEvens.push(splitMe1[i])}
            else {arrOdds.push(splitMe1[i])}}
        this.setState({evenArray:arrEvens,
                       oddArray:arrOdds,
                            userInput:""})
                                              
        
        

        }
    }

export default EvenAndOdd;