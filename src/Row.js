import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import "./row.css"
import movieTrailer from "movie-trailer"

const Row = (props) => {
    const imgUrl = "https://image.tmdb.org/t/p/original"
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(props.fetchUrl)
            setMovies(res.data.results)
        }
        fetchData()
    }, [props.fetchUrl])
    const opts = {
        height: "390",
        width: "99%",
        playerVars: {
          autoplay: 0,
        }
      }
    

      const trailerHandler = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        }
        else {
            movieTrailer(movie?.title || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).searchParams)
                setTrailerUrl(urlParams.get("v"))
            })
            .catch((e) => console.log(e))
            
        }
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className={`row_posters`}>
                {movies.map(movie => (
                    <img src={imgUrl + (props.isLarge ? movie.poster_path : movie.backdrop_path)}
                        alt={movie.name}
                        className={`row_poster  ${props.isLarge && "row_posterLarge"}`}
                        key={movie.id}
                        onClick = {() => trailerHandler(movie)}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
}

export default Row;
