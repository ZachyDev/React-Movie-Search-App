import React, { Component } from 'react'

class SearchMovie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: ''
        }
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
                <form>
                    <label forHtml="query" className="label">Movie Name</label>
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
