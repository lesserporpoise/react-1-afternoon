import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super()
        this.state={
            nopeRope: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            dangerNoodle: []
          };
        }
    tron(){
        let moreNoodles = this.state.dangerNoodle.slice()
        for(let i=0;i<this.state.nopeRope.length;i++){
             if(this.state.nopeRope[i].includes(this.state.userInput)){
                    moreNoodles.push(this.state.nopeRope[i]);}
                    this.setState({dangerNoodle:moreNoodles,userInput:[]});
                    
             }
    }    
    changingStuff(snek){
        this.setState({dangerNoodle:[],userInput: snek})
    }
    render(){
        return(
            <div className ="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy']<br>
                </br>Search Below:</span>
                <input className="inputLine" value={this.state.userInput}onChange={(e)=>this.changingStuff(e.target.value)}/>
                <button className="confirmationButton" onClick={(e)=>this.tron()}>Press for Sneks</button>
                <span className="resultsBox filterStringRB" value={this.state.dangerNoodle}>Found: {this.state.dangerNoodle}</span>
            </div>

        )
    }
}
export default FilterString;