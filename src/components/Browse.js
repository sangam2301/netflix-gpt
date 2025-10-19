import Header from "./Header";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";

const Browse = () =>{

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () =>{
        const data = await fetch(
            "",
            API_OPTIONS
        );
       const json = await data.json();
       console.log(json.results); 
       dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() =>{
        getNowPlayingMovies();

    },[])
    return <div>
        <Header/>
    </div>
};

export default Browse;