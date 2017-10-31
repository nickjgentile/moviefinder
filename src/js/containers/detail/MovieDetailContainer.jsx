import React from 'react';
import { withRouter } from 'react-router-dom';
import getDeets from './movieDetailActions';

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    componentWillMount() {
        const missingMovieData = this.props.loading === false && this.props.title === '';
        const movieId = this.props.match.params.id;
        if (missingMovieData) {
            this.props.dispatch(getDeets(movieId))
        }
    }

    goBack() {
        this.props.history.push('/')
    }



    render() {
        return ( 
            <div className='detailPage'>
                <h1>Movie Details</h1>

                <button onClick={this.goBack} className='btn btn-danger'> Go Back </button>
                <div className='detailMain'>
                    <h2>{this.props.title}</h2>
                    <img src={this.props.poster} />
                    <h5>Movie Information</h5>
                    <ul>
                        <li><strong>Rated:</strong> {this.props.rated}</li>
                        <li><strong>Released:</strong> {this.props.released}</li>
                        <li><strong>Runtime:</strong> {this.props.runtime}</li>
                        <li><strong>Grenre(s):</strong> {this.props.genre}</li>
                        <li><strong>Directed By:</strong> {this.props.director}</li>
                        <li><strong>Written By:</strong> {this.props.writer}</li>
                        <li><strong>Starring:</strong> {this.props.actors}</li>
                        <li><strong>Language:</strong> {this.props.language}</li>
                    </ul>
                    <h5> Movie Ratings </h5>
                    <ul>
                        {
                            this.props.metascore.map(score => {
                                return (
                                    <li className="score">{score.Source}: <strong>{score.Value}</strong></li>
                                );
                            })
                        }
                    </ul>
                    <blockquote><p><em>{this.props.plot}</em></p></blockquote>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieDetailContainer);
