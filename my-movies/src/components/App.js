import React from "react";
import SearchBar from './SearcBar'
import MovieList from './MovieList'

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: ""
  }
  async componentDidMount(){
    const baseURL="http://localhost:3004/movies"
    const response=await fetch(baseURL)
    console.log(response)
    const data=await response.json();
    console.log(data)
    this.setState({movies:data})
  }
  
  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    )
    // this.setState({
    //   movies:newMovieList
    // })
    this.setState(state => ({
      movies: newMovieList
    }))
   
  }
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
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList
          movies={filteredMovies}
          deleteMovieProp={this.deleteMovie} />
      </div>
    )
  }
}

export default App;