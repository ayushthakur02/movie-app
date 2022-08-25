import React from 'react';
import '../Main.css'

export default function Main(props) {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    let rating_class;
    if(props.rating <= 4) {
        rating_class = 'red'
    }
    else if(props.rating > 4 && props.rating <=7 ) {
        rating_class = 'orange'
    }
    else {
        rating_class = 'green'
    }
    return(
        <div className="main">
            <div className="movie">
                <img 
                src={props.poster_path ? (IMG_PATH+props.poster_path) : 
                    "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} 
                alt={props.title} />
                <div className="movie-info">
                    <h3>{props.title}</h3>
                    <span className={rating_class}>{props.rating}</span>
                </div>
                <div className="overview">
                    <h3>Overview</h3>
                    <p>{props.overview}</p>
                        
                </div>
            </div>
        </div>
        
    )
}