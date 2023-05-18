import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import Movies from '../Movies/Movies';
import People from '../People/People';
import Tvshows from '../Tvshows/Tvshows';


export default function Home() {
  // const [trendingItems, setTrendingItems] = useState([])
  // useEffect(() => {
  //   getTrendingItems();
  // }, [])
  

  // let getTrendingItems=async()=>{
  //   let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  //   setTrendingItems(data.categories);
  //   console.log(data.categories)
  useEffect(() => {
    document.title='Home'
  }, [])
  
  return (
    <>
        
      {/* <div className="row">
        <div className="col-md-4 mt-5 p-4">
        <div className={`${styles.brder} w-25 my-3`}></div>
        <h3>Trending</h3>
        <h3>Movies</h3>
        <h3>to watch now</h3>
        <span className={styles.color}>most watched movies by days</span>
        <div className={`${styles.brder} w-100 my-3`}></div>
        </div>
        {trendingItems.map((item,index)=>(
          <div key ={index} className="col-md-2 my-3 py-4">
          <div className="item">
            <img className='w-100' src={item.strCategoryThumb} alt="" />
             <h6>{item.strCategory}</h6> 
          </div>
        </div>
        ))}
      </div> */}
          <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <meta name = "describtion" content='dads'/>
            </Helmet>
      <Movies />
      <Tvshows />
      <People />
    </>
  )

    }