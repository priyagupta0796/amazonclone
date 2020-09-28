import React, { useEffect, useState } from 'react'
import './Checkout.css'
import {useDispatch} from "react-redux";
import {useSelector} from 'react-redux';
import { removefrombasket } from './action';

function Checkout() {
    const dispatch=useDispatch();

    const [price, setprice] = useState(0);

    useEffect(() => {
        let x=0;
        cartReducer.map((product)=>{
                x+=parseInt(product.price)
        })
        setprice(x)
    }, [])
    function remove(product){
        let newPrice=price;
        //``console.log(product);
        for(let i in cartReducer){
            if(cartReducer[i].title==product){
                newPrice=newPrice-cartReducer[i].price;
                cartReducer.splice(i,1)
            }
        }
       
        setprice(newPrice)
        dispatch(
            removefrombasket(cartReducer)
        )

    }


    const  cartReducer=useSelector(state=>state.cartReducer);
    return (
        <div className="checkout_page">
            {
                cartReducer.length>0?<button>Pay Rs {price}</button>
                                    :<p></p>
            }
           {
           cartReducer.length>0
            ?<div className="checkout_data">
                {
                    cartReducer.map((product)=>(
                        <div className="checkout_display">
                            <h1>Title:{product.title}</h1>
                            <h2>Price:{product.price}</h2>
                            <h3>Rate:{product.rate}</h3>
                            <img src={product.image} alt=""/>
{/* there is diffrence between backt(`)icks and single 
quotes(') and for string manupulation we use backticks rather than single quotes.
Back ticks are found above tab key```````👈...ye kse pta chhlta ki kb kya use krna..... JSX me backticks hi use hoti h 
mostly
jha pr string manipulation ksa kam hota h vha hm, use krte h bqack ticks. OK



()=>remove(`${product.title}`) this is equal to
function(){ // ananonymus function or you can also say is callback function 

   remove( `${product.title}`)
}

*/}
                            <button onClick={()=>remove(`${product.title}`)}>Remove from cart</button>
                        </div>

                        
                    ))

                }
             </div>
             :<div>
                 <h1>your card is empty</h1>
              </div> 
            }
            
            
        </div>
    )
}

export default Checkout

