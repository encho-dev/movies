import React,{useEffect,useState} from "react";
import "./Movies.css";

const Movies = () => {
    const [movies, setMovies] =useState(null)
    const [search, setSeach] = useState("");
    const [store, setStore] = useState(
        JSON.parse(localStorage.getItem ("moviesStore"))
       ? JSON.parse(localStorage.getItem ("moviesStore"))
       : []
    );
   console.log(store) ;
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");
   useEffect(() =>{},[]);

   const searchMovies = () =>{
       fetch(`http://api.tvmaze.com/search/shows?q=${search}`)
       .then ((response) =>response.json())
       .then((json) => setMovies(json))
   };
   const addToFav =(movieToAdd) =>{
    if (
        store.map((movieItem) => movieItem.id).indexOf(movieToAdd.id) >=
        0
      ) {
        setError("Movie already in favorite list!");
        setSuccess("");
        return;
      } 
    setStore([...store,movieToAdd]);

       localStorage.setItem("moviesStore", JSON.stringify(store))
       setError("");
    setSuccess("Movie added to favorite list!");
   };
   return (
       <>
       <div className="moviesContainer">
           <div className="searchBox">
               <input 
               value= {search}
               onChange={(event) => setSeach(event.target.value)}
               />
<button onClick={searchMovies}>Search Movie</button>

           </div>
           { search ? (
               <h1> Seach results for {search}</h1>
           ): (
               <h1>Enter name of movie above</h1>
           )}
           <br />
           {error ? (
          <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
        ) : (
          <p style={{ color: "green", fontWeight: "bold" }}>
            {success}
          </p>
        )}
       <div
       style ={{
           display:"flex",
           flexWrap: "wrap",
           alignItems:"flex-start",
           justifyContent:"center",
       }}
       >
{movies?.map((movie) =>{
    return(
        <div
        style={{
            height:"200px",
            margin:"10px",
            borderEndEndRadius:"10Px",
            marginBottom:"80px",
        }}
        >
            <img
            style={{
                width:"100px",
                height:"100px",
                borderEndEndRadius:"10px",
            }}
            src={movie?.show.image?.medium}
            />
            <button
            className="addButton"
            onClick={() => addToFav(movie.show)}
            >
                add
            </button>
            </div>
    );
})}
</div>
</div>
</>
)
};

export default Movies;