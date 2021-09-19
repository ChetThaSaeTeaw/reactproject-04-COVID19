import React , { useState } from 'react'
import './Register.css';
import RegisterP1 from './RegisterP1';
import RegisterP2 from './RegisterP2';

function Register() {

    const [ page1 , setPage1 ] = useState(true);
    const [ page2 , setPage2 ] = useState(false);
    const [ textButton , setTextButton ] = useState("Next");

    function nextPage () {
        setPage1(!page1);
        setPage2(!page2);
        setTextButton(!page2 ? "Prev" : "Next");
    }
 
    return (
       <div className="regis-box">
            { page1 ? <RegisterP1 nextPage={nextPage} textButton={textButton}/> : "" }
            { page2 ? <RegisterP2 nextPage={nextPage} textButton={textButton}/> : "" }
            <div className="overlay"></div>
       </div>
    )
}

export default Register;
