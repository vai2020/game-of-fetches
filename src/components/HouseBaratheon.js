import React from "react";
import axios from "axios";

class HouseBaratheon extends React.Component {
    constructor(props){
        super(props);
        this.state={ 
            second: ""
         }
        }
        componentDidMount() {
            axios.get("https://www.anapioficeandfire.com/api/houses/17")
            .then(res => {
            
                this.setState({second: res.data.seats[1]});
                console.log(this.state.second)   //handle success
    
            }).catch(error=>{              //handle error
            console.log(error);

        })
        }
        render() {
        return(
            <div>
                <h1>Q4: What is the second seat of House Baratheon?</h1>
                <h1>A4: The second seat of House Baratheon is : {this.state.second}</h1>   
            </div>
        )
    }

}

export default HouseBaratheon;
