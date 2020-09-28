import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {useState} from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import {addUser} from './action'
import db from './firebase'
import cartReducer from './Reducer/cart';

function Navbar() {

    const [name,setName]=useState('')
    const history=useHistory();
    const dispatch = useDispatch()

    const authReducer=useSelector(state=>state.authReducer)
    const cartReducer=useSelector(state=>state.cartReducer)

    const signout=(e)=>{
        e.preventDefault()
        db.auth().signOut().then((e)=>{

            dispatch(
                addUser(null)
            )
        }).catch((error)=>{

        })

     
    }
    return (
        <div className="navbar">
           
            {/* <h1>i am navbar</h1> */}
            <Link to="/">

            <img 
                    className="navbar__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt=""/>
                    </Link>
             <div className="navebar__search">
              <input className="search__input" type="text"/>
               <SearchIcon className="search__icon"/>
             </div> 

             <div className="navbar__nav">
             <Link to="/login" className="navbar__link" >
                 <div className="navbar__option">
                     <span className="navbar__option1">
                         Hello {authReducer}</span>

                         {
                             authReducer? <span onClick={signout} className="navbar__option2">Sign Out</span>
                                        :<span className="navbar__option2">Sign In</span> 


                         }
                     
                     
                 </div>
                 </Link>

                 <Link to="/">

                 <div className="navbar__option">
                     <span className="navbar__option1">
                         Return
                     </span>
                     <span className="navbar__option2">
                         Orders
                     </span>
                 </div>
                 </Link>
                 <Link to="/">
                 <div className="navbar__option">
                     <span className="navbar__option1">
                         Your
                     </span>
                     
                     <span className="navbar__option2">
                         Prime
                     </span>
                 </div>
                 </Link>
                 <Link to="/checkout">

                 <div className="navbar__cart">
                     <ShoppingCartOutlinedIcon/>
                    <span> {cartReducer.length}</span>
                 </div>
                 </Link>
             </div>

        </div>
    )
}

export default Navbar
 