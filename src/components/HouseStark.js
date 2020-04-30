import React from "react";
import axios from "axios";

class HouseStark extends React.Component {
    constructor(props){
        super(props);
        this.state={ 
            bizOwner: " ",
             founderGot: " "
         }
        }
        componentDidMount() {
            axios.get("https://www.anapioficeandfire.com/api/houses/362")
            .then(res => {
                this.setState({bizOwner:res.data.founder})
                console.log(this.state.bizOwner)
                axios.get(this.state.bizOwner)
                .then(result => {
                    this.setState({founderGot: result.data.name}) 
            })
            }).catch(error=>{
               console.log(error);
            })
    
        }
    
        render() {
        return(
            <div>
                <h1>Q6: What's the name of the founder of House Stark? (You have to chain fetch requests!)</h1>
                <h1>A6: the name of the founder of House Stark is: {this.state.founderGot}</h1>   
            </div>
        )
    }
}
export default HouseStark;

