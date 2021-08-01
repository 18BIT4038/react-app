import React,{useState,useEffect,useContext} from 'react';
import {store} from './App';
import { Redirect } from 'react-router';

const Individual = ({match}) => {
    const [auth,setAuth]=useContext(store);
    const [indv,setIndv] = useState([]);
    useEffect(() =>{
        fetch('https://run.mocky.io/v3/080707b6-f846-421a-a0e1-108bb3315530').then(
        res => res.json()
        ).then(jsonData => {
            let obj = jsonData.filter(item => match.params.name===item.name)
            setIndv(obj)
        } ).catch(err => console.error(err))
    })
    if(!auth){
        return <Redirect to='/login' />
    }
    return (
        <div>
            <center>
            {indv.length>=1 ?
            <div className="card user-details-container">
                <div className="card-body">
                <h5 className="card-title">{indv[0].name}</h5>
                <p className="user-details">Age : {indv[0].age}</p>
                <p className="user-details">first name : {indv[0].firstName}</p>
                <p className="user-details">last name : {indv[0].lastName}</p>
                </div>
            </div>    
            : 
            <h5>User not found</h5>
        }
        </center>
        </div>
    )
}

export default Individual
