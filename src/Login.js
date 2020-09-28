import React, { useState } from 'react'
import './Login.css'
import db from './firebase';
import { Link, useHistory } from "react-router-dom"
import {useDispatch} from "react-redux";
import {addUser} from './action'
function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const dispatch = useDispatch()
    //!accrdng to es7 arrow functn
    const signin = e => {
        e.preventDefault();

        db.auth().signInWithEmailAndPassword(email, password).then((e) => {
            console.log("users is successfully sign in")
            dispatch(
                addUser(e.user.displayName)
            )

            /*
            const signin = (e) =>
    {
        e.preventDefault();
        db.auth().signInWithEmailAndPassword(email,password).then((e)=>{
            console.log("Signed IN")
            dispatch(
                addUser(e.user.displayName)
            )
            history.push('/');// client side rendering to HOME PAGE

        }).catch((err)=>{
            if(err){
                console.error(err)
            }
            else{
                console.log("Signed IN SuCCESSFULLY")
            }
        })

    }

            */
            history.push('/');

        })
            .catch((err) => {
                if (err) {
                    console.log("error occured")
                }

                else {
                    console.log("successfully sign in")
                }

            })

    }
    // accodng to es6 functn
    // function signin(e) {

    // }
    return (
        <div className="login" >
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />


                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button className="login__signInButton" type="submit"
                        onClick={signin}>SignIn</button>
                </form>
                <p>By Signing-in, you agree to Amazon FAKE CLONE Conditions of Use and Privacy Notice. </p>

                <Link to="/signup">
                    <button

                        className="login__registerButton"> Create Your New Account</button>
                </Link>
            </div>
        </div>


    )
}

export default Login
