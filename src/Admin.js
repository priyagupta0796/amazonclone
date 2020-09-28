import React,{useState} from 'react'
import './Admin.css'
import db from './firebase';
import { Link,Redirect,useHistory } from 'react-router-dom'
import { CodeSharp } from '@material-ui/icons';
import  {addadmin}  from './action'
import {useDispatch} from "react-redux";

function Admin() {




    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history=useHistory();
    const dispatch=useDispatch();
    const signin =e=>{
        e.preventDefault();
        if(userName==="piyuadmin@gmail.com"){

                db.auth().signInWithEmailAndPassword(userName,password)
                .then((e)=>{

                    dispatch(
                        addadmin(e.user.email)
                    )
                    history.push('/admindashboard')

                })
                .catch((error)=>{
                    if(error){
                        alert(error.message)
                    }
                });
       } else{
           alert("Wrong credentials")
       }

        


            
       
    }
    return (
       
             <div className="admin" >
            <Link to="/">
                <img 
                    className="admin__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    />
            </Link>

            <div className="admin__container">
                <h1>Admin Sign In</h1>
                <form>
                    <h5>Username</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Usenamw"
                        value={userName} 
                        onChange={e=>setUserName(e.target.value)}
                        />

                    <h5>Password</h5>
                    <input 
                        type="password" 
                        placeholder="Enter Password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        />
                    <button 
                        type="submit"
                        onClick={signin}
                        className="admin__signInButton">
                            SignIn
                    </button>
                </form>
               
            </div>
        </div> 
       
    )
}

export default Admin
