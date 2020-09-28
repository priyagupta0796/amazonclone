import React, { useState,useEffect } from 'react'
 import './Home.css'
 import Product1 from './Product1'
import db from './firebase'
import  {addadmin}  from './action'
import {useDispatch} from "react-redux";

function Home() {
  const [data, setdata] = useState([])
  const dispatch=useDispatch();
    useEffect(() => {

      dispatch(
        addadmin(null)
      )
      db.database().ref("element").on("value",(snapshots)=>{
//snapshot mean ye db s value lkr ayga objct k form m ,kch b likh skte h

    let products=snapshots.val();
    let newProduct=[];
    for (let product in products){
      newProduct.push({

          title:products[product].title,
          description:products[product].description,
          imageLink:products[product].imageLink,
          rate:products[product].rate,
          price:products[product].price,
      })

    }

    setdata(newProduct)

      })
      
    }, [])

    return (
        
         <div className="home">

<img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" alt="" className="home__image"/>
           {/* <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/> */}
           <div className="home__row">
           {
             data.map((product)=>(
             
                <Product1
                  title={product.title}
                  price={product.price}
                  rate={product.rate}
                  image={product.imageLink}/>   
               
             
             ))
           }
           </div>

           

         </div>
        
        
          )
}

export default Home
