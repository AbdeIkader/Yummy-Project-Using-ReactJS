import React, { useContext } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { MediaContext } from '../MediaContext/MediaContext';
export default function Tvshows() {
  // const [trendingTVs, setTrendingTvs] = useState([])

  // let getTrendingTvs=async()=>{
  //   let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
  //   setTrendingTvs(data.meals)
  //   console.log(data.meals)
  // }

  // useEffect(() => {
  //   getTrendingTvs();
  // }, [])
  
        
  
  let {trendingTVs} = useContext(MediaContext);
  return (
    <>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Tvshows</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="row py-4 g-3">
      <div className="col-md-4">
        <div className='brder w-25 mb-3'></div>
        <h3>Trending</h3>
        <h3> Seafood Meals</h3>
        <h3>to eat now</h3>
        <span className='text-muted'>most watched meals by days</span>
        <div className='brder w-75 mt-3'></div>

      </div>

      {trendingTVs.slice(0,10).map((item,index)=><div key ={index} className='col-md-2'>
      <Link className='nav-link' to ={`/details/${item.idMeal}/${item.strMeal}`}>
        <div className="item position-relative">
          <img className="w-100 gy-5" src={item.strMealThumb} alt="" />
          <h6>{item.strMeal}</h6>
          <span className='position-absolute top-0 end-0 bg-info p-2'>{item.idMeal}</span>
        </div>
        </Link>
      </div>)}
    </div>
    </>
  )
}
