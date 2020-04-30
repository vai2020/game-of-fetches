import React from "react";
import axios from "axios";

class HouseLannister extends React.Component {
    constructor(props){
        super(props);
        this.state={ 
            coat: ""
         }
        }
        componentDidMount() {
            axios.get("https://www.anapioficeandfire.com/api/houses/229")
            .then(res => {
            
                this.setState({coat: res.data.coatOfArms}) 
                console.log(this.state.coat)
            
            }).catch(error=>{
            console.log(error);
            })
        }
        
        render() {
        return(
            <div>
                <h1>Q3: What's the coat of arms of House Lannister?</h1>
                <h1>A3: The coat of arms of House Lannister is: {this.state.coat}</h1>   
            </div>
        )
    }
}

export default HouseLannister;
