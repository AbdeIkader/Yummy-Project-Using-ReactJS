import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
  const [itemsDetails, setItemsDetails] = useState([])
  let params = useParams();
  console.log(params);

  let getItemDetails=async()=>{
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    setItemsDetails(data.meals);
    console.log(data.meals);
  }
  useEffect(() => {
    getItemDetails();
  }, [])
  console.log(itemsDetails);
  return (
    <>
    {/* <div className="row">
      
        <h2>{itemsDetails.strSource}</h2>
        Details
    </div> */}
  <div>
  {itemsDetails.map((item,index)=>
  <div key ={index} className="row m-auto p-5"> 
      
      <div className='item col-md-3'>
        <img className="w-100" src={item.strMealThumb} alt="" />
        <h3 className='text-center'>{item.strMeal}</h3>

      </div>
      <div className="col-md-9">
      <h2 className='fs-1 fw-bold'>Instructions</h2>
      <h6>{item.strInstructions}</h6>
      {/* <h5 className='mt-4 fw-bold'>{`Category: ${item.strCategory}`}</h5> */}
      <div className='d-flex mt-3'>
        <h5 className='fw-bold'>Category:</h5>
        <h5>{item.strCategory}</h5>
      </div>
      <div className='Recipes mt-5'>
        <h5 className='fw-bold'>Recipes :</h5>
        <span className='bg-info m-2 p-2 rounded fw-bold text-black'>{item.strIngredient1}</span>
        <span className='bg-info m-2 p-2 rounded fw-bold text-black'>{item.strIngredient2}</span>
        <span className='bg-info m-2 p-2 rounded fw-bold text-black'>{item.strIngredient3}</span>
        <span className='bg-info m-2 p-2 rounded fw-bold text-black'>{item.strIngredient4}</span>
        <span className='bg-info m-2 p-2 rounded fw-bold text-black'>{item.strIngredient5}</span>
      </div>
      <div className='Recipes2 mt-5'>
      <h5 className='fw-bold'>Recipes :</h5>
      <span className='bg-warning m-2 p-2 rounded text-black'>{item.strMeasure1}</span>
      <span className='bg-warning m-2 p-2 rounded text-black'>{item.strMeasure2}</span>
      <span className='bg-warning m-2 p-2 rounded text-black'>{item.strMeasure3}</span>
      <span className='bg-warning m-2 p-2 rounded text-black'>{item.strMeasure4}</span>
      <span className='bg-warning m-2 p-2 rounded text-black'>{item.strMeasure5}</span>
      <span className='bg-warning m-2 p-2 rounded text-black'>{item.strMeasure6}</span>
      </div>
      <div className='Sources mt-5'>
      
      <button type="button" className="btn btn-primary m-2 p-2"><a className='text-decoration-none text-black' target='_blank' href={item.strSource}>Source</a></button>
      <button type="button" className="btn btn-primary m-2 p-2"><a className='text-decoration-none text-black'  target='_blank' href={item.strYoutube}>Youtube</a></button>
      </div>
      </div>
      
    </div>)}
  </div>
    
    </>
  )
}
