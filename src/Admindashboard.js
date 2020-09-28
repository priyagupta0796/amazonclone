import React,{useEffect, useState} from 'react'
import './Admindashboard.css'

import db from './firebase'
import {useSelector} from 'react-redux';

import { Link,Redirect ,useHistory} from 'react-router-dom'

function Admindashboard() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [rate, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const history=useHistory();

    const adminReducer = useSelector(state =>state.adminReducer)
    useEffect(() => {
       if(!adminReducer){
           history.push('/admin')
       }
        
    }, [])
    
    

    const add =e=>{
        e.preventDefault();
        db.database().ref("element").push().set({
            title:title,
            description:description,
            imageLink:imageLink,
            rate:rate,
            price:price
        },(e)=>{
            if(e){
                alert(e.message)
            }

            else{
                console.log("data saved")
            }
        })

     
    }
    return (
       
        <div className="admindashboard" >
            <Link to="/">
                <img 
                    className="admindashboard__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    />
            </Link>

            <div className="admindashboard__container">
                <h1>Add Elements</h1>
                <form>
                    <h5>Title</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Title"
                        value={title} 
                        onChange={e=>setTitle(e.target.value)}
                        />

                    <h5>Description</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Description"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        />
                    <h5>Image Link</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Image Link"
                        value={imageLink}
                        onChange={e=>setImageLink(e.target.value)}
                        />
                    <h5>Rating</h5>
                    <input 
                        type="number" 
                        placeholder="Enter Rating"
                        value={rate}
                        onChange={e=>setRating(e.target.value)}
                        />

                <h5>Price</h5>
                    <input 
                        type="number" 
                        placeholder="Enter Price"
                        value={price}
                        onChange={e=>setPrice(e.target.value)}
                        />

                    <button 
                        type="submit"
                        onClick={add}
                        className="admindashboard__signInButton">
                            Add
                    </button>
                </form>
               
            </div>
        </div> 
       
    )
}

export default Admindashboard
