import React, { Component } from 'react'
import axios from 'axios';
class SearchMovie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             query: '',
             movieDb: [],
             hasError: ''
        }
    }
    fetchResult =  (e) => {
        const { query } =  this.state;
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7bf9c75abbb6e0954ea40e8d52ff1ba4&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => {
            let data = response.json();
            console.log(data);
            this.setState({ movieDb: data.results})
        })
        .catch(error => {
            this.setState({ hasError: error})
        })
    }
    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }
    render() {
        const { query,movieDb,hasError } = this.state;
        const movieList =  movieDb.map(movie => <div key = { movie.id }> <li>{ movie.original_title }</li></div>)

        return (
            <div>
                <form onSubmit = { this.fetchResult }>
                    <label htmlFor="query" className="label">Movie Name</label>
                    <input 
                     type = "text"
                     name = "query" 
                     placeholder = "Search Movie"
                     value = { query }
                     onChange = { this.handleChange }
                     />
                     <button className = "button" type="submit">Search</button>

                </form>
                { movieDb }
            </div>
        )
    }
}

export default SearchMovie
