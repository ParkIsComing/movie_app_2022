import React from "react";
import propTypes from "prop-types";
import './Movie.css';
import { Link } from 'react-router-dom';
 
function Movie({title, year, summary, poster,genres}){
    return (
        <div className="movie">
            <Link to={{/*여기로 연결*/
                pathname: '/movie-detail',
                state: {year, title, summary, poster, genres},
            }}>
            <img src={poster} alt={title} title={title}></img> 
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre,index)=> {
                        return (
                        <li key={index} className="movie__genre">
                        {genre}
                         </li>
                        );
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p> {/*요약문은 180자로 제한하고 끝엔 ... 추가*/}
            </div>
            </Link>
        </div>

    );
}

Movie.propTypes = {
    year:propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    poster: propTypes.string.isRequired,//이미지 주소 사용해서 이미지 추가할 거라 string임
    genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;