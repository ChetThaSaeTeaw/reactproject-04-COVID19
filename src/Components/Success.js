import React from 'react';
import './Success.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Success() {
    return (
    <React.Fragment>
            <div style={{display:'flex', flexDirection:'column' , justifyContent:'center', alignItems:'center' , padding:'25px', margin:'11% 0'}}>
            <CheckCircleOutlineIcon style={{fontSize:'12rem' , margin:'2% 0'}}/>
                <h1 style={{fontSize:'2rem' , textAlign:'center'}}>Success!</h1>
                <p style={{textAlign:'center' , fontSize:'1.2rem'}}>ทำการบันทึกข้อมูลของท่านเรียบร้อย โปรดรอการดำเนินการในขั้นถัดไป</p>
                <div>
                <Link to="/" style={{textDecoration:'none'}}><Button>Go To Home Home Page</Button></Link>
                <Link to="/infomation" style={{textDecoration:'none'}}><Button>Go To Home News Page</Button></Link>
                </div>
            </div>
    </React.Fragment>
    )
}

export default Success;
