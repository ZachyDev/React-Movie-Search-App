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
         .then(res => {
             console.log(res)
             const data = res.data.results;
             console.log(data)
             this.setState({ movieDb: data})
         })
         .catch(()=> {
             this.setState({ hasError:'something went wrong' })
         })
    }
    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }
    render() {
        const { query,movieDb} = this.state;
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
            <div className="card-list">
               { movieDb.filter(movie => movie.poster_path).map(movie => ( 
                    <div className = "card" key = { movie.id }>
                        <img  
                        className = "card--image" 
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                        />
                        <div className = "card--content">
                            <h2 className = "card--title">{ movie.title }</h2>
                            <p><small>RELEASE DATE: { movie.release_date }</small></p>
                            <p><small>RATING: { movie.vote_average }</small></p>
                            <p className="card--desc"> { movie.overview }</p>
                        </div>
                    </div>
               ))}
             </div>
            </div>
        )
    }
}

export default SearchMovie
