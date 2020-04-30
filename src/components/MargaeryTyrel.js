import React from "react";
import axios from "axios";

class MargaeryTyrel extends React.Component {
constructor(props){
    super(props);
   this.state={
       bornIn: ""
   }
}

    componentDidMount() {
        axios.get("https://anapioficeandfire.com/api/characters/16")
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
            <h1>Q1: When was Margaery Tyrell born?</h1>
          
            <h1>A1: Margaery Tyrell was born: {this.state.bornIn}</h1>   
        </div>
    )
}
}
export default MargaeryTyrel;










