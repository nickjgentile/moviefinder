import React from 'react';
import searchAction from './movieSearchActions';
import getInput from './movieSearchActions';
import detailGet from '../detail/movieDetailActions';
import { withRouter } from 'react-router-dom';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: ''
        }

        this.movieSearch = this.movieSearch.bind(this);
        this.detailGet = this.detailGet.bind(this);
        this.getInput = this.getInput.bind(this);
    }

    movieSearch() {
        this.props.dispatch(searchAction(this.state.userInput))
    }

    detailGet(e) {
        const movieId = e.target.value;
        this.props.dispatch(detailGet(movieId))
        this.props.history.push(`/details/${movieId}`)
    }

    getInput(e) {
        this.setState({ userInput: e.target.value })
    }

    render() {
        var display = this.props.movies.length === 0 ? 'hide' : 'mainList';
        var loadError = this.props.movies.length === 0 && this.props.loading === false;

        if (loadError) {
            return (
                <div>
                    <h1>Movie Finder</h1>
                    <div className="form-group row">
                        <label htmlFor="searchbar" className="col-10 col-form-label">Search For Movies!</label>
                        <div className="col-12">
                            <input className="form-control col-12" onChange={this.getInput} type="search" id="searchbar" /><br />
                            <button type="submit" onClick={this.movieSearch} id="gogo" className="btn btn-danger col-2">Go!</button>
                        </div>
                        <p>Please use a valid keyword to search for movies!</p>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <h1>Movie Finder</h1>
                <div className="form-group row">
                    <label htmlFor="searchbar" className="col-10 col-form-label">Search For Movies!</label>
                    <div className="col-12">
                        <input className="form-control col-12" onChange={this.getInput} type="search" id="searchbar" /><br />
                        <button type="submit" onClick={this.movieSearch} id="gogo" className="btn btn-danger col-2">Go!</button>
                    </div>
                    <div className={display}>
                        {
                            this.props.movies.map(movie => {
                                return (
                                    <div className='movieList col-md-4'>
                                        <h2 className='listHeads'> {movie.Title} <small>{movie.Year}</small></h2>
                                        <p className='listPar'>{movie.Type}</p>
                                        <a href={movie.Poster} target="_blank" ><img onClick={this.blowUp} className='movies' src={movie.Poster} /></a>
                                        <button value={movie.imdbID} onClick={this.detailGet} className='btn btn-danger'> Show More Details! </button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieSearchContainer;