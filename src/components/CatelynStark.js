import React from "react";
import axios from "axios";

class CatelynStark extends React.Component {
constructor(props){
    super(props);
   this.state={
       books: ""
   }
}

    componentDidMount() {
        axios.get("https://www.anapioficeandfire.com/api/characters/232")
        .then(res => {
           
            this.setState({bornIn: res.data.born}); 
             console.log(this.state.bornIn)
        }).catch(error=>{
            console.log(error);
        })
    }

    render() {
    return(
        <div>
            <h1>Q7: What are the titles of Catelyn Stark's three POV books? (Look into Promise.all to request these simultaniously)</h1>
          
            <h1>A7: The titles of Catelyn Stark's three POV books are: {this.state.bornIn}</h1>   
        </div>
    )  
}
}
export default CatelynStark;

// Promise.all([promise1, promise2, promise3]).then(function(values) {
//     console.log(values);








