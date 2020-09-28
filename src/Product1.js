import React from 'react'
import './Product1.css'
import { addtoCart } from './action'
import {useDispatch} from "react-redux";
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
function Product1({title,price,rate,image}) {

    const dispatch=useDispatch();
    const authReducer=useSelector(state=>state.authReducer)
    const history = useHistory();

    function  addtoBasket(){

        if(authReducer){
        
        dispatch(addtoCart({

            title:title,
            image:image,
            price:price,
            rate:rate
        }))

    }
    else{

        alert("pls login first")
        history.push('/login')
    }

    }

    return (
        
        <div className="Product1">
            <h1>{title}</h1>
            <h2>{price}</h2>
            <h2>{rate}</h2>
            <img src={image}/>
            <button onClick={addtoBasket}>Add to cart</button>
        </div>
        
    )
}

export default Product1
