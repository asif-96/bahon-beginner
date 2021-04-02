import React, { useContext, useState } from 'react';
import './Login.css';
import github from '../../images/github.png';
import google from '../../images/google (1).png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    // Google authentication
    const provider = new firebase.auth.GoogleAuthProvider();
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // User login by google authentication
    const handleGoogleLogIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
                // console.log(displayName, email, photoURL);
            }).catch(e => {
                console.log(e.message);
            });
    }


    // Github Authentication
    var githubProvider = new firebase.auth.GithubAuthProvider();
    // User login by github authentication

    const handleGithubLogIn = () => {
        firebase
            .auth()
            .signInWithPopup(githubProvider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(displayName, email, photoURL);
                // ...
            }).catch((e) => {
                console.log(e.message);
            });
    }


    ///////////// Login and Signup ////////////////
    // const [newUser, setNewUser] = useState(false);

    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     photo: '',
    //     error: ''
    // })

    // // Form Validation
    // const validation = (e) => {
    //     // console.log(e.target.name, e.target.value);
    //     let isFormValid = true;
    //     // let checkPassword = true;
    //     let p1, p2 = true;
    //     let confirmPasswordHasNumber, passwordHasNumber;
    //     if(e.target.name === 'email'){
    //         isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    //         // const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
    //         // console.log(isEmailValid);
    //     }
    //     if(e.target.name === 'password'){
    //         const isPasswordValid = e.target.value.length > 7;
    //         passwordHasNumber = /\d{1}/.test(e.target.value);
    //         p1 = passwordHasNumber && isPasswordValid;
    //         // if(e.target.name === 'confirmPassword'){
    //         //     const isConfirmPasswordValid = e.target.value.length > 7;
    //         //     confirmPasswordHasNumber = /\d{1}/.test(e.target.value);
    //         //     p2 = confirmPasswordHasNumber && isConfirmPasswordValid;
    //         // }
    //         // isFormValid = (passwordHasNumber === confirmPasswordHasNumber) &&  (p1 && p2);
    //         // console.log(passwordHasNumber);
    //     }
    //     if(e.target.name === 'confirmPassword'){
    //         const isConfirmPasswordValid = e.target.value.length > 7;
    //         confirmPasswordHasNumber = /\d{1}/.test(e.target.value);
    //         p2 = confirmPasswordHasNumber && isConfirmPasswordValid;
    //     }
    //     isFormValid = (passwordHasNumber === confirmPasswordHasNumber) &&  (p1 === p2);
    //     console.log(isFormValid);
    //     if(isFormValid){
    //         const newUserInfo = {...user};
    //         newUserInfo[e.target.name] = e.target.value;
    //         setUser(newUserInfo);
    //     }
    // }


    // Submit Form
    // const handleSubmitForm = (e) => {
    //     if(newUser && user.name && user.email && user.password && user.confirmPassword){
    //         // console.log(user.email, user.password);
    //         firebase.auth().createUserWithEmailAndPassword(user.name, user.email, user.password, user.confirmPassword)
    //         .then((res) => {
    //             console.log(res)
    //             const newUserInfo = {...user};
    //             newUserInfo.error = '';
    //             newUserInfo.success = true;
    //             setUser(newUserInfo);
    //         })
    //         .catch((error) => {
    //             const newUserInfo = {...user};
    //             newUserInfo.error = error.message;
    //             newUserInfo.success = false;
    //             setUser(newUserInfo);
    //             // console.log(error.message);
    //         });
    //     }

    //     if(!newUser && user.email && user.password){
    //         firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    //         .then((res) => {
    //             console.log(res)
    //             const newUserInfo = {...user};
    //             newUserInfo.error = '';
    //             newUserInfo.success = true;
    //             setUser(newUserInfo);
    //         })
    //         .catch((error) => {
    //             const newUserInfo = {...user};
    //             newUserInfo.error = error.message;
    //             newUserInfo.success = false;
    //             setUser(newUserInfo);
    //             // console.log(error.message);
    //         });
    //     }
    //     e.preventDefault();
    // }


    return (
        <div className="login-container">
            <div className="form-container">
                <h3 className="text-dark">Login</h3>
                <form>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <div className="select-command mb-3 mt-3">
                        <p><input type="checkbox" /> Remember Me</p>
                        <p className="forgot-password">Forgot Password</p>
                    </div>
                    {/* <button type="button"  onClick={handleSubmitForm} className="btn btn-success mt-2">Login</button> */}
                    <input type="submit" className="btn btn-success mt-2" value="Login" />
                </form>
                {/* <p className="text-danger">{user.error}</p> */}
                <p className="text-center mt-2">Don't have an account? <Link to="/signup">Create an account</Link></p>
                <h6 className="text-center">------ Or ------</h6>
                <button className="mt-3 mb-2 p-1" onClick={handleGithubLogIn}>
                    <img src={github} alt="" width="40" height="40" /> Continue with Github
                </button>
                <button className="mt-3 p-1" onClick={handleGoogleLogIn}>
                    <img src={google} alt="" width="35" height="35" /> Continue with Google
                </button>
            </div>
        </div>

    );
};

export default Login;