import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import db from './firebase';


function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const history = useHistory();

    const signup = e => {
        e.preventDefault();
        if (password === confirmPassword) {
            console.log(email)
            console.log(password)

            // USED TO CREATE USER WITH EMAIL N PASSWORD  N GIVE A UID TO EVERY UNIQUE USER
            db.auth()
                .createUserWithEmailAndPassword(email, password)
                .then((e) => {
                    console.log("Sign up successfull");
                    e.user.updateProfile({
                        displayName: name
                    })
                    console.log(e)
                    // USED TO STORE DATA IN DATABASE WITH USERS REFERENCE
                    db.database().ref("Users").child(e.user.uid).set({
                        "name": name,
                        "email": email,
                        "password": password,
                        "uid": e.user.uid
                    }, (err) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            console.log("Data Saved from register")
                            history.push('/')
                        }
                    })
                })
                .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.error(error)
                    alert(error.message);
                    // ...
                  });
        }
        else {
            alert("Password dsnt match")
        }
    }

    return (
        <div className="Register">
            <img className="register_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />

            <div className="register_container">
                <h1>Sign Up</h1>

                <form>
                    <h5>Name</h5>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={e => setName(e.target.value)} />



                    <h5>Email</h5>
                    <input
                        type="Email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />


                    <h5>Password</h5>
                    <input
                        type="Password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />


                    <h5>Confirm Password</h5>
                    <input
                        type="Password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        onClick={signup}
                        className="register__signInButton">
                        SignUp
                </button>

                    <Link to="/login">

                        <button className="register__registerButton"> Already have a account</button>
                    </Link>
                </form>
            </div>


        </div>
    )
}

export default Register
// suno login wle page m auto email pass q le rha h mne to dla b ni
// are vo cache se utha leta h 
//ignore kro  jo save vala option aata h usse  utha