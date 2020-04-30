import React from "react";
import axios from "axios";

class  RobertBaratheon  extends React.Component {
    constructor(props){
        super(props);
        this.state={ 
           dba : ""
         }
        }
        componentDidMount() {
            axios.get("https://www.anapioficeandfire.com/api/characters/901")
            .then(res => {
            
                this.setState({dba: res.data.aliases[1]}) 
                console.log(this.state.dba)
    
            }).catch(error=>{
                console.log(error);
            })

        }
        render() {
        return(
            <div>
                <h1>Q5: What is Robert Baratheon's second alias?</h1>
                <h1>A5: Robert Baratheon's second alias: {this.state.dba}</h1>   
            </div>
        )
    }

}

export default RobertBaratheon;
