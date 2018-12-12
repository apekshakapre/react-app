import React, { Component } from 'react';
import { getMovies} from '../services/fakeMovieService';
import { getGenres} from '../services/fakeGenreService';

import Like from "./like";
import ListGroup from './listGroup';





class Movies
 extends Component {
    state = { 
        movies: [],
        generes:[]

     }
     handleDelete=movie=>{
        const movies=this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies});
        };
      
        constructor(props) {
            super(props)
            this.handleOnSubmit = this.handleOnSubmit.bind(this);
        };

        handleOnSubmit=()=>{
            
                var path = "/logOut";
                this.props.history.push(path);
        }
        handleLike=movie=>{
          const movies=[...this.state.movies];
          const index=movies.indexOf(movie);
          movies[index]={...movies[index]}
          movies[index].liked=!  movies[index].liked
          this.setState({movies});

        };
        componentDidMount(){
            this.setState({movies:getMovies(), generes:getGenres()});
        };

        handleGenreSelect=genre=>{
            this.setState({selectedGenre : genre})

        }


    render() { 
        const {length:count}=this.state.movies;
       if(count===0)
       return<p>there are no movies in list</p>
     


        return(
            <React.Fragment>
            
        <div className="row">
        <div className="col-2">
        <ListGroup items={this.state.generes}
        selectedItem={this.state.selectedGenre}
         onItemSelect={this.handleGenreSelect}/>
        </div>
        <div className="col">
        <p>Showing" {count}" MOVIES in database </p>
         <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie=><tr
                key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like liked={movie.liked} onClick={()=>this.handleLike(movie)}/></td>
                    <td>
                        <button onClick={()=>this.handleDelete(movie)} className="btn btn-danger bt-sm">Delete</button>
                       
                 </td>
                </tr>
                )}
                <div className="row">
            
            </div>
            <nav class="navbar navbar-light bg-light">
  <form className="form-inline">
    <button className="btn btn-outline-primary my-2 my-sm-0" onClick={this.handleOnSubmit} type="button" children="Log Out">Logout</button>
  </form>
</nav>
            </tbody>
        </table>
        </div>
        </div>
        </React.Fragment>
        )}
}
 
export default Movies
;