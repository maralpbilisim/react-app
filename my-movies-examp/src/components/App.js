import React from "react";
import SearchBar from './SearcBar'
import MovieList from './MovieList'
import axios from 'axios'
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: ""
  }

  async componentDidMount(){
   const response=await axios.get("http://localhost:3004/movies")
   this.setState({movies:response.data})
  }
  
  
//AXIOS API
deleteMovie = async (movie) => {
 axios.delete(`http://localhost:3004/movies/${movie.id}`)
  
  const newMovieList = this.state.movies.filter(
    m => m.id !== movie.id
  )
 
  this.setState(state => ({
    movies: newMovieList
  }))    
}
//search movie
  searchMovie=(event)=>{
    console.log(event.target.value)
    this.setState({searchQuery:event.target.value})
  }

  render() {
    let filteredMovies = this.state.movies.filter(
      (movie) => {
          return movie.name.toString().toLowerCase().indexOf(this.state.searchQuery.toString().toLowerCase()) !== -1
      }
  ).sort((a, b) => {
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
  });

    return (
      <Router>

      <div className="container">
          <Switch>
              <Route path="/" exact render={() => (
                  <React.Fragment>
                      <div className="row">
                          <div className="col-lg-12">
                              <SearchBar searchMovieProp={this.searchMovie} />
                          </div>
                      </div>
                      <MovieList
                          movies={filteredMovies}
                        deleteMovieProp={this.deleteMovie} 
                      />
                  </React.Fragment>
              )}>
              </Route>
              <Route path="/add" component={AddMovie} />
          </Switch>
      </div>
      </Router>
    )
  }
}

export default App;