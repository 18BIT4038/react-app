import React,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import {store} from './App';

const Home = () => {
  const [auth,setAuth] = useContext(store);
  const [data,setData] = useState([]);
  useEffect(() =>{
    fetch('https://run.mocky.io/v3/080707b6-f846-421a-a0e1-108bb3315530').then(
      res => res.json()
    ).then(jsonData => setData(jsonData)).catch(err => console.error(err))
  })
  if(!auth){
    return <Redirect to='/login' />
  }
  return (
    <div>
              <center>
          {data.length>=1 ?
          data.map(item =>
            <div>
            <div className='card user-container'>
              <div className='card-body'>
                  <h5 className='card-title'>
                    <Link to={`/indv/${item.name}`}>{item.name}</Link></h5>
              </div>
            </div>
            </div>
           )
          :
          <h5>Loading...</h5>
        }
    
        </center>
    </div>
  )
}

export default Home;
