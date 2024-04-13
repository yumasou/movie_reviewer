import React from "react";
import { fetchMovieList } from "../features/MoiveListSlice";
import {useDispatch} from 'react-redux'
function Home() {
  const dispatch=useDispatch()
  const handleClick=()=>{
    dispatch(fetchMovieList())
  }
  return (
    <div className="">
      <div> <button onClick={handleClick} className="rounded bg-purple-500">Fetch Data</button></div>
      Home
    </div>
  );
}

export default Home;
