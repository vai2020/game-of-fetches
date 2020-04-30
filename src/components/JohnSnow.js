import React from 'react';
import axios from 'axios';


class JohnSnow extends React.Component {
    constructor(props){
        super(props);
        this.state={ 
            bornIn: []
         }
        }
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
                <h1>Q0: When was John Snow born?</h1>
                <h1>A0: John Snow was born: {this.state.bornIn}</h1>   
            </div>
        )
    }

}

export default JohnSnow;