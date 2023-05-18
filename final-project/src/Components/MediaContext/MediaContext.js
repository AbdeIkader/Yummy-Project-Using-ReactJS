import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let MediaContext = createContext(null);

export default function MediaContextProvider(props){

    let [trendingMeals, setTrendingMeals] = useState([])
    let [trendingTVs, setTrendingTvs] = useState([])
    let [trendingPeople, setTrendingPeople] = useState([])

  let getTrendingItems=async(mediaType,callback)=>{
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${mediaType}`);
    callback(data.meals);
    console.log(data.meals);
  }

  useEffect(() => {
    getTrendingItems('c=Seafood',setTrendingMeals);
    getTrendingItems('a=Canadian',setTrendingTvs);
    getTrendingItems('i=chicken_breast',setTrendingPeople);
  }, []);
    return <MediaContext.Provider value ={{trendingMeals,trendingTVs,trendingPeople}}>
        {props.children}
    </MediaContext.Provider>

}