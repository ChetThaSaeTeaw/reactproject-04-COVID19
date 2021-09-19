import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Register.css';
import { ThaiData } from '../data';


function RegisterP1({ nextPage , textButton }) {

    const baseURL = "https://thaiaddressapi-thaikub.herokuapp.com";
    const [ proV , setproV  ] = useState("");
    const [ DisT , setDisT ] = useState([]);
    const [ postCode , setPostCode ] = useState([]);
    const [ lat , setLat ] = useState([]);
    const [ err , setErr ] = useState("");
   

    useEffect(() => {
         axios.get(`${baseURL}/v1/thailand/provinces`)
        .then((res) => {
          setproV(res.data)
        })
        .catch(err => {
            setErr(err);
        }) 
      }, [])

    useEffect(() => {
        const thaiDistirct = ThaiData.map(({district, lat , lng}) => (
            <option>{district}</option>
        ))
        const thaiPostCode = ThaiData.map(({zip}) => (
            <option>{zip}</option>
        ))
        const thaiLat = ThaiData.map(({lat}) => (
            <option>{lat}</option>
        ))
    setDisT(thaiDistirct);
    setPostCode(thaiPostCode);
    setLat(thaiLat);
      }, [])

      if(!proV) return "No post.";
      if(err) return `Error : ${err.message}`;

    return (
        <div className="nav-register">
            <form className="form-register">
                <h1>Register Page</h1>
                <h1>{err}</h1>
                <div className="box-sub-register">
                    <div className="box-inside">
                        <label>FirstName</label>
                        <input type="text" placeholder="Please Enter Your FirstName" />
                    </div>
                    <div className="box-inside">
                        <label>LastName</label>
                        <input type="text" placeholder="Please Enter Your LastName" />
                    </div>
                </div>
                <div className="box-sub-register">
                    <div className="box-inside">
                        <label>Age</label>
                        <input type="number" placeholder="Please Enter Your Age" />
                    </div>
                    <div className="box-inside">
                        <label>Birth Day</label>
                        <input type="date" />
                    </div>
                </div>
                <div className="box-sub-register">
                    <div className="box-inside">
                        <label>Email Address</label>
                        <input type="email" placeholder="example@hotmail.com" />
                    </div>
                    <div className="box-inside">
                        <label type="number">Mobie Number</label>
                        <input type="number" placeholder="(000-xxx-xxxx)" />
                    </div>
                </div>  
                <div className="box-inside">
                <label>Address</label>
                    <textarea cols="30" rows="5"></textarea>
                </div>  
                <div className="box-sub-register">
                    <div className="box-inside">
                        <label>Provinces</label>
                        <select>
                            {proV.data.map((proVince) => (
                            <option key={proVince.province}>{proVince.province}</option>
                            ))}
                        </select>
                    </div>
                <div className="box-inside">
                        <label>District</label>
                        <select>
                            {DisT}
                        </select>
                    </div>
                </div>
                <div className="box-sub-register">
                <div className="box-inside">
                    <label>Postcode</label>
                    <select>
                       {postCode}
                    </select>
                </div>
                <div className="box-inside">
                    <label>Latitude</label>
                    <select>
                        {lat}
                    </select>
                </div>
            </div>
                <div className="box-sub-register">  
                <button onClick={nextPage} className="resgister-button">{textButton}</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterP1;
