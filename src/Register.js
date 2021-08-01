import React,{useState,useContext} from 'react'
import  Navbar from './Navbar';
import {store} from './App';
import { Redirect } from 'react-router';

const Register = () => {
    const [auth,setAuth] = useContext(store);
    const [data,setData] =useState({
        email:'',
        password:'',
        confirm:'',
    })
    const {email,password,confirm} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        if(password===confirm){
            setAuth(true);
        }
    }
    if(auth){
        return <Redirect to='/dashboard' />
    }
    return (
        <div>
            <Navbar /><br />
            <center>
            <form className="card" onSubmit={submitHandler}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" name="email" onChange={changeHandler}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" onChange={changeHandler}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" name="confirm" onChange={changeHandler}/>
                </div>
                <div className="button-container">
                <button type="submit" class="btn btn-secondary">Submit</button>
                </div>
            </form>
            
            </center>
        </div>
    )
}

export default Register
