import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super()
        this.state=   {
            userInput:"",
            isPalindrome:""
        };
    }
    changeHandler(val){
        this.setState({userInput:val})
    }
    jamesBond(){
        let arr = this.state.userInput.slice(0);
        let newArr = this.state.userInput.slice(0);
        newArr=newArr.split("")
                     .reverse()
                     .join("");

        if(arr === newArr){this.setState({isPalindrome:'true'})}
        else{this.setState({isPalindrome:'false'})}

    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=>this.changeHandler(e.target.value)}/>
                <button className="confirmationButton" onClick={(e)=>this.jamesBond()}>Press for Even More Sneks</button>
                <span className="resultsBox">Is Palindrome? : {this.state.isPalindrome}</span>
            </div>
        )
    }
}
export default Palindrome;

