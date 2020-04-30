import React from 'react';
import axios from 'axios';


class JohnSnow extends React.Component {
    constructor(props){
        super(props);
        this.state={ 
            bornIn: []
         }
        }
        
        //the following componentDidMount  lifecycle used axis.get to make a request to the website to obtain the data for the variable snowBorn
        componentDidMount() {
            axios.get("https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters/583")
            .then(res => { const John = res.data;
                const snowBorn = res.data.born
                console.log(John);
                console.log(snowBorn);

                this.setState({bornIn: snowBorn}) 

            })

        }
        render() {
        return(
            <div>
                <h1>Q: When was John Snow born?</h1>
                <h1>A: John Snow was born: {this.state.bornIn}</h1>   
            </div>
        )
    }

}

export default JohnSnow;