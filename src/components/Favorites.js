import React, {useEffect, useState} from "react";
import{Link} from "react-router-dom";
import "./Movies.css";

const Favorites = () => {
    const [movies, setMovies] =useState (
       JSON.parse(localStorage.getItem("moviesStore"))  
    );
    const[search, setSearch] = useState("");
    const[store, setStore] = useState();

    useEffect(() => {}, []);

    console.log(movies)
    return (
        <>
        <div className="favoritesContainer">
            <h1>My movie List</h1>
            <div
            style={{
                display:"flex",
                flexWrap: "wrap",
                alignItems:"flex-start",
                justifyContent:"center",
                
                
            }}
            >
                {movies?.map ((movie, i) =>{
                    return(
                        <Link key={i} to={`/movie/${movie?.id}`}>
                            <div
                            style={{
                                height:"200px",
                                margin:"10px",
                                borderRadius:"50px",
                            }}
                            >
                                <img
                                style={{
                                    width:"100%",
                                    height:"100%",
                                    borderRadius:"10px",
                                    
                                }}
                                src={movie?.image?.medium}
                                />

                            </div>
                        </Link>
                    );
                 })}     
            </div>
        </div>
        </>
    );
};

export default Favorites;