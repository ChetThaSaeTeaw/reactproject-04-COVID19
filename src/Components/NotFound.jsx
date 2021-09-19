import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <div style={{display:"flex" , flexDirection:"column" , justifyContent:'center', alignItems:'center', maxWidth:'700px', margin:'0 auto'}}>
            <svg style={{width:'220', height:'50vh'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 style={{fontWeight:"bold", marginTop:'-7%', marginBottom:'5%'}}>Not Found 404</h1>
            <p style={{textAlign : 'center'}}>The Page you are looking for doesn't exist or an other error occurred.</p>
            <p style={{textAlign : 'center'}}>Go back, or head over to home to choose a new direction.</p>
            <Link to="/">Back to home page.</Link>
            </div>
        </>
    )
}

export default NotFound;
