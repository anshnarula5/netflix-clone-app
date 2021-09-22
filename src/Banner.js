import React, {useEffect, useState} from 'react';
import axios from './axios';
import requests from './requests';
import "./Banner.css"

const Banner = () => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(requests.fetchNetflixOriginals)
            setMovie(req.data.results[Math.floor(Math.random()*req.data.results.length ) - 1])
        }
        fetchData()
    }, [])
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    const imgUrl = "https://image.tmdb.org/t/p/original"
    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage : `url(${imgUrl +  movie?.backdrop_path})`
            }}
        >
            <div className = "banner_contents">
                <h1 className = "banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My Playlist</button>
                </div>
                <div className="banner_description">
                    <h1>{truncate(movie?.overview, 150)}</h1>
                </div>
            </div>
            <div className = "banner--fadeBottom" />

            
        </header>
    );
}

export default Banner;
