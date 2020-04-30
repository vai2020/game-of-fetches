import React from "react";
import axios from "axios";

class CatelynStark extends React.Component {
    constructor(props){
        super(props);
        this.state={
        book: []
    }
}


addPOVBook(responses) {
    let array=[];
       array=responses.map(function (book){
        return book.data.name });
        this.setState({povBooks:array});
  }

  // the following componentDidMount used Promise.all([promise1, promise2, promise3]).then(function(values) {
//console.log(values); to obtain the result.  Promise.all will wait till all promises are resolved or any promise is rejected. It returns a promise and resolve with array of responses. In other to obtain the 3 books, map () method is employed to match the item with index 0, 1 and 2.
componentDidMount() {
    axios.get("https://www.anapioficeandfire.com/api/characters/232")
        .then(res=>{
            Promise.all([
            axios.get(res.data.povBooks[0]),
            axios.get(res.data.povBooks[1]),
            axios.get(res.data.povBooks[2]),
            ]).then(responses => {
            let array= responses.map(book=>{
             return book.data.name;
            })
            this.setState({book:array});
            console.log(this.state.book)
             })
            }).catch(error=>{
            console.log(error);
            })

            }

            render() {
            return(
            <div>
                <h1>Q7. What are the titles of Catelyn Stark's three POV books? (Look into Promise.all to request these simultaniously)</h1>
                <h1>A7. The titles of Catelyn Stark's three POV books are:  </h1>

            <h1>{this.state.book[0]}</h1>
            <h1>{this.state.book[1]}</h1>
            <h1>{this.state.book[2]}</h1>
        
        </div>
    )
}}


export default CatelynStark;










