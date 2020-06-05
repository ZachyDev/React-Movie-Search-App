import React, { Component } from 'react'

class SearchMovie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             movieDb: [],
             hasError: ''
        }
    }
    fetchResult =  (e) => {
        e.preventDefault();
        const  query = "avengers"
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=7bf9c75abbb6e0954ea40e8d52ff1ba4&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => {
            let data = response.json();
            console.log(data);
            this.setState({ movieDb: data})
        })
        .catch(error => {
            this.setState({ hasError: error})
        })
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        const { name } = this.state;
        return (
            <div>
                <form onSubmit = { this.fetchResult }>
                    <label htmlFor="query" className="label">Movie Name</label>
                    <input 
                     type = "text"
                     name = "query" 
                     placeholder = "Search Movie"
                     value = { name }
                     onChange = { this.handleChange }
                     />
                     <button className = "button" type="submit">Search</button>

                </form>
            </div>
        )
    }
}

export default SearchMovie
