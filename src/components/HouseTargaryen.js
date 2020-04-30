import React from "react";
import axios from "axios";

class HouseTargaryen extends React.Component {
    constructor(props){
        super(props);
        this.state={ 
            house: ""
         }
        }
        componentDidMount() {
            axios.get("https://www.anapioficeandfire.com/api/houses/378")
            .then(res => {
            
                this.setState({house: res.data.region}) 
                console.log(this.state.house)
    
            }).catch(error =>{
                console.log(error);
            })

        }
        render() {
        return(
            <div>
                <h1>Q2: What region is House Targaryen in?</h1>
                <h1>A2: House Targaryen is in: {this.state.house}</h1>   
            </div>
        )
    }

}

export default HouseTargaryen;









